export const site = {
  name: "Atsugo Consulting",
  url: "https://atsugo-consulting.com",
  description:
    "CTO externalisé, cadrage d'architecture et développement sur-mesure d'applications web et mobiles pour startups et PME ambitieuses.",
  email: "atsugo.webapp@gmail.com",
  founder: "Hugo Moulard",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://calendly.com/atsugo-webapp/30min",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/hugo-moulard-248890256/",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Architecture", href: "#architecture" },
    { label: "Réalisations", href: "#realisations" },
    { label: "À propos", href: "#a-propos" },
    { label: "Simulateur", href: "#simulateur" },
  ],
} as const;
