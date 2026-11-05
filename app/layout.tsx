import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — CTO externalisé & développement web et mobile`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "CTO externalisé",
    "CTO as a Service",
    "DSI externalisé",
    "développeur freelance",
    "développement application mobile",
    "développement web sur-mesure",
    "architecture logicielle",
    "cadrage MVP",
    "Next.js",
    "React Native",
    "Paris",
    "Ivry-sur-Seine",
  ],
  authors: [{ name: site.founder, url: site.linkedinUrl }],
  alternates: { canonical: "/" },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: `${site.name} — De l'idée au produit scalable`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
