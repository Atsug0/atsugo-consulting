"use client";

import {
  Briefcase,
  GraduationCap,
  Laptop,
  PlugZap,
  ShieldCheck,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryGrid } from "@/components/ui/category-grid";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { prestations } from "@/lib/domicile";

const icons: Record<string, LucideIcon> = {
  ordinateur: Laptop,
  installation: PlugZap,
  internet: Wifi,
  donnees: ShieldCheck,
  accompagnement: GraduationCap,
  pro: Briefcase,
};

export function DomicilePrestations() {
  return (
    <section id="prestations" className="section-y bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tout ce que je fais"
          title="Pas seulement du nettoyage."
          description="Si ça s'allume, se connecte ou stocke vos souvenirs, c'est probablement dans cette liste. Et si votre problème n'y est pas, appelez quand même : je vous dirai franchement si je peux vous aider."
        />

        <div className="mt-16">
          <CategoryGrid categories={prestations} icons={icons} />
        </div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <p className="text-lg text-muted">Votre souci ne ressemble à rien de tout ça&nbsp;?</p>
          <Button href="#rappel" size="lg" variant="ghost" className="mt-3">
            Décrivez-le moi, je vous rappelle
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
