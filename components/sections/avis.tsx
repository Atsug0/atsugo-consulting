import { Star } from "lucide-react";
import { avisFor } from "@/lib/avis";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site, type AudienceId } from "@/lib/site";

type Props = {
  audience: AudienceId;
  title?: string;
  description?: string;
};

/** Témoignages clients. Ne s'affiche que s'il y a au moins un avis réel. */
export function Avis({
  audience,
  title = "Ce qu'en disent mes clients.",
  description = "Des avis laissés sur ma fiche Google, après intervention.",
}: Props) {
  const items = avisFor(audience);
  if (items.length === 0) return null;

  const average = items.reduce((sum, a) => sum + a.rating, 0) / items.length;

  return (
    <section id="avis" className="section-y bg-mist">
      <div className="container-x">
        <SectionHeading eyebrow="Avis clients" title={title} description={description} />

        <Reveal delay={0.1} className="mt-8 flex items-center justify-center gap-3">
          <Stars value={Math.round(average)} />
          <span className="text-sm font-medium text-ink/75">
            {average.toFixed(1).replace(".", ",")} / 5 · {items.length} avis
          </span>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((a, i) => (
            <Reveal key={`${a.name}-${a.date}`} delay={0.1 + i * 0.08} className="card flex flex-col p-6">
              <Stars value={a.rating} />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">
                «&nbsp;{a.text}&nbsp;»
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-ink">{a.name}</span>
                <span className="block text-muted">
                  {[a.city, a.date].filter(Boolean).join(" · ")}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        {site.reviewUrl && (
          <Reveal delay={0.2} className="mt-10 text-center">
            <p className="text-[15px] text-muted">
              Vous avez fait appel à moi&nbsp;?{" "}
              <a
                href={site.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:underline"
              >
                Laissez un avis
              </a>{" "}
              — c&apos;est ce qui aide le plus les suivants à me faire confiance.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${value} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden
          className={`h-4 w-4 ${n <= value ? "fill-[#F5A623] text-[#F5A623]" : "fill-black/10 text-black/10"}`}
          strokeWidth={0}
        />
      ))}
    </span>
  );
}
