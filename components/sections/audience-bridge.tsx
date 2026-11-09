import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { audiences, type AudienceId } from "@/lib/site";

/**
 * Passerelle vers les autres publics, en bas de page.
 * Évite qu'un visiteur arrivé sur la mauvaise offre reparte sans rien.
 */
export function AudienceBridge({ current }: { current: AudienceId }) {
  const others = audiences.filter((a) => a.id !== current);

  return (
    <section aria-label="Autres offres" className="border-t border-black/[0.06] bg-white py-16">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-[15px] text-muted">Vous n&apos;êtes pas au bon endroit&nbsp;?</p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
            {others.map((a) => (
              <Link
                key={a.id}
                href={a.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/[0.08] bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-soft"
              >
                <span>
                  <span className="block font-semibold text-ink">{a.label}</span>
                  <span className="mt-0.5 block text-[15px] text-muted">{a.tagline}</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
