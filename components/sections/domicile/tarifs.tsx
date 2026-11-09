"use client";

import { motion } from "framer-motion";
import { Check, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { abonnement, forfaits, horsForfait } from "@/lib/domicile";

export function DomicileTarifs() {
  return (
    <section id="tarifs" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des prix fixes, affichés."
          description="Vous choisissez un forfait, je vous confirme le montant au téléphone, et c'est ce montant que vous payez. Le déplacement et le diagnostic sont offerts."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {forfaits.map((f, i) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`card relative flex flex-col p-7 transition-shadow duration-500 hover:shadow-lift ${
                f.featured ? "border-accent/30 ring-1 ring-accent/20" : ""
              }`}
            >
              {f.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                  Le plus demandé
                </span>
              )}

              <h3 className="text-xl font-semibold tracking-tight text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.summary}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tightest text-ink">{f.price}</span>
                {f.strikePrice && (
                  <span className="text-lg text-muted line-through">{f.strikePrice}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted">{f.duration}</p>

              <ul className="mt-6 space-y-2.5">
                {f.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-ink/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <Button href="#rappel" variant="secondary" size="md" className="w-full">
                  Demander ce forfait
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Hors forfait + abonnement */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Reveal className="card flex flex-col p-7">
            <h3 className="text-xl font-semibold tracking-tight text-ink">
              Un besoin qui ne rentre dans aucune case&nbsp;?
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              C&apos;est fréquent, et ce n&apos;est pas un problème. On en parle au téléphone et je vous
              annonce un montant avant de me déplacer.
            </p>
            <dl className="mt-6 divide-y divide-black/[0.06]">
              {horsForfait.map((h) => (
                <div key={h.label} className="flex items-start justify-between gap-6 py-3.5">
                  <div>
                    <dt className="text-[15px] font-medium text-ink">{h.label}</dt>
                    <dd className="mt-0.5 text-sm text-muted">{h.note}</dd>
                  </div>
                  <span className="shrink-0 whitespace-nowrap text-[15px] font-semibold text-ink">
                    {h.price}
                  </span>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative flex flex-col overflow-hidden rounded-3xl bg-ink p-7 text-white sm:p-9"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl"
            />
            <div className="relative">
              <p className="text-sm font-semibold tracking-wide text-[#7FB2FF]">Pour ne plus y penser</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{abonnement.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">{abonnement.pitch}</p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tightest">{abonnement.price}</span>
                <span className="text-white/60">{abonnement.period}</span>
              </p>

              <ul className="mt-6 space-y-2.5">
                {abonnement.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-white/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#7FB2FF]" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-xs text-white/40">{abonnement.note}</p>

              <Button href="#rappel" size="md" variant="secondary" className="mt-6 w-full sm:w-auto">
                <PhoneCall className="h-4 w-4" />
                En savoir plus
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
