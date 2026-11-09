import type { AudienceId } from "@/lib/site";

export type Avis = {
  /** Prénom + initiale : suffisant, et conforme à ce qu'on peut publier. */
  name: string;
  city?: string;
  /** Note sur 5, telle que laissée par le client. */
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Mois et année, en clair : « octobre 2026 ». */
  date: string;
  /** Pages sur lesquelles l'avis est affiché. */
  audience: AudienceId[];
};

/**
 * Avis clients réels, recopiés à la main depuis la fiche Google.
 * N'y mettre que des avis effectivement reçus : un faux avis est une pratique
 * commerciale trompeuse, et un avis inventé se repère tout de suite.
 *
 * La section « Avis » reste invisible tant que ce tableau est vide — un
 * bandeau de témoignages désert fait plus de mal que pas de section du tout.
 */
export const avis: Avis[] = [];

export const avisFor = (audience: AudienceId) => avis.filter((a) => a.audience.includes(audience));
