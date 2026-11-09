import Image from "next/image";
import { BadgeEuro, Car, FileText, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { etapes, garanties, photo } from "@/lib/domicile";
import { site } from "@/lib/site";

const icons: LucideIcon[] = [BadgeEuro, Car, ShieldCheck, FileText];

export function DomicileConfiance() {
  return (
    <section id="confiance" className="section-y bg-white">
      <div className="container-x">
        {/* Qui vient chez vous */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <Reveal>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-mist">
              {photo ? (
                <Image
                  src={photo}
                  alt={`${site.founder}, qui intervient chez vous`}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              ) : (
                /* Visuel de substitution tant que `photo` est null dans lib/domicile.ts */
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-mist to-black/[0.06]">
                  <span className="grid h-24 w-24 place-items-center rounded-full bg-white text-3xl font-semibold tracking-tight text-ink shadow-soft">
                    HM
                  </span>
                </div>
              )}
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Qui vient chez vous</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tightest text-ink sm:text-5xl">
              Moi, et personne d&apos;autre.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Je m&apos;appelle {site.founder}, je suis ingénieur et développeur, installé à{" "}
              Ivry-sur-Seine. Pas de centre d&apos;appel, pas de sous-traitant : la personne que vous
              avez au téléphone est celle qui sonne à votre porte.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Mon métier, c&apos;est de concevoir des logiciels. Autant dire qu&apos;un ordinateur
              encombré ou un transfert de données, c&apos;est le quotidien — et que je prendrai le temps
              de vous expliquer ce que j&apos;ai fait, en français et sans jargon.
            </p>

            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {garanties.map((g, i) => {
                const Icon = icons[i] ?? ShieldCheck;
                return (
                  <div key={g.title}>
                    <dt className="flex items-center gap-2.5 font-semibold text-ink">
                      <Icon className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                      {g.title}
                    </dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{g.text}</dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>

        {/* Comment ça se passe */}
        <div className="mt-28 sm:mt-36">
          <SectionHeading
            eyebrow="Comment ça se passe"
            title="Trois étapes, aucune surprise."
          />

          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {etapes.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1} className="card flex flex-col p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{e.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{e.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
