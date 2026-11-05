import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updated="5 novembre 2026">
      <section>
        <h2>Éditeur du site</h2>
        <p>
          Hugo Moulard, entrepreneur individuel (EI), exerçant sous le nom commercial Atsugo Consulting
          <br />
          SIREN : 947 836 102 · TVA non applicable, art. 293 B du CGI
          <br />
          Adresse : 8 allée Chanteclair, 94200 Ivry-sur-Seine, France
          <br />
          Activité : programmation informatique
          <br />
          Directeur de la publication : Hugo Moulard
          <br />
          Contact : <a href="mailto:atsugo.webapp@gmail.com" className="text-accent hover:underline">atsugo.webapp@gmail.com</a>
        </p>
      </section>
      <section>
        <h2>Hébergement</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com
        </p>
      </section>
      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus de ce site (textes, visuels, logo, code) est la propriété exclusive
          de Hugo Moulard (Atsugo Consulting), sauf mention contraire. Toute reproduction sans autorisation préalable est
          interdite.
        </p>
      </section>
      <section>
        <h2>Responsabilité</h2>
        <p>
          Les estimations fournies par le simulateur sont purement indicatives et n&apos;ont aucune valeur
          contractuelle.
        </p>
      </section>
    </LegalPage>
  );
}
