"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, Loader2, PhoneCall, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";

const besoinsDomicile = [
  "Ordinateur lent, qui plante ou qui a un virus",
  "Transfert vers un nouvel ordinateur",
  "Pack « ordinateur comme neuf »",
  "Installation d'un appareil (imprimante, box, TV, téléphone…)",
  "Problème de Wi-Fi ou de connexion internet",
  "Sauvegarde ou récupération de données",
  "Réinstallation complète",
  "Cours / apprendre à me débrouiller",
  "Besoin pour mon commerce ou mon association",
  "Autre / je ne sais pas encore",
];

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Options de la liste "ce dont vous avez besoin". */
  besoins?: string[];
  /** Identifie l'origine de la demande dans l'e-mail reçu. */
  source?: string;
  /** Ajoute un champ e-mail (utile pour les pros, qui écrivent plus qu'ils n'appellent). */
  withEmail?: boolean;
  namePlaceholder?: string;
  messagePlaceholder?: string;
};

export function CallbackForm({
  id = "rappel",
  eyebrow = "Rappel gratuit",
  title = "Laissez-moi votre numéro, je vous rappelle.",
  description = "Deux minutes au téléphone suffisent pour savoir ce qu'il faut faire et combien ça coûtera. Sans engagement, et sans avoir à expliquer votre problème par écrit.",
  besoins = besoinsDomicile,
  source = "Rappel à domicile",
  withEmail = false,
  namePlaceholder = "Martine",
  messagePlaceholder = "Ex. : j'ai acheté un nouveau PC et je voudrais récupérer mes photos et mes mails.",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Une erreur est survenue.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  return (
    <section id={id} className="section-y bg-ink">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[#7FB2FF]">{eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tightest text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">{description}</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-white/[0.06] p-8 text-center sm:p-10"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-7 w-7" strokeWidth={2.5} />
                </span>
                <p className="mt-6 text-2xl font-semibold text-white">C&apos;est noté.</p>
                <p className="mt-2 text-white/60">
                  Je vous rappelle dans les 2 heures si vous avez écrit en journée, et dès demain matin
                  sinon. À tout de suite.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={false}
                className="rounded-3xl bg-white p-6 shadow-lift sm:p-8"
              >
                <div className="grid gap-3">
                  <div>
                    <label htmlFor="cb-name" className="mb-1.5 block text-sm font-medium text-ink">
                      Votre prénom
                    </label>
                    <input
                      id="cb-name"
                      name="name"
                      required
                      autoComplete="given-name"
                      placeholder={namePlaceholder}
                      className="field"
                    />
                  </div>

                  <div>
                    <label htmlFor="cb-phone" className="mb-1.5 block text-sm font-medium text-ink">
                      Votre numéro de téléphone
                    </label>
                    <input
                      id="cb-phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="06 12 34 56 78"
                      className="field"
                    />
                  </div>

                  {withEmail && (
                    <div>
                      <label htmlFor="cb-email" className="mb-1.5 block text-sm font-medium text-ink">
                        Votre e-mail <span className="font-normal text-muted">(facultatif)</span>
                      </label>
                      <input
                        id="cb-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="contact@votre-entreprise.fr"
                        className="field"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="cb-need" className="mb-1.5 block text-sm font-medium text-ink">
                      Ce dont vous avez besoin
                    </label>
                    <select id="cb-need" name="need" className="field appearance-none" defaultValue="">
                      <option value="" disabled>
                        Choisissez dans la liste…
                      </option>
                      {besoins.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cb-message" className="mb-1.5 block text-sm font-medium text-ink">
                      Précisions <span className="font-normal text-muted">(facultatif)</span>
                    </label>
                    <textarea
                      id="cb-message"
                      name="message"
                      rows={3}
                      placeholder={messagePlaceholder}
                      className="field resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="cb-city" className="mb-1.5 block text-sm font-medium text-ink">
                      Votre ville <span className="font-normal text-muted">(facultatif)</span>
                    </label>
                    <input
                      id="cb-city"
                      name="city"
                      autoComplete="address-level2"
                      placeholder="Ivry-sur-Seine"
                      className="field"
                    />
                  </div>
                </div>

                {/* Champ piège anti-spam, invisible pour les humains */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <label className="mt-5 flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-muted">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 text-accent focus:ring-accent/30"
                  />
                  <span>
                    J&apos;accepte d&apos;être rappelé au sujet de ma demande. Mes coordonnées ne servent
                    qu&apos;à cela et ne sont jamais transmises à un tiers.{" "}
                    <Link href="/confidentialite" className="text-accent hover:underline">
                      En savoir plus
                    </Link>
                    .
                  </span>
                </label>

                {error && (
                  <p role="alert" className="mt-4 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <Button type="submit" size="lg" disabled={status === "sending"} className="mt-5 w-full">
                  {status === "sending" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <PhoneCall className="h-4 w-4" />
                  )}
                  Être rappelé gratuitement
                </Button>

                <div className="mt-5 flex flex-col gap-2 text-[13px] text-muted sm:flex-row sm:justify-center sm:gap-5">
                  <span className="inline-flex items-center justify-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-accent" /> Rappel sous 2 h en journée
                  </span>
                  <span className="inline-flex items-center justify-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Aucun démarchage
                  </span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
