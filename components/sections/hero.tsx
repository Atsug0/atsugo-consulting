"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/components/booking-modal";
import { HeroVisual } from "@/components/sections/hero-visual";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { open } = useBooking();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-white">
      {/* Halo d'ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,102,204,0.10),transparent)]"
      />

      <div className="container-x relative flex min-h-[100svh] flex-col items-center justify-center pb-16 pt-32 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium text-ink/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          CTO Externalisé &amp; Ingénierie Logicielle
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="mt-7 max-w-5xl text-balance text-5xl font-semibold tracking-tightest text-ink sm:text-7xl md:text-8xl"
        >
          De l&apos;idée au produit{" "}
          <span className="bg-gradient-to-r from-ink via-ink/80 to-accent bg-clip-text text-transparent">
            scalable.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
        >
          J&apos;accompagne les fondateurs et dirigeants de la vision stratégique et l&apos;architecture
          jusqu&apos;au développement sur-mesure de leurs applications web et mobiles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button size="lg" onClick={open}>
            <CalendarDays className="h-4 w-4" />
            Prendre rendez-vous (30 min)
          </Button>
          <Button href="#services" size="lg" variant="ghost">
            Explorer mes expertises
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="mt-16 w-full max-w-4xl sm:mt-20"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
