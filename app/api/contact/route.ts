import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  company?: string;
  message?: string;
  need?: string;
  stage?: string;
  estimate?: string;
  source?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Numéro français : 06 12 34 56 78, +33 6 12 34 56 78, 0033… */
const PHONE_RE = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Limitation de débit en mémoire : 5 envois par IP et par quart d'heure.
 * Suffisant pour un site sur une seule instance ; à remplacer par un store
 * partagé (Upstash, Redis) si le site passe sur plusieurs régions.
 */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);

  // Purge opportuniste pour éviter que la Map grossisse indéfiniment.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "inconnue";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de demandes envoyées. Merci de réessayer dans quelques minutes." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Bot détecté : on répond OK sans rien faire.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    city: clean(body.city, 120),
    company: clean(body.company, 160),
    message: clean(body.message, 4000),
    need: clean(body.need, 80),
    stage: clean(body.stage, 80),
    estimate: clean(body.estimate, 80),
    source: clean(body.source, 60) || "Simulateur",
  };

  // Le formulaire de rappel demande un téléphone, le simulateur un e-mail :
  // on exige le nom, et au moins un moyen de recontact valide.
  const hasEmail = EMAIL_RE.test(data.email);
  const hasPhone = PHONE_RE.test(data.phone.replace(/\s/g, " "));

  if (!data.name || (!hasEmail && !hasPhone)) {
    return NextResponse.json(
      { error: "Merci d'indiquer votre nom et un moyen de vous joindre (téléphone ou e-mail)." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[contact] Nouvelle demande (RESEND_API_KEY absente, e-mail non envoyé) :", data);
    return NextResponse.json({ ok: true });
  }

  const rows = [
    ["Origine", data.source],
    ["Nom", data.name],
    ["Téléphone", data.phone || "—"],
    ["E-mail", data.email || "—"],
    ["Ville", data.city || "—"],
    ["Entreprise", data.company || "—"],
    ["Besoin", data.need || "—"],
    ["Stade", data.stage || "—"],
    ["Estimation affichée", data.estimate || "—"],
  ]
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#86868B">${k}</td><td>${escapeHtml(v)}</td></tr>`)
    .join("");

  const subject = hasPhone
    ? `☎️ Rappel à faire — ${data.name}${data.need ? ` · ${data.need}` : ""}`
    : `Nouvelle demande — ${data.need || "Projet"} · ${data.name}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Atsugo Site <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "atsugo.webapp@gmail.com"],
      ...(hasEmail ? { reply_to: data.email } : {}),
      subject,
      html: `<table>${rows}</table><p style="white-space:pre-wrap">${escapeHtml(data.message || "(pas de message)")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Échec Resend", res.status, await res.text().catch(() => ""));
    return NextResponse.json(
      { error: "Envoi impossible pour le moment. Réessayez dans un instant." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
