"use client";

import { motion } from "framer-motion";
import { Check, Code2, Compass, ShieldCheck, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

type Offer = {
  Icon: LucideIcon;
  title: string;
  hook: string;
  points: string[];
  deliverables: string;
};

const offers: Offer[] = [
  {
    Icon: Compass,
    title: "Idéation & Cadrage Tech",
    hook: "Transformer l'idée en roadmap.",
    points: [
      "Choix de la stack technique (Web/Mobile)",
      "Définition du MVP & Découpage fonctionnel",
      "Schématisation d'architecture scalable",
    ],
    deliverables: "Ateliers de cadrage + Document d'architecture + Roadmap technique.",
  },
  {
    Icon: Code2,
    title: "Développement Sur-Mesure",
    hook: "L'excellence du code full-stack.",
    points: [
      "Développement Web (React, Next.js, APIs REST/GraphQL)",
      "Applications Mobiles (iOS/Android)",
      "Code propre, testé, documenté et réutilisable",
    ],
    deliverables: "Application prête pour la production sans dette technique.",
  },
  {
    Icon: ShieldCheck,
    title: "CTO / DSI as a Service",
    hook: "Pilotage senior à la carte.",
    points: [
      "Direction technique externalisée (X jours / mois)",
      "Arbitrages stratégiques & Gouvernance",
      "Mentoring & Structuration de vos équipes de dev",
    ],
    deliverables: "Présence continue et accompagnement au conseil d'administration / comité tech.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading
          eyebrow="Offres & Expertises"
          title="Trois façons de faire avancer votre produit."
          description="Du premier schéma au pilotage d'équipe, une seule exigence : des choix techniques qui servent votre croissance. Je vous accompagne sur l'une de ces trois voies, ou sur les trois."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {offers.map((offer, i) => (
            <motion.article
              key={offer.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="card group flex flex-col p-8 transition-shadow duration-500 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-white">
                <offer.Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{offer.title}</h3>
              <p className="mt-2 text-muted">{offer.hook}</p>

              <ul className="mt-6 space-y-3">
                {offer.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] text-ink/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <div className="rounded-2xl bg-mist p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Livrables</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{offer.deliverables}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
