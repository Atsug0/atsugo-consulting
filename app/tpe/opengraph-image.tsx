import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Atsugo Consulting — informatique pour TPE, commerces et associations";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return renderOgImage({
    badge: "TPE · Commerces · Artisans · Associations",
    title: "Toute votre informatique,",
    accent: "un seul interlocuteur.",
    subtitle: "Site internet, outils sur mesure, IA utile et informatique du quotidien. Devis au forfait.",
  });
}
