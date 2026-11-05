import Link from "next/link";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-mist">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="text-sm text-muted">© 2026 Atsugo Consulting. Tous droits réservés.</p>
        </div>
        <nav aria-label="Liens légaux" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/mentions-legales" className="transition hover:text-ink">
            Mentions Légales
          </Link>
          <Link href="/confidentialite" className="transition hover:text-ink">
            Politique de Confidentialité
          </Link>
          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">
            Profil LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
