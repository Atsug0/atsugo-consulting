# Atsugo Consulting — Site vitrine 

Site Next.js (App Router) · React 19 · Tailwind CSS · Framer Motion · Lucide.

## Démarrer

```bash
npm install
cp .env.example .env.local   # puis renseigner les valeurs
npm run dev                  # http://localhost:3000
```

`npm run build` compile la version de production ; `npm run typecheck` vérifie les types.

## Structure

```
app/
  layout.tsx              Police Inter, métadonnées SEO, providers
  page.tsx                Assemblage de la landing page
  api/contact/route.ts    Réception du formulaire (envoi via Resend si RESEND_API_KEY)
  mentions-legales/       Page légale (champs [à compléter])
  confidentialite/        Politique de confidentialité
components/
  header.tsx              Header sticky, glassmorphism au scroll, menu mobile
  booking-modal.tsx       Modale Calendly / Cal.com (useBooking().open())
  sections/               Hero, Manifeste, Services, Visualiseur, À propos, Simulateur
  ui/                     Button (pill), Reveal (fade + slide-up), SectionHeading
lib/
  site.ts                 Navigation, URLs (booking, LinkedIn)
  estimates.ts            Matrice d'estimation du simulateur (besoin × stade)
```

## Configuration

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_BOOKING_URL` | Lien Calendly ou Cal.com chargé dans la modale |
| `NEXT_PUBLIC_LINKEDIN_URL` | Profil LinkedIn du footer |
| `RESEND_API_KEY` | Active l'envoi d'e-mails ; sans clé, les demandes sont seulement journalisées |
| `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` | Destinataire et expéditeur des e-mails |

## Déploiement

Importer le dépôt sur Vercel, renseigner les variables d'environnement, déployer.
