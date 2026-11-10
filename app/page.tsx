import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { ArchitectureViewer } from "@/components/sections/architecture-viewer";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Simulator } from "@/components/sections/simulator";
import { AudienceBridge } from "@/components/sections/audience-bridge";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organisation`,
  name: site.name,
  alternateName: ["Atsugo", "atsugo-consulting", "Atsugo Consulting Paris"],
  legalName: `${site.name} (Hugo Moulard)`,
  url: site.url,
  description: site.description,
  email: site.email,
  ...(site.phone ? { telephone: site.phone } : {}),
  founder: { "@type": "Person", name: site.founder, sameAs: [site.linkedinUrl] },
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 allée Chanteclair",
    postalCode: "94200",
    addressLocality: "Ivry-sur-Seine",
    addressCountry: "FR",
  },
  areaServed: "FR",
  sameAs: [site.linkedinUrl],
  logo: `${site.url}/icon-512.png`,
  image: `${site.url}/icon-512.png`,
  knowsAbout: ["CTO externalisé", "Architecture logicielle", "Développement web", "Applications mobiles"],
};

/**
 * Nom de site affiché par Google dans les résultats de recherche. Sans ce
 * noeud, Google déduit le nom du domaine — d'où le « Vercel » affiché tant
 * que le site vivait sur vercel.app.
 */
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: ["Atsugo", "atsugo-consulting", "Atsugo Consulting Paris"],
  url: site.url,
  publisher: { "@id": `${site.url}/#organisation` },
  inLanguage: "fr-FR",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <ArchitectureViewer />
        <Work />
        <About />
        <Simulator />
        <AudienceBridge current="pro" />
      </main>
      <Footer />
    </>
  );
}
