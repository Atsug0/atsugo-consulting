export const site = {
  name: "Atsugo Consulting",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://atsugo-consulting.vercel.app",
  description:
    "CTO externalisé, cadrage d'architecture et développement sur-mesure d'applications web et mobiles pour startups et PME ambitieuses.",
  email: "atsugo.webapp@gmail.com",
  founder: "Hugo Moulard",
  siren: "947 836 102",
  city: "Ivry-sur-Seine",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendly.com/atsugo-webapp/30min",
  /**
   * Numéro affiché publiquement (boutons « Appeler », barre mobile, JSON-LD).
   * Vide = aucun bouton d'appel nulle part : le site retombe sur le formulaire
   * de rappel. Renseigner NEXT_PUBLIC_PHONE active l'appel partout d'un coup.
   */
  phone: process.env.NEXT_PUBLIC_PHONE ?? "",
  /** Lien WhatsApp (wa.me/33…). Optionnel, affiché à côté de l'appel. */
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  /** Lien « laisser un avis » (fiche Google). Vide = le lien n'apparaît pas. */
  reviewUrl: process.env.NEXT_PUBLIC_REVIEW_URL ?? "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/hugo-moulard-248890256/",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Architecture", href: "#architecture" },
    { label: "Réalisations", href: "#realisations" },
    { label: "À propos", href: "#a-propos" },
    { label: "Simulateur", href: "#simulateur" },
  ],
} as const;

/** `tel:` normalisé (sans espaces) à partir du numéro affiché. */
export const telHref = site.phone ? `tel:${site.phone.replace(/[^+\d]/g, "")}` : "";

export type AudienceId = "pro" | "tpe" | "domicile";

/** Les trois publics, et leur porte d'entrée. */
export const audiences: {
  id: AudienceId;
  label: string;
  short: string;
  tagline: string;
  href: string;
}[] = [
  {
    id: "pro",
    label: "Startups & éditeurs",
    short: "Startups",
    tagline: "Produit, architecture, CTO externalisé.",
    href: "/",
  },
  {
    id: "tpe",
    label: "TPE, commerces & assos",
    short: "TPE",
    tagline: "Site, outils, IA et informatique du quotidien.",
    href: "/tpe",
  },
  {
    id: "domicile",
    label: "Particuliers",
    short: "Particuliers",
    tagline: "Dépannage et assistance à domicile.",
    href: "/domicile",
  },
];

/** Navigation et CTA par page. */
export const navByAudience: Record<
  AudienceId,
  { nav: { label: string; href: string }[]; ctaLabel: string; ctaHref: string }
> = {
  pro: {
    nav: site.nav.map((i) => ({ label: i.label, href: `/${i.href}` })),
    ctaLabel: "Échanger sur mon projet",
    ctaHref: "/#simulateur",
  },
  tpe: {
    nav: [
      { label: "Ce que je fais", href: "/tpe#domaines" },
      { label: "Tarifs", href: "/tpe#tarifs" },
      { label: "Méthode", href: "/tpe#methode" },
      { label: "Questions", href: "/tpe#faq" },
    ],
    ctaLabel: "Parler de mon besoin",
    ctaHref: "/tpe#contact",
  },
  domicile: {
    nav: [
      { label: "Prestations", href: "/domicile#prestations" },
      { label: "Tarifs", href: "/domicile#tarifs" },
      { label: "Comment ça marche", href: "/domicile#confiance" },
      { label: "Zone", href: "/domicile#zone" },
      { label: "Questions", href: "/domicile#faq" },
    ],
    ctaLabel: "Être rappelé",
    ctaHref: "/domicile#rappel",
  },
};
