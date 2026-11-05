import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-black/[0.06]">
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" aria-label="Accueil">
            <Logo />
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> Retour au site
          </Link>
        </div>
      </header>
      <main className="container-x max-w-3xl py-20">
        <h1 className="text-4xl font-semibold tracking-tightest sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Dernière mise à jour : {updated}</p>
        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-ink/85 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
