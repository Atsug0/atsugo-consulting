import Link from "next/link";
import { Logo } from "@/components/logo";
import { site, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-mist">
      <div className="container-x flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {site.founder} — ingénieur et développeur, basé à {site.city}.
            </p>
            <div className="flex flex-col gap-1.5">
              {telHref && (
                <a href={telHref} className="text-sm font-medium text-ink transition hover:text-accent">
                  {site.phone}
                </a>
              )}
              <a
                href={`mailto:${site.email}`}
                className="inline-block text-sm text-accent transition hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-14">
            <nav aria-label="Offres" className="flex flex-col gap-2.5 text-sm">
              <p className="font-semibold text-ink">Offres</p>
              <Link href="/#services" className="text-muted transition hover:text-ink">
                Startups & éditeurs
              </Link>
              <Link href="/tpe" className="text-muted transition hover:text-ink">
                TPE, commerces & associations
              </Link>
              <Link href="/domicile" className="text-muted transition hover:text-ink">
                Particuliers — à domicile
              </Link>
              <Link href="/#realisations" className="text-muted transition hover:text-ink">
                Réalisations
              </Link>
            </nav>

            <nav aria-label="Informations" className="flex flex-col gap-2.5 text-sm">
              <p className="font-semibold text-ink">Informations</p>
              <Link href="/mentions-legales" className="text-muted transition hover:text-ink">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-muted transition hover:text-ink">
                Politique de confidentialité
              </Link>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition hover:text-ink"
              >
                Profil LinkedIn
              </a>
              {site.reviewUrl && (
                <a
                  href={site.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition hover:text-ink"
                >
                  Laisser un avis
                </a>
              )}
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-black/[0.06] pt-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Atsugo Consulting. Tous droits réservés.
          </p>
          <p>Entrepreneur individuel · SIREN {site.siren}</p>
        </div>
      </div>
    </footer>
  );
}
