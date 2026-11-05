import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Mentions légales" };

// TODO : compléter les champs entre [crochets] avec les informations officielles de la société.
export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updated="5 novembre 2026">
      <section>
        <h2>Éditeur du site</h2>
        <p>
          Atsugo Consulting — [forme juridique] au capital de [montant] €<br />
          Siège social : [adresse]<br />
          SIRET : [numéro] · RCS [ville] · TVA intracommunautaire : [numéro]<br />
          Directeur de la publication : [nom du dirigeant]<br />
          Contact : contact@atsugo-consulting.com
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
          d&apos;Atsugo Consulting, sauf mention contraire. Toute reproduction sans autorisation préalable est
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
