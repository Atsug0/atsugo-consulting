"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cloud, MonitorSmartphone, Server, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Layer = {
  id: string;
  tab: string;
  Icon: LucideIcon;
  title: string;
  summary: string;
  pillars: { title: string; text: string }[];
  stack: string[];
};

const layers: Layer[] = [
  {
    id: "frontend",
    tab: "Frontend / Mobile",
    Icon: MonitorSmartphone,
    title: "Des interfaces fluides, pensées pour l'utilisateur.",
    summary:
      "Chaque écran est conçu pour être rapide, accessible et cohérent, du web au mobile natif.",
    pillars: [
      { title: "Interfaces fluides", text: "Animations à 60 fps, chargement progressif, rendu serveur et Edge." },
      { title: "Typage strict TypeScript", text: "Contrats partagés de bout en bout : moins de bugs, refactors sereins." },
      { title: "Expérience raffinée", text: "Design system, accessibilité et micro-interactions soignées." },
    ],
    stack: ["React", "Next.js", "TypeScript", "React Native", "Swift / Kotlin", "Tailwind"],
  },
  {
    id: "backend",
    tab: "Backend & APIs",
    Icon: Server,
    title: "Un socle robuste qui grandit avec vous.",
    summary:
      "Une architecture choisie pour votre stade : monolithe modulaire au départ, microservices quand c'est justifié.",
    pillars: [
      { title: "Monolithe modulaire / Microservices", text: "Des frontières métier claires, extraites seulement au bon moment." },
      { title: "Scalabilité automatique", text: "Services sans état, files de messages, cache et montée en charge élastique." },
      { title: "Sécurité native", text: "Authentification, contrôle d'accès, secrets chiffrés et conformité dès la conception." },
    ],
    stack: ["Node.js", "REST", "GraphQL", "PostgreSQL", "Redis", "Queues"],
  },
  {
    id: "cloud",
    tab: "Infrastructure Cloud",
    Icon: Cloud,
    title: "Livrer souvent, dormir tranquille.",
    summary:
      "Une infrastructure reproductible et observable, pour déployer plusieurs fois par jour sans stress.",
    pillars: [
      { title: "CI/CD automatisé", text: "Tests, revue et déploiement continus à chaque commit." },
      { title: "Conteneurisation", text: "Docker et Kubernetes pour des environnements identiques partout." },
      { title: "Monitoring temps réel", text: "Logs, métriques, traces et alertes avant que vos clients ne remarquent quoi que ce soit." },
    ],
    stack: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Vercel / AWS", "OpenTelemetry"],
  },
];

export function ArchitectureViewer() {
  const [activeId, setActiveId] = useState(layers[0].id);
  const active = layers.find((l) => l.id === activeId) ?? layers[0];

  return (
    <section id="architecture" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Comment je construis"
          title="La rigueur, couche par couche."
          description="Les trois piliers techniques sur lesquels je construis chaque projet."
        />

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Couches d'architecture"
            className="inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-mist p-1.5"
          >
            {layers.map((l) => {
              const selected = l.id === activeId;
              return (
                <button
                  key={l.id}
                  role="tab"
                  id={`tab-${l.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${l.id}`}
                  onClick={() => setActiveId(l.id)}
                  className={`relative whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors sm:px-6 ${
                    selected ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="arch-tab-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-soft"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative inline-flex items-center gap-2">
                    <l.Icon className="h-4 w-4" />
                    {l.tab}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10">
          <div className="card overflow-hidden bg-mist/60 p-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`panel-${active.id}`}
                aria-labelledby={`tab-${active.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-2 lg:grid-cols-[1.1fr_1fr]"
              >
                <div className="rounded-[20px] bg-white p-8 sm:p-10">
                  <active.Icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{active.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{active.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {active.stack.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + i * 0.04 }}
                        className="rounded-full border border-black/[0.06] bg-mist px-3 py-1.5 text-xs font-medium text-ink/80"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  {active.pillars.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="flex gap-4 rounded-[20px] bg-white p-6"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{p.title}</p>
                        <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
