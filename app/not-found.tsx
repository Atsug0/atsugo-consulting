import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { audiences } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-mist via-white to-white">
        <div className="container-x flex min-h-[80svh] flex-col items-center justify-center py-32 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mist">
            <Compass className="h-6 w-6 text-accent" strokeWidth={1.75} />
          </span>
          <p className="eyebrow mt-7">Erreur 404</p>
          <h1 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tightest sm:text-6xl">
            Cette page n&apos;existe pas (ou plus).
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Le lien est peut-être incomplet. Voici les trois portes d&apos;entrée du site, selon ce que
            vous cherchez.
          </p>

          <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            {audiences.map((a) => (
              <a
                key={a.id}
                href={a.href}
                className="card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <p className="font-semibold text-ink">{a.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.tagline}</p>
              </a>
            ))}
          </div>

          <Button href="/" size="lg" variant="ghost" className="mt-10">
            Retour à l&apos;accueil
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
