export type NeedId = "mvp" | "dev" | "cto";
export type StageId = "idea" | "mockups" | "redesign";

export const needs: { id: NeedId; label: string; description: string }[] = [
  { id: "mvp", label: "Idéation MVP", description: "Cadrer, choisir la stack, dessiner l'architecture." },
  { id: "dev", label: "Dev Web / Mobile", description: "Concevoir et livrer votre application." },
  { id: "cto", label: "CTO as a Service", description: "Un pilotage technique senior, à la carte." },
];

export const stages: { id: StageId; label: string; description: string }[] = [
  { id: "idea", label: "Idée sur papier", description: "Une vision, quelques notes, pas encore de maquettes." },
  { id: "mockups", label: "Maquettes prêtes", description: "Parcours et écrans déjà définis." },
  { id: "redesign", label: "Refonte d'un système existant", description: "Un produit en place à faire évoluer." },
];

export type Estimate = {
  duration: string;
  headline: string;
  phases: string[];
};

const matrix: Record<NeedId, Record<StageId, Estimate>> = {
  mvp: {
    idea: {
      duration: "2 à 3 semaines",
      headline: "Cadrage complet de votre MVP",
      phases: ["Ateliers vision & usages", "Choix de stack & architecture", "Roadmap technique priorisée"],
    },
    mockups: {
      duration: "1 à 2 semaines",
      headline: "Validation technique de vos maquettes",
      phases: ["Revue des parcours", "Découpage fonctionnel & estimation", "Document d'architecture"],
    },
    redesign: {
      duration: "3 à 4 semaines",
      headline: "Audit et plan de transformation",
      phases: ["Cartographie de l'existant", "Architecture cible", "Plan de migration par étapes"],
    },
  },
  dev: {
    idea: {
      duration: "10 à 14 semaines",
      headline: "Du cadrage à la mise en production",
      phases: ["Cadrage & design (2–3 sem.)", "Développement itératif", "Mise en production & suivi"],
    },
    mockups: {
      duration: "6 à 10 semaines",
      headline: "Développement de votre application",
      phases: ["Architecture & socle technique", "Sprints de développement", "Recette & mise en production"],
    },
    redesign: {
      duration: "8 à 16 semaines",
      headline: "Refonte progressive sans interruption",
      phases: ["Audit du code existant", "Refonte module par module", "Bascule et décommissionnement"],
    },
  },
  cto: {
    idea: {
      duration: "Démarrage sous 2 semaines",
      headline: "Un CTO dès le premier jour",
      phases: ["Stratégie produit & tech", "Recrutement des premiers profils", "Pilotage du MVP"],
    },
    mockups: {
      duration: "Démarrage sous 2 semaines",
      headline: "Structurer l'équipe et livrer",
      phases: ["Organisation de l'équipe de dev", "Gouvernance & rituels", "Suivi de la delivery"],
    },
    redesign: {
      duration: "Démarrage sous 1 semaine",
      headline: "Reprendre le pilotage technique",
      phases: ["Diagnostic & quick wins", "Plan de réduction de la dette", "Accompagnement du comité tech"],
    },
  },
};

export function getEstimate(need: NeedId, stage: StageId): Estimate {
  return matrix[need][stage];
}
