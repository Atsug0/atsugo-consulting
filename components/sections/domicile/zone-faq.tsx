import { ChevronDown, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faq, zone } from "@/lib/domicile";

export function DomicileZone() {
  return (
    <section id="zone" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading
          eyebrow="Zone d'intervention"
          title="Je me déplace chez vous."
          description={zone.note}
        />

        <Reveal delay={0.1} className="mt-12">
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
            {zone.villes.map((v) => (
              <li
                key={v}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white px-4 py-2 text-[15px] font-medium text-ink/80"
              >
                <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function DomicileFaq() {
  return (
    <section id="faq" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Ce que l'on me demande le plus."
        />

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <div className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
            {faq.map((item) => (
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
