import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { ArchitectureViewer } from "@/components/sections/architecture-viewer";
import { About } from "@/components/sections/about";
import { Simulator } from "@/components/sections/simulator";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <ArchitectureViewer />
        <About />
        <Simulator />
      </main>
      <Footer />
    </>
  );
}
