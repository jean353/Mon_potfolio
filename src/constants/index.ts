import type { TNavLink, TService, TTechnology, TExperience, TProject } from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,

  // Nouveaux noms des logos d'entreprise/organisation importés depuis ../assets/index.ts
  bdiLogo, // Importé de ./company/BDI.jpeg (via assets)
  impactuneLogo, // Importé de ./company/Impactune.png (via assets)
  orgaafricaLogo, // Importé de ./company/orgaafrica_logo.jpeg (via assets)

  // Logos de projets (Vous devez vous assurer que ces noms sont exportés par src/assets/index.ts)
  // Note: Nous supposons que holly, Notpad, YWCA sont dans src/assets
  // Pour l'instant, je les laisse en tant que variables de projet non-standard
  holly,
  Notpad,
  YWCA,
} from '../assets';

// NOTE: J'ai retiré les variables suivantes qui étaient en double ou n'existaient pas dans assets:
// - Impactune (duplicata de impactuneLogo)
// - BDI (duplicata de bdiLogo)
// - orgaafrica_logo (duplicata de orgaafricaLogo)

export const navLinks: TNavLink[] = [
  // ... (navLinks inchangés)
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services: TService[] = [
  // ... (services inchangés)
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Web 3',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

export const technologies: TTechnology[] = [
  // ... (technologies inchangées)
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

export const experiences: TExperience[] = [
  {
    title: 'Nest.js Developer',
    companyName: 'Orga Africa',
    icon: orgaafricaLogo, // CORRIGÉ : utilisation du nouveau nom
    iconBg: '#383E56',
    date: 'Novembre 2025',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    companyName: 'Impactune',
    icon: impactuneLogo, // CORRIGÉ : utilisation du nouveau nom
    iconBg: '#E6DEDD',
    date: 'Novembre 2025',
    points: [
      'Impactune est une application mobile développée en React Native, conçue pour diffuser des contenus audio et vidéo en direct ou en replay. Elle s’adresse aux créateurs, organisations, étudiants et publics engagés souhaitant partager ou consommer des programmes à forte valeur ajoutée. La plateforme répond au besoin de visibilité, communication et expression numérique en offrant un espace moderne pour publier émissions, podcasts et conférences. Impactune se positionne comme un outil interactif qui amplifie les voix, connecte les talents et crée un impact social réel.',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Impactune',
    icon: impactuneLogo, // CORRIGÉ : utilisation du nouveau nom
    iconBg: '#383E56',
    date: 'Novembre 2025',
    points: [
      'Impactune dispose aussi d’une application web moderne développée avec React, offrant une interface rapide, fluide et accessible depuis n’importe quel navigateur. Elle permet de diffuser et consulter des émissions, podcasts et replays avec la même qualité d’expérience que sur mobile. Cette version web répond au besoin d’accessibilité et de visibilité élargie, permettant à un public plus large d’interagir avec les contenus. Impactune Web devient ainsi une porte d’entrée essentielle pour connecter, informer et amplifier l’impact des créateurs et organisations.',
    ],
  },
  {
    title: 'Full stack Developer',
    companyName: 'Tribunal de grande instance',
    icon: impactuneLogo, // MAINTENU : J'utilise le logo Impactune par défaut ici
    iconBg: '#E6DEDD',
    date: 'Mai 2025 - Present',
    points: [
      "Développement d'un logiciel d'archivage avec laravel en front et node en back end",
      "Création d'un logiciel de gestion de prison (en cours).",
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Bloc des Innovateurs',
    icon: bdiLogo,
    iconBg: '#E6DEDD',
    date: 'mars 2025 - Present',
    points: [
      "Développement du site de l'association avec react",
      "Développement d'un site de gestion de brevet avec React (en cours).", // J'ai ajouté la fin de la phrase
    ],
  }, // <--- Fermeture de l'objet expérience
];

export const projects: TProject[] = [
  {
    name: "Bloc note décentralisé",
    description:
      "Un site qui te permet de prendre des notes de manière décentralisé ",
    tags: [
      {
        name: "Scaffold-Stark",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "cairo",
        color: "pink-text-gradient",
      },
    ],
    image: Notpad,
    sourceCodeLink: "https://github.com/jean353/Bloc-note-d-centralis-",
  },
  {
    name: "Orga_africa",
    description:
      "Backend d'une application de gestion de restaurant et de commande",
    tags: [
      {
        name: "Nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "Type ORM",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: orgaafricaLogo,
    sourceCodeLink: "https://github.com/HubbOrga/orga_backend_v1",
  },
  {
    name: "ywca Togo",
    description:
      "Refonte du site de l'association.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "postgre",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: YWCA,
    sourceCodeLink: "https://github.com/jean353/refonte_ywca",
  },
  {
    name: "Christmas hackatton",
    description:
      "Hackatton initié par le tech pastor pour souhaiter un joyeux noel à la communauté tech",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "postgre",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: holly,
    sourceCodeLink: "https://github.com/jean353/Merry_Christmas",
  },
];


