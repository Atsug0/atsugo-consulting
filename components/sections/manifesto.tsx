"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const TEXT =
  "La complexité technique ne doit jamais freiner l'ambition d'un projet. Chez Atsugo Consulting, nous combinons la rigueur d'un ingénieur en architecture et l'agilité d'un partenaire produit.";

const words = TEXT.split(" ");

export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });

  return (
    <section aria-label="Manifeste" className="section-y bg-white">
      <div className="container-x">
        <p
          ref={ref}
          className="mx-auto max-w-5xl text-center text-3xl font-semibold leading-[1.2] tracking-tightest sm:text-5xl md:text-6xl"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const highlight = children.startsWith("Atsugo") || children === "Consulting,";
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${highlight ? "text-accent" : "text-ink"}`}>
      {children}
    </motion.span>
  );
}
