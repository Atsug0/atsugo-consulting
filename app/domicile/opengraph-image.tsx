import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Atsugo Consulting — dépannage informatique à domicile";
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return renderOgImage({
    badge: "Dépannage informatique à domicile · Val-de-Marne",
    title: "Votre ordinateur vous fait perdre du temps ?",
    accent: "Je m'en occupe.",
    subtitle: "Prix fixes dès 70 €, déplacement offert, rappel gratuit sous 2 h.",
  });
}
