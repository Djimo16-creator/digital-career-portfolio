export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: {
    technical: string[];
    soft: string[];
  };
  languages: Language[];
}

export const cvData: CVData = {
  personalInfo: {
    name: "Mebarka Djamel Eddine",
    title: "Ingénieur d'état en Génie Civil",
    email: "moubarka.djamel@gmail.com",
    phone: "+213 6 67 47 03 33",
    address: "Biskra, Algérie",
    linkedin: "linkedin.com/in/moubarka-djamel-eddine"
  },
  summary: "Ingénieur d'état en génie civil dynamique et rigoureux, spécialisé dans la gestion de projets de construction et le suivi de chantiers. Doté d'une solide expérience dans la planification, la coordination des équipes et le contrôle de la qualité, je m'engage à livrer des ouvrages conformes aux normes techniques et de sécurité les plus exigeantes. Passionné par l'innovation dans le domaine de la construction, je recherche constamment à optimiser les processus et à garantir la satisfaction client.",
  experience: [
    {
      company: "Entreprise de Bâtiment et Travaux Publics (EBTP)",
      position: "Ingénieur de Suivi de Chantier",
      period: "Janvier 2022 - Présent",
      location: "Biskra, Algérie",
      responsibilities: [
        "Assurer le suivi quotidien du chantier (gros œuvre et second œuvre).",
        "Coordonner les différentes équipes de travail et les sous-traitants.",
        "Contrôler la qualité des matériaux et la conformité des travaux aux plans d'exécution.",
        "Gérer les approvisionnements en matériaux et le planning des ressources.",
        "Veiller au respect des règles d'hygiène et de sécurité sur le site.",
        "Établir les rapports journaliers et hebdomadaires d'avancement des travaux."
      ]
    },
    {
      company: "Bureau d'Études Techniques (BET)",
      position: "Ingénieur Calculateur Stagiaire",
      period: "Juin 2021 - Décembre 2021",
      location: "Biskra, Algérie",
      responsibilities: [
        "Réaliser des notes de calcul de structures en béton armé.",
        "Concevoir des plans de coffrage et d'armature sous AutoCAD.",
        "Participer à l'élaboration des dossiers techniques et des devis estimatifs."
      ]
    }
  ],
  education: [
    {
      school: "Université Mohamed Khider Biskra",
      degree: "Diplôme d'Ingénieur d'État en Génie Civil",
      period: "2016 - 2021",
      description: "Spécialité : Structures"
    }
  ],
  skills: {
    technical: [
      "AutoCAD",
      "Robot Structural Analysis",
      "SAP2000",
      "ETABS",
      "Microsoft Project",
      "Microsoft Office"
    ],
    soft: [
      "Gestion d'équipe",
      "Résolution de problèmes",
      "Adaptabilité",
      "Communication",
      "Sens de l'organisation"
    ]
  },
  languages: [
    { name: "Arabe", level: "Maternel" },
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Intermédiaire" }
  ]
};
