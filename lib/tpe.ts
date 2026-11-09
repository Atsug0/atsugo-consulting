/**
 * Offre TPE / commerces / associations / indépendants.
 * Positionnement : un seul interlocuteur pour toute l'informatique,
 * du poste de travail à l'outil sur mesure.
 */

export type Domaine = {
  id: string;
  title: string;
  intro: string;
  items: string[];
  from: string;
};

export const domaines: Domaine[] = [
  {
    id: "site",
    title: "Site internet & visibilité",
    intro: "Être trouvé quand quelqu'un cherche ce que vous faites.",
    items: [
      "Site vitrine qui donne envie et qui charge vite",
      "Refonte d'un site vieillissant ou impossible à modifier",
      "Fiche Google : apparaître dans les recherches et sur Maps",
      "Prise de rendez-vous ou devis directement en ligne",
      "Pages adaptées à votre ville et à votre métier",
      "Vous former pour modifier vos textes vous-même",
    ],
    from: "à partir de 650 €",
  },
  {
    id: "outils",
    title: "Outils & petites applications",
    intro: "Quand le tableur a atteint ses limites et vous fait perdre des heures.",
    items: [
      "Devis et factures générés sans ressaisie",
      "Planning, réservations, suivi des interventions",
      "Fichier clients, relances et historique au même endroit",
      "Questionnaires et formulaires : inscriptions, satisfaction, adhésions",
      "Tableau de bord simple avec vos vrais chiffres",
      "Application interne sur mesure, sur mobile comme sur ordinateur",
    ],
    from: "à partir de 450 €",
  },
  {
    id: "ia",
    title: "Intelligence artificielle utile",
    intro: "Pas de gadget : de l'IA sur vos données, pour du temps réellement gagné.",
    items: [
      "Assistant qui répond aux questions de vos clients sur votre site",
      "Tri et classement automatique des mails et demandes entrantes",
      "Rédaction de devis, comptes-rendus et réponses types",
      "Extraction d'informations depuis des PDF, factures ou formulaires",
      "Agent qui enchaîne plusieurs étapes à votre place, sous votre contrôle",
      "Atelier : utiliser l'IA correctement dans votre métier",
    ],
    from: "à partir de 1 500 €",
  },
  {
    id: "automatisation",
    title: "Automatisation & connexions",
    intro: "Faire parler entre eux les outils que vous utilisez déjà.",
    items: [
      "Relier votre site, votre agenda et votre boîte mail",
      "Fin des recopies d'un logiciel à l'autre",
      "Relances et rappels envoyés tout seuls",
      "Export automatique vers votre comptable",
      "Alertes quand quelque chose demande votre attention",
      "Reprise et nettoyage d'un fichier client bancal",
    ],
    from: "à partir de 600 €",
  },
  {
    id: "poste",
    title: "Postes, réseau & sécurité",
    intro: "L'informatique du quotidien qui doit juste fonctionner.",
    items: [
      "Choix, achat et mise en service de vos ordinateurs",
      "Messagerie professionnelle à votre nom de domaine",
      "Partage de fichiers entre plusieurs postes, et sauvegarde",
      "Wi-Fi, réseau, imprimantes, caisse et terminal de paiement",
      "Antivirus, mots de passe, sécurisation des accès",
      "Dépannage quand quelque chose tombe en panne",
    ],
    from: "70 €/h",
  },
  {
    id: "accompagnement",
    title: "Conseil & accompagnement",
    intro: "Un avis technique honnête avant de signer quoi que ce soit.",
    items: [
      "Audit : ce qui vous fait perdre du temps et de l'argent",
      "Relecture d'un devis prestataire avant signature",
      "Choix d'un logiciel métier, sans commission ni parti pris",
      "Reprise d'un projet mal parti ou d'un prestataire parti",
      "Formation de votre équipe aux outils en place",
      "Présence régulière, quelques heures par mois",
    ],
    from: "190 € l'audit",
  },
];

export type Offre = {
  title: string;
  summary: string;
  price: string;
  note: string;
  includes: string[];
  featured?: boolean;
};

export const offres: Offre[] = [
  {
    title: "Présence en ligne",
    summary: "Un site qui vous représente et qui vous amène des clients.",
    price: "1 400 €",
    note: "Site vitrine 4 à 6 pages · livré en 3 à 4 semaines",
    includes: [
      "Conception, rédaction assistée et mise en ligne",
      "Mobile, rapide, accessible",
      "Référencement local et fiche Google",
      "Formulaire de contact ou prise de rendez-vous",
      "Formation pour modifier vos textes",
    ],
  },
  {
    title: "Outil sur mesure",
    summary: "L'application qui fait exactement ce que votre métier demande.",
    price: "à partir de 1 500 €",
    note: "Devis au forfait après un atelier de cadrage offert",
    includes: [
      "Atelier de cadrage pour cerner le vrai besoin",
      "Une première version utilisable en quelques semaines",
      "Ajustements après vos premiers jours d'usage",
      "Vos données vous appartiennent, exportables à tout moment",
      "Code documenté : vous n'êtes pas prisonnier de moi",
    ],
    featured: true,
  },
  {
    title: "IA & automatisation",
    summary: "Déléguer les tâches répétitives à une machine, pas à une embauche.",
    price: "à partir de 1 500 €",
    note: "Puis 40 à 90 €/mois d'hébergement et de supervision",
    includes: [
      "Identification des tâches qui valent le coup",
      "Mise en place sur vos propres données",
      "Garde-fous : vous validez avant tout envoi",
      "Mesure du temps réellement gagné",
      "Formation de votre équipe à l'usage",
    ],
  },
];

/** Prestations récurrentes et petits forfaits. */
export const recurrent = [
  { label: "Audit informatique express", price: "190 €", note: "2 h sur place + compte-rendu écrit et chiffré" },
  { label: "Fiche Google Business optimisée", price: "250 €", note: "Création, photos, prestations, premiers avis" },
  { label: "Intervention technique", price: "70 €/h", note: "Dépannage, installation, configuration" },
  { label: "Journée de développement", price: "450 €", note: "Pour les projets suivis au temps passé" },
  { label: "Hébergement & maintenance du site", price: "29 €/mois", note: "Mises à jour, sauvegardes, petites modifications" },
  { label: "« DSI de poche »", price: "350 €/mois", note: "Une demi-journée par mois, sur place ou à distance" },
];

export const methode = [
  {
    title: "On regarde avant de proposer",
    text: "Un premier échange gratuit, puis si besoin un audit de 2 h chez vous. Je pars de ce qui vous fait perdre du temps, pas d'un catalogue.",
  },
  {
    title: "Un prix ferme, pas un compteur",
    text: "Vous recevez un devis au forfait avec un périmètre écrit noir sur blanc. Si le besoin change en cours de route, on en reparle avant, jamais sur la facture.",
  },
  {
    title: "Une première version rapidement",
    text: "Plutôt qu'un grand projet livré dans six mois, quelque chose d'utilisable vite, que l'on ajuste avec vos retours réels.",
  },
  {
    title: "Vous restez propriétaire",
    text: "Le code, les données, les accès, les noms de domaine : tout est à vous. Si un jour vous changez de prestataire, rien ne vous retient.",
  },
];

export const faqTpe = [
  {
    q: "Je n'y connais rien en informatique, c'est gênant ?",
    a: "Non, c'est même le cas le plus fréquent. Mon travail consiste à traduire : vous me décrivez votre métier et ce qui vous agace, je m'occupe de la partie technique et je vous explique chaque décision en français courant. Vous n'aurez jamais à choisir entre deux termes que vous ne comprenez pas.",
  },
  {
    q: "Combien de temps ça prend ?",
    a: "Un site vitrine : 3 à 4 semaines. Un petit outil ou un questionnaire : 1 à 2 semaines. Une automatisation simple : quelques jours. Un outil métier complet : 6 à 10 semaines. Je vous donne une date dans le devis et je vous préviens si quelque chose bouge.",
  },
  {
    q: "Pourquoi pas Wix, Shopify ou un outil tout fait ?",
    a: "Si un outil existant répond à votre besoin, je vous le dirai et je vous aiderai à le mettre en place — ça vous coûtera moins cher et c'est très bien ainsi. Le sur-mesure ne se justifie que quand votre façon de travailler ne rentre dans aucune case, ou quand les abonnements cumulés finissent par coûter plus que l'outil lui-même.",
  },
  {
    q: "L'IA, concrètement, ça sert à quoi dans mon cas ?",
    a: "À supprimer des tâches répétitives : répondre aux questions courantes de vos clients, trier les demandes qui arrivent, pré-remplir un devis, extraire les informations d'une facture. Si je n'identifie pas un gain de temps mesurable chez vous, je vous déconseillerai d'en mettre. Une IA qui ne sert à rien coûte cher et déçoit.",
  },
  {
    q: "Et après la livraison ?",
    a: "Les corrections de ce qui ne marche pas comme prévu sont incluses pendant 3 mois. Ensuite, soit vous êtes autonome, soit vous prenez la maintenance à 29 €/mois, soit vous m'appelez ponctuellement. Aucun engagement de durée dans tous les cas.",
  },
  {
    q: "Vous travaillez avec des associations ?",
    a: "Oui, et avec des tarifs adaptés : les associations et les très petites structures ont souvent des besoins simples (site, inscriptions, gestion des adhérents) pour lesquels je propose des forfaits réduits. Parlons-en.",
  },
];
