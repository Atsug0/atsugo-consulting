"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Dumbbell, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

type Project = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  platforms: string[];
  href: string;
  cta: string;
  Icon: LucideIcon;
  theme: { bg: string; accent: string; glow: string };
};

const projects: Project[] = [
  {
    name: "PvPr",
    category: "Application mobile · Sport",
    tagline: "Le tracker de musculation compétitif.",
    description:
      "Suivi des séances, calcul automatique du 1RM et duels entre amis rendus équitables par la normalisation DOTS.",
    highlights: [
      "Fonctionne hors-ligne avec synchronisation automatique",
      "Moteur de duels de groupe et 118 trophées",
      "Modèle freemium avec abonnement PRO",
    ],
    platforms: ["iOS", "Android", "Site web"],
    href: "https://pvpr-3eccb.web.app/",
    cta: "Voir le site",
    Icon: Dumbbell,
    theme: { bg: "bg-[#0B0B12]", accent: "text-[#3DF58C]", glow: "bg-[#7C3AED]/40" },
  },
  {
    name: "BookMe",
    category: "Application mobile · Marketplace",
    tagline: "La prise de rendez-vous, en un tap.",
    description:
      "Plateforme de réservation entre clients et professionnels : disponibilités en temps réel, rappels et messagerie intégrée.",
    highlights: [
      "Double parcours client / professionnel",
      "Agenda temps réel, sans double réservation",
      "Messagerie, avis vérifiés et statistiques",
    ],
    platforms: ["Android", "Google Play"],
    href: "https://play.google.com/store/apps/details?id=atsugo.bookme.app",
    cta: "Voir sur Google Play",
    Icon: CalendarCheck,
    theme: { bg: "bg-[#0A1A33]", accent: "text-[#7FB2FF]", glow: "bg-[#0066CC]/50" },
  },
];

export function Work() {
  return (
    <section id="realisations" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading
          eyebrow="Réalisations"
          title="Des produits conçus, codés et publiés."
          description="De l'idée à la publication sur les stores : deux applications que j'ai conçues et développées de bout en bout, seul."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="card group flex flex-col overflow-hidden transition-shadow duration-500 hover:shadow-lift"
            >
              {/* Bandeau visuel */}
              <div className={`relative flex h-56 items-center justify-center overflow-hidden ${p.theme.bg}`}>
                <div
                  aria-hidden
                  className={`absolute h-64 w-64 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125 ${p.theme.glow}`}
                />
                <div className="relative flex flex-col items-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-[20px] bg-white/10 backdrop-blur-md">
                    <p.Icon className={`h-8 w-8 ${p.theme.accent}`} strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 text-3xl font-bold tracking-tight text-white">{p.name}</p>
                  <p className="mt-1 text-sm text-white/60">{p.tagline}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">{p.category}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/85">{p.description}</p>
                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-ink/80">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                  <div className="flex flex-wrap gap-2">
                    {p.platforms.map((pl) => (
                      <span key={pl} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink/70">
                        {pl}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
