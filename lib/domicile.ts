/**
 * Offre "à domicile" (particuliers).
 * Tous les prix et textes visibles de la page /domicile sont ici :
 * modifier un tarif ne demande pas de toucher aux composants.
 */

export type Forfait = {
  id: string;
  title: string;
  /** Ce que le client comprend immédiatement. */
  summary: string;
  price: string;
  /** Prix barré, pour les packs. */
  strikePrice?: string;
  duration: string;
  includes: string[];
  /** Mis en avant visuellement (un seul à la fois). */
  featured?: boolean;
};

export const forfaits: Forfait[] = [
  {
    id: "transfert",
    title: "Transfert vers un nouvel ordinateur",
    summary: "Vous changez de machine et vous voulez tout retrouver comme avant.",
    price: "100 €",
    duration: "environ 2 h",
    includes: [
      "Documents, photos, musique et vidéos",
      "Mails, contacts et favoris du navigateur",
      "Réinstallation de vos logiciels habituels",
      "Vérification que tout fonctionne avant mon départ",
    ],
  },
  {
    id: "pack",
    title: "Pack « ordinateur comme neuf »",
    summary: "Le transfert et le nettoyage complet, sur une seule intervention.",
    price: "170 €",
    strikePrice: "195 €",
    duration: "environ 3 h",
    includes: [
      "Tout le transfert de données",
      "Tout le nettoyage et l'optimisation",
      "Mise en place d'une sauvegarde automatique",
      "30 min de prise en main pour vous montrer l'essentiel",
    ],
    featured: true,
  },
  {
    id: "nettoyage",
    title: "Nettoyage & optimisation",
    summary: "Votre ordinateur met trois minutes à démarrer et rame en permanence.",
    price: "95 €",
    duration: "environ 1 h 30",
    includes: [
      "Suppression des logiciels inutiles et de la publicité",
      "Nettoyage du démarrage et de l'espace disque",
      "Mises à jour et vérification de l'antivirus",
      "Dépoussiérage du ventilateur si nécessaire",
    ],
  },
  {
    id: "installation",
    title: "Installation & configuration",
    summary: "Un appareil tout juste sorti du carton, à mettre en service.",
    price: "70 €",
    duration: "environ 1 h",
    includes: [
      "Box internet, Wi-Fi, répéteur",
      "Imprimante, scanner, télévision connectée",
      "Smartphone ou tablette, et liaison avec l'ordinateur",
      "Comptes et mots de passe mis au propre",
    ],
  },
  {
    id: "windows",
    title: "Réinstallation complète",
    summary: "La machine est trop encrassée ou bloquée : on repart d'une base saine.",
    price: "150 €",
    duration: "environ 3 h",
    includes: [
      "Sauvegarde de vos données avant toute chose",
      "Installation propre de Windows à jour",
      "Restitution de vos fichiers et logiciels",
      "Antivirus et sauvegarde configurés",
    ],
  },
  {
    id: "sauvegarde",
    title: "Sauvegarde automatique",
    summary: "Pour ne plus jamais risquer de perdre vos photos et vos documents.",
    price: "85 €",
    duration: "environ 1 h",
    includes: [
      "Choix de la solution adaptée (disque ou cloud)",
      "Configuration automatique, sans rien à faire ensuite",
      "Test de restauration devant vous",
      "Matériel en supplément si besoin",
    ],
  },
  {
    id: "formation",
    title: "Cours particulier",
    summary: "Apprendre à votre rythme, sans jargon et sans se sentir bête.",
    price: "75 €",
    duration: "1 h 30",
    includes: [
      "Mails, visio, démarches en ligne, impôts",
      "Photos : trier, ranger, partager",
      "Reconnaître les arnaques et les faux mails",
      "Fiche récapitulative laissée sur place",
    ],
  },
];

/** Prestations hors forfait, affichées en liste simple. */
export const horsForfait = [
  { label: "Intervention à l'heure, hors forfait", price: "55 €/h", note: "1 h minimum, puis par demi-heure" },
  { label: "Dépannage à distance", price: "45 €/h", note: "25 € minimum, avec votre accord et sous vos yeux" },
  { label: "Déplacement et diagnostic", price: "Offert", note: "25 € uniquement si vous ne donnez pas suite" },
];

export const abonnement = {
  title: "Abonnement Tranquillité",
  price: "15 €",
  period: "/ mois",
  pitch: "Votre ordinateur entretenu toute l'année, sans y penser.",
  includes: [
    "Vérification complète à distance tous les 2 mois",
    "Mises à jour et contrôle de l'antivirus",
    "Un dépannage à distance inclus par trimestre",
    "Priorité d'intervention et 10 % sur les forfaits",
  ],
  note: "Sans engagement, résiliable à tout moment.",
};

/**
 * Photo du fondateur affichée sur /domicile.
 * Source carrée 800×800, recadrée en 4/5 par le cadre (object-cover).
 * Mettre `null` pour revenir au visuel de substitution (initiales).
 */
export const photo: string | null = "/hugo.jpg";

export const garanties = [
  {
    title: "Prix fixe, annoncé avant",
    text: "Vous connaissez le montant exact au téléphone. Pas de compteur qui tourne, pas de surprise sur la facture.",
  },
  {
    title: "Déplacement offert",
    text: "Je me déplace chez vous sans frais. Si je ne peux rien faire pour vous, vous ne payez rien.",
  },
  {
    title: "Vos données restent chez vous",
    text: "Rien n'est copié ailleurs ni emporté. Je travaille devant vous, et vous gardez la main sur vos mots de passe.",
  },
  {
    title: "Facture à chaque intervention",
    text: "Entrepreneur déclaré, SIREN 947 836 102. Paiement en espèces, par virement ou par chèque, facture remise sur place.",
  },
];

export const etapes = [
  {
    title: "Vous demandez un rappel",
    text: "Vous laissez votre prénom, votre numéro et deux mots sur le problème. Je vous rappelle dans les 2 heures, en journée.",
  },
  {
    title: "On fait le point au téléphone",
    text: "Quelques questions suffisent pour identifier le besoin. Je vous annonce le forfait correspondant et la durée prévue.",
  },
  {
    title: "J'interviens chez vous",
    text: "On convient d'un créneau, y compris en soirée ou le samedi. Je repars quand tout fonctionne et que vous avez compris ce qui a été fait.",
  },
];

export const zone = {
  base: "Ivry-sur-Seine",
  villes: [
    "Ivry-sur-Seine",
    "Vitry-sur-Seine",
    "Charenton-le-Pont",
    "Alfortville",
    "Maisons-Alfort",
    "Choisy-le-Roi",
    "Saint-Maurice",
    "Paris 12e et 13e",
  ],
  note: "Au-delà de 15 km, le déplacement reste possible avec une participation de 15 €.",
};

export const faq = [
  {
    q: "Combien ça coûte, au total ?",
    a: "Le montant du forfait, et rien d'autre. Le déplacement et le diagnostic sont offerts, et je vous annonce le prix exact au téléphone avant de venir. Si l'intervention sort du forfait, je vous le dis avant de commencer et vous décidez.",
  },
  {
    q: "Vais-je perdre mes photos et mes documents ?",
    a: "Non. Sur toute intervention qui touche au contenu de la machine, je commence par une copie complète de vos données sur un disque externe. Rien n'est effacé avant que vous ayez vérifié que tout est bien là.",
  },
  {
    q: "Dois-je vous donner mes mots de passe ?",
    a: "Le moins possible. Quand un mot de passe est indispensable, c'est vous qui le saisissez. Je travaille devant vous, et je vous laisse le changer après mon passage si vous préférez.",
  },
  {
    q: "Vous intervenez quand ?",
    a: "En semaine, en soirée et le samedi. Pour une urgence, dites-le au téléphone : je m'organise pour passer dans la journée quand c'est possible.",
  },
  {
    q: "Et si le problème revient ?",
    a: "Vous me rappelez, et je reviens sur le même problème sans vous le refacturer dans les 30 jours. Si la panne vient du matériel et non du réglage, je vous le dis franchement plutôt que de vous faire payer pour rien.",
  },
  {
    q: "Mac ou Windows ?",
    a: "Les deux, ainsi que les smartphones et tablettes Android et iPhone. Je ne fais pas de réparation matérielle lourde (écran cassé, carte mère) : dans ce cas je vous oriente vers un réparateur plutôt que de vous faire perdre du temps.",
  },
];

/**
 * Avis clients : à remplir dès les premières interventions.
 * La section ne s'affiche que s'il y en a au moins deux —
 * mieux vaut aucun avis qu'un bloc presque vide.
 */
export const avis: { name: string; city: string; text: string }[] = [];

/**
 * Catalogue complet des prestations, par thème.
 * Les forfaits ci-dessus sont les offres phares ; cette liste montre
 * l'étendue réelle du service. Chaque ligne est volontairement formulée
 * du point de vue du problème, pas de la solution technique.
 */
export type Categorie = {
  id: string;
  title: string;
  intro: string;
  items: string[];
  /** Repère de prix affiché en bas de carte. */
  from: string;
};

export const prestations: Categorie[] = [
  {
    id: "ordinateur",
    title: "Ordinateur lent ou capricieux",
    intro: "Tout ce qui empêche votre machine de fonctionner normalement.",
    items: [
      "Démarrage interminable, ralentissements, plantages",
      "Virus, publicités intempestives, navigateur détourné",
      "Écran bleu, machine qui ne démarre plus",
      "Windows ou macOS à remettre d'aplomb",
      "Disque plein : tri, rangement et libération d'espace",
      "Ajout d'un SSD ou de mémoire pour rajeunir un portable",
    ],
    from: "à partir de 55 €",
  },
  {
    id: "installation",
    title: "Installation & configuration",
    intro: "Un appareil neuf à mettre en service, et tout ce qui va avec.",
    items: [
      "Mise en route d'un ordinateur, d'une tablette ou d'un téléphone",
      "Imprimante, scanner, photocopieuse, y compris en Wi-Fi",
      "Télévision connectée, enceintes, objets connectés",
      "Logiciels : bureautique, retouche photo, visio, comptabilité",
      "Comptes mail, iCloud, Google, mots de passe mis au propre",
      "Transfert d'un ancien téléphone vers un neuf, Android comme iPhone",
    ],
    from: "à partir de 70 €",
  },
  {
    id: "internet",
    title: "Internet & réseau",
    intro: "Quand la connexion ne va pas là où vous en avez besoin.",
    items: [
      "Wi-Fi qui ne passe pas dans toutes les pièces",
      "Installation d'un répéteur, d'un CPL ou d'un maillage Wi-Fi",
      "Changement de box ou d'opérateur, reconfiguration complète",
      "Réseau filaire, partage d'imprimante et de fichiers",
      "Connexion lente : diagnostic et preuves à envoyer à l'opérateur",
      "Caméras, interphone, sonnette connectée",
    ],
    from: "à partir de 70 €",
  },
  {
    id: "donnees",
    title: "Données & sécurité",
    intro: "Vos photos, vos papiers et vos comptes, à l'abri.",
    items: [
      "Sauvegarde automatique, sur disque ou dans le cloud",
      "Récupération de fichiers effacés ou de disque en panne",
      "Transfert complet d'un ordinateur vers un autre",
      "Antivirus : choix, installation, réglage sans vous ralentir",
      "Après une arnaque ou un faux mail : nettoyage et mise en sécurité",
      "Mots de passe : les ranger une bonne fois et ne plus les perdre",
      "Contrôle parental et réglages de confidentialité",
    ],
    from: "à partir de 85 €",
  },
  {
    id: "accompagnement",
    title: "Apprendre & se débrouiller seul",
    intro: "L'objectif n'est pas que vous me rappeliez, c'est que vous y arriviez.",
    items: [
      "Mails, pièces jointes, visio avec la famille",
      "Démarches en ligne : impôts, Ameli, CAF, FranceConnect, retraite",
      "Photos : récupérer celles du téléphone, trier, imprimer, partager",
      "Achats en ligne et paiements sans se faire piéger",
      "Reconnaître un faux mail, un faux SMS, un faux appel",
      "Fiche mémo personnalisée laissée à la fin de chaque séance",
    ],
    from: "75 € la séance",
  },
  {
    id: "pro",
    title: "Indépendants, commerces & associations",
    intro: "Le même sérieux pour les petites structures, sans contrat ni jargon.",
    items: [
      "Poste de travail, messagerie professionnelle, nom de domaine",
      "Partage de fichiers et sauvegarde entre plusieurs postes",
      "Caisse, imprimante de tickets, terminal de paiement",
      "Fiche Google qui apparaît dans les recherches locales",
      "Site vitrine simple, et sa mise à jour",
      "Petit outil sur mesure : devis, planning, suivi des clients",
    ],
    from: "sur devis",
  },
];
