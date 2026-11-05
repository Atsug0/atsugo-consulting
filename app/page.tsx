import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { ArchitectureViewer } from "@/components/sections/architecture-viewer";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Simulator } from "@/components/sections/simulator";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
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
  knowsAbout: ["CTO externalisé", "Architecture logicielle", "Développement web", "Applications mobiles"],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <ArchitectureViewer />
        <Work />
        <About />
        <Simulator />
      </main>
      <Footer />
    </>
  );
}
