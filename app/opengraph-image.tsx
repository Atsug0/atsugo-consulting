import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Atsugo Consulting — CTO externalisé et développement web et mobile";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return renderOgImage({
    badge: "CTO externalisé & ingénierie logicielle",
    title: "De l'idée au produit",
    accent: "scalable.",
    subtitle:
      "Cadrage d'architecture, développement sur-mesure et direction technique pour startups et éditeurs.",
  });
}
