import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  need?: string;
  stage?: string;
  estimate?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
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
    company: clean(body.company, 160),
    message: clean(body.message, 4000),
    need: clean(body.need, 80),
    stage: clean(body.stage, 80),
    estimate: clean(body.estimate, 80),
  };

  if (!data.name || !EMAIL_RE.test(data.email)) {
    return NextResponse.json({ error: "Merci d'indiquer votre nom et un e-mail valide." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[contact] Nouvelle demande (RESEND_API_KEY absente, e-mail non envoyé) :", data);
    return NextResponse.json({ ok: true });
  }

  const rows = [
    ["Nom", data.name],
    ["E-mail", data.email],
    ["Entreprise", data.company || "—"],
    ["Besoin", data.need || "—"],
    ["Stade", data.stage || "—"],
    ["Estimation affichée", data.estimate || "—"],
  ]
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#86868B">${k}</td><td>${escapeHtml(v)}</td></tr>`)
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Atsugo Site <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "atsugo.webapp@gmail.com"],
      reply_to: data.email,
      subject: `Nouvelle demande — ${data.need || "Projet"} · ${data.name}`,
      html: `<table>${rows}</table><p style="white-space:pre-wrap">${escapeHtml(data.message || "(pas de message)")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Échec Resend", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "Envoi impossible pour le moment. Réessayez ou réservez un créneau." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
