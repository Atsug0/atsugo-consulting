"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeEuro, Car, FileText, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { zone } from "@/lib/domicile";

const ease = [0.22, 1, 0.36, 1] as const;

const reassurances = [
  { Icon: BadgeEuro, label: "Prix fixe annoncé avant" },
  { Icon: Car, label: "Déplacement offert" },
  { Icon: FileText, label: "Facture à chaque passage" },
];

export function DomicileHero() {
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
          Dépannage informatique à domicile · {zone.base} et alentours
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="mt-7 max-w-4xl text-balance text-4xl font-semibold tracking-tightest text-ink sm:text-6xl md:text-7xl"
        >
          Votre ordinateur vous fait perdre du temps&nbsp;?{" "}
          <span className="text-accent">Je m&apos;en occupe.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
        >
          Ordinateur qui rame, Wi-Fi capricieux, nouvel appareil à installer, photos à sauvegarder,
          transfert vers une nouvelle machine&nbsp;: je viens chez vous, je vous explique simplement,
          et vous savez combien ça coûte avant que je vienne.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease }}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button href="#rappel" size="lg" className="w-full sm:w-auto">
            <PhoneCall className="h-4 w-4" />
            Être rappelé gratuitement
          </Button>
          <Button href="#tarifs" size="lg" variant="ghost" className="w-full sm:w-auto">
            Voir les tarifs
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.34, ease }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
        >
          {reassurances.map((r) => (
            <li key={r.label} className="inline-flex items-center gap-2 text-sm font-medium text-ink/75">
              <r.Icon className="h-4 w-4 text-accent" strokeWidth={2} />
              {r.label}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
