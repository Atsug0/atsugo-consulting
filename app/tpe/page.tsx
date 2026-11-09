import type { Metadata } from "next";
import { Header } from "@/components/header";
import { AudienceBridge } from "@/components/sections/audience-bridge";
import { Footer } from "@/components/footer";
import { CallbackForm } from "@/components/sections/domicile/callback-form";
import {
  TpeDomaines,
  TpeFaq,
  TpeHero,
  TpeMethode,
  TpeTarifs,
} from "@/components/sections/tpe/sections";
import { domaines, faqTpe } from "@/lib/tpe";
import { zone } from "@/lib/domicile";
import { site } from "@/lib/site";

const title = "Informatique pour TPE, commerces & associations — site, outils sur mesure et IA";
const description =
  "Site internet, application métier, automatisation, agent IA et informatique du quotidien pour les petites structures. Devis au forfait, sans jargon, à Ivry-sur-Seine et en Île-de-France.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tpe" },
  keywords: [
    "création site internet TPE",
    "site vitrine artisan commerçant",
    "application métier sur mesure TPE",
    "automatisation PME",
    "agent IA pour TPE",
    "chatbot site internet entreprise",
    "informatique petite entreprise Ivry-sur-Seine",
    "prestataire informatique Val-de-Marne",
    "outil de devis et planning sur mesure",
    "site internet association",
  ],
  openGraph: {
    title,
    description,
    url: `${site.url}/tpe`,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/tpe#service`,
  name: `${site.name} — Informatique pour TPE et commerces`,
  url: `${site.url}/tpe`,
  email: site.email,
  description,
  priceRange: "190 € – 5 000 €",
  founder: { "@type": "Person", name: site.founder },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    postalCode: "94200",
    addressCountry: "FR",
  },
  areaServed: zone.villes.map((v) => ({ "@type": "City", name: v })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations pour petites structures",
    itemListElement: domaines.map((d) => ({
      "@type": "OfferCatalog",
      name: d.title,
      description: d.intro,
      itemListElement: d.items.map((item) => ({
        "@type": "Offer",
        name: item,
        priceCurrency: "EUR",
      })),
    })),
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqTpe.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const besoinsTpe = [
  "Créer ou refaire mon site internet",
  "Être visible sur Google dans ma ville",
  "Un outil sur mesure (devis, planning, clients…)",
  "Un questionnaire ou formulaire en ligne",
  "Mettre de l'IA au service de mon activité",
  "Automatiser une tâche qui me prend du temps",
  "Équiper ou dépanner mes postes et mon réseau",
  "Un audit : savoir par où commencer",
  "Autre / je ne sais pas encore",
];

export default function TpePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header variant="tpe" />
      <main>
        <TpeHero />
        <TpeDomaines />
        <TpeTarifs />
        <TpeMethode />
        <TpeFaq />
        <CallbackForm
          id="contact"
          eyebrow="Premier échange offert"
          title="Dites-moi ce qui vous fait perdre du temps."
          description="Un appel de 15 minutes suffit pour savoir si je peux vous aider, et à quel budget. Si ce n'est pas mon métier, je vous le dirai et je vous orienterai."
          besoins={besoinsTpe}
          source="Contact TPE"
          withEmail
          namePlaceholder="Prénom et nom"
          messagePlaceholder="Ex. : je passe deux heures par semaine à recopier mes devis dans un tableur, et mon site date de 2016."
        />
        <AudienceBridge current="tpe" />
      </main>
      <Footer />
    </>
  );
}
