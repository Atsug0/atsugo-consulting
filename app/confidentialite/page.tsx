import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité" updated="5 novembre 2026">
      <section>
        <h2>Responsable du traitement</h2>
        <p>
          Hugo Moulard, entrepreneur individuel (Atsugo Consulting), SIREN 947 836 102, 94200 Ivry-sur-Seine —
          atsugo.webapp@gmail.com
        </p>
      </section>
      <section>
        <h2>Données collectées</h2>
        <p>
          Via le formulaire du simulateur, nous collectons uniquement : nom, e-mail, entreprise (facultatif),
          message et réponses au simulateur. Aucune donnée n&apos;est collectée à votre insu.
        </p>
      </section>
      <section>
        <h2>Finalité et base légale</h2>
        <p>
          Ces données servent exclusivement à répondre à votre demande et à préparer notre échange (intérêt
          légitime / mesures précontractuelles, art. 6 RGPD). Elles ne sont ni revendues ni cédées.
        </p>
      </section>
      <section>
        <h2>Durée de conservation</h2>
        <p>Les données sont conservées 3 ans maximum après notre dernier contact.</p>
      </section>
      <section>
        <h2>Sous-traitants</h2>
        <p>
          Hébergement : Vercel. Envoi d&apos;e-mails : Resend. Prise de rendez-vous : Calendly
          (soumis à leurs propres politiques lorsque vous utilisez le calendrier).
        </p>
      </section>
      <section>
        <h2>Vos droits</h2>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition et de
          portabilité. Pour l&apos;exercer : atsugo.webapp@gmail.com. Vous pouvez également saisir la CNIL
          (cnil.fr).
        </p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>Ce site n&apos;utilise aucun cookie de suivi ou publicitaire.</p>
      </section>
    </LegalPage>
  );
}
