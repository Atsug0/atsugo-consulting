import { Code2, Network, UserRound } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";

const skills = [
  {
    Icon: Network,
    title: "Ingénieur gouvernance & systèmes",
    text: "Vision d'ensemble, arbitrages, sécurité et pilotage des systèmes d'information.",
  },
  {
    Icon: Code2,
    title: "Développeur Full-Stack & Mobile",
    text: "Des années à concevoir et livrer des applications web et mobiles en production.",
  },
];

export function About() {
  return (
    <section id="a-propos" className="section-y bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">À propos & Fondateur</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tightest sm:text-5xl md:text-6xl">
            Une double compétence rare.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Ingénieur en gouvernance et systèmes, doublé d&apos;un développeur full-stack et mobile
            chevronné : je parle stratégie avec vos dirigeants et architecture avec vos équipes.
          </p>

          <div className="mt-10 space-y-4">
            {skills.map((s, i) => (
              <Reveal key={s.title} delay={0.1 + i * 0.1} className="card flex gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mist">
                  <s.Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-1 text-[15px] text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <figure className="relative overflow-hidden rounded-[32px] bg-ink p-10 text-white shadow-lift sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
            />
            <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white/10">
              <UserRound className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <blockquote className="relative mt-8 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              «&nbsp;Pas d&apos;intermédiaires, pas de commercial sans compétence technique. Vous
              échangez directement avec l&apos;expert qui conçoit et bâtit votre solution.&nbsp;»
            </blockquote>
            <figcaption className="relative mt-8">
              <span className="block font-semibold text-white">{site.founder}</span>
              <span className="text-sm text-white/60">Fondateur, Atsugo Consulting</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
