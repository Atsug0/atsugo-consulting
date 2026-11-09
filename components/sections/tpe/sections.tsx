"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Compass,
  Globe,
  MessageSquare,
  Server,
  Sparkles,
  Wrench,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryGrid } from "@/components/ui/category-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { domaines, faqTpe, methode, offres, recurrent } from "@/lib/tpe";

const ease = [0.22, 1, 0.36, 1] as const;

const icons: Record<string, LucideIcon> = {
  site: Globe,
  outils: Wrench,
  ia: Bot,
  automatisation: Workflow,
  poste: Server,
  accompagnement: Compass,
};

export function TpeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-25%] h-[560px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,102,204,0.10),transparent)]"
      />
      <div className="container-x relative flex flex-col items-center pb-20 pt-32 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium text-ink/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          TPE · Commerces · Artisans · Associations
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="mt-7 max-w-4xl text-balance text-4xl font-semibold tracking-tightest text-ink sm:text-6xl md:text-7xl"
        >
          Toute votre informatique,{" "}
          <span className="text-accent">un seul interlocuteur.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
        >
          Un site qui vous amène des clients, un outil qui remplace vos tableurs, une IA qui vous
          fait gagner des heures, et le dépannage quand l&apos;imprimante lâche. Sans jargon, à prix
          annoncé, et vous restez propriétaire de tout.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease }}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button href="#contact" size="lg" className="w-full sm:w-auto">
            <MessageSquare className="h-4 w-4" />
            Parler de mon besoin
          </Button>
          <Button href="#domaines" size="lg" variant="ghost" className="w-full sm:w-auto">
            Voir ce que je fais
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function TpeDomaines() {
  return (
    <section id="domaines" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ce que je fais"
          title="Du site vitrine à l'agent IA."
          description="Six domaines, un seul prestataire. L'intérêt : personne ne se renvoie la balle quand quelque chose coince, et les outils que je mets en place savent se parler."
        />
        <div className="mt-16">
          <CategoryGrid categories={domaines} icons={icons} />
        </div>
      </div>
    </section>
  );
}

export function TpeTarifs() {
  return (
    <section id="tarifs" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading
          eyebrow="Repères de prix"
          title="Vous saurez combien avant de commencer."
          description="Chaque projet fait l'objet d'un devis au forfait, avec un périmètre écrit. Voici les ordres de grandeur pour situer votre budget dès maintenant."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {offres.map((o, i) => (
            <motion.article
              key={o.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              whileHover={{ y: -6 }}
              className={`card relative flex flex-col p-7 transition-shadow duration-500 hover:shadow-lift ${
                o.featured ? "border-accent/30 ring-1 ring-accent/20" : ""
              }`}
            >
              {o.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                  Le plus demandé
                </span>
              )}
              <h3 className="text-xl font-semibold tracking-tight text-ink">{o.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{o.summary}</p>

              <p className="mt-6 text-3xl font-semibold tracking-tightest text-ink">{o.price}</p>
              <p className="mt-1 text-sm text-muted">{o.note}</p>

              <ul className="mt-6 space-y-2.5">
                {o.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-ink/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <Button href="#contact" variant="secondary" size="md" className="w-full">
                  Demander un devis
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.1} className="card mt-5 p-7 sm:p-9">
          <h3 className="text-xl font-semibold tracking-tight text-ink">
            Petits forfaits et accompagnement régulier
          </h3>
          <dl className="mt-6 grid gap-x-12 sm:grid-cols-2">
            {recurrent.map((r) => (
              <div
                key={r.label}
                className="flex items-start justify-between gap-6 border-b border-black/[0.06] py-3.5"
              >
                <div>
                  <dt className="text-[15px] font-medium text-ink">{r.label}</dt>
                  <dd className="mt-0.5 text-sm text-muted">{r.note}</dd>
                </div>
                <span className="shrink-0 whitespace-nowrap text-[15px] font-semibold text-ink">
                  {r.price}
                </span>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted">
            Prix nets, sans TVA à ajouter&nbsp;: en franchise en base, le montant affiché est celui
            que vous payez. Tarifs réduits pour les associations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function TpeMethode() {
  return (
    <section id="methode" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Méthode"
          title="Comment je travaille."
          description="Quatre engagements qui évitent les mauvaises surprises — les vôtres comme les miennes."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2">
          {methode.map((m, i) => (
            <Reveal key={m.title} delay={(i % 2) * 0.1} className="card flex gap-5 p-7">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{m.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function TpeFaq() {
  return (
    <section id="faq" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading eyebrow="Questions fréquentes" title="Ce que l'on me demande le plus." />
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
            {faqTpe.map((item) => (
              <details key={item.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-medium text-ink transition hover:text-accent [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:-rotate-180"
                    strokeWidth={2}
                  />
                </summary>
                <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
