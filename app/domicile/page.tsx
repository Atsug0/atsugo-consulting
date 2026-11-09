import type { Metadata } from "next";
import { Header } from "@/components/header";
import { AudienceBridge } from "@/components/sections/audience-bridge";
import { Footer } from "@/components/footer";
import { DomicileHero } from "@/components/sections/domicile/hero";
import { DomicilePrestations } from "@/components/sections/domicile/prestations";
import { DomicileTarifs } from "@/components/sections/domicile/tarifs";
import { DomicileConfiance } from "@/components/sections/domicile/confiance";
import { DomicileFaq, DomicileZone } from "@/components/sections/domicile/zone-faq";
import { CallbackForm } from "@/components/sections/domicile/callback-form";
import { faq, forfaits, zone } from "@/lib/domicile";
import { Avis } from "@/components/sections/avis";
import { ActionBar } from "@/components/action-bar";
import { site } from "@/lib/site";

const title = "Dépannage informatique à domicile — Ivry-sur-Seine & Val-de-Marne";
const description =
  "Dépannage, installation, Wi-Fi, sauvegarde, transfert de données et cours informatique à domicile. Prix fixes dès 70 €, déplacement offert, rappel gratuit sous 2 h.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/domicile" },
  keywords: [
    "dépannage informatique à domicile",
    "dépannage informatique Ivry-sur-Seine",
    "transfert de données ordinateur",
    "nettoyage ordinateur lent",
    "assistance informatique Val-de-Marne",
    "aide informatique à domicile",
    "sauvegarde photos ordinateur",
    "cours informatique particulier",
    "installation imprimante wifi domicile",
    "configuration box internet",
    "récupération de données",
    "suppression virus ordinateur",
  ],
  openGraph: {
    title,
    description,
    url: `${site.url}/domicile`,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

/** Fiche établissement + catalogue de prestations : indispensable pour le référencement local. */
const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/domicile#business`,
  name: `${site.name} — Dépannage à domicile`,
  url: `${site.url}/domicile`,
  email: site.email,
  ...(site.phone ? { telephone: site.phone } : {}),
  description,
  priceRange: "55 € – 170 €",
  founder: { "@type": "Person", name: site.founder },
  address: { "@type": "PostalAddress", addressLocality: site.city, postalCode: "94200", addressCountry: "FR" },
  areaServed: zone.villes.map((v) => ({ "@type": "City", name: v })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations à domicile",
    itemListElement: forfaits.map((f) => ({
      "@type": "Offer",
      name: f.title,
      description: f.summary,
      price: f.price.replace(/[^\d]/g, ""),
      priceCurrency: "EUR",
    })),
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function DomicilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header variant="domicile" />
      <main>
        <DomicileHero />
        <DomicilePrestations />
        <DomicileTarifs />
        <DomicileConfiance />
        <Avis audience="domicile" />
        <DomicileZone />
        <DomicileFaq />
        <CallbackForm />
        <AudienceBridge current="domicile" />
      </main>
      <ActionBar target="rappel" label="Être rappelé" />
      <Footer />
    </>
  );
}
