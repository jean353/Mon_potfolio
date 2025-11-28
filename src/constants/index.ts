import type { TNavLink, TService, TTechnology, TExperience, TProject, TSocialLink } from '../types';

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

  // Gallery Photos
  afiDrse,
  copieImg,
  drh,
  dsi,
  devAppliYas,
  img20250707,
  img20250906,
  img20251102,
  img2482,
  img9583,
  img9621,
  mamanSowe,
  photoFamille,
  tcd2025114,
  tcd202556,
  whatsappImage,
} from '../assets';



export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'À propos',
  },
  {
    id: 'work',
    title: 'Expérience',
  },
  {
    id: 'works',
    title: 'Projets',
  },
  {
    id: 'gallery',
    title: 'Galerie',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services: TService[] = [
  {
    title: 'Développeur Web',
    icon: web,
  },
  {
    title: 'Web 3',
    icon: mobile,
  },
  {
    title: 'Développeur Backend',
    icon: backend,
  },
  {
    title: 'Créateur de Contenu',
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
    title: 'Développeur Nest.js',
    companyName: 'Orga Africa',
    icon: orgaafricaLogo,
    iconBg: '#383E56',
    date: 'Novembre 2025',
    points: [
      '- Conception et développement d’API backend robustes avec NestJS, en suivant les bonnes pratiques du framework.',
    'Implémentation de la base de données PostgreSQL avec TypeORM pour la gestion des entités, relations et migrations.',
    'Utilisation de Docker & Docker Compose pour le déploiement local et la conteneurisation des services.',
    'Structuration du projet selon une architecture modulaire monolithique, facilitant l’évolutivité et la maintenabilité du code.',
    'Collaboration avec l’équipe produit pour intégrer des fonctionnalités adaptées aux besoins métier.',
    ],
  },
  {
    title: 'Développeur React Native',
    companyName: 'Impactune',
    icon: impactuneLogo,
    iconBg: '#E6DEDD',
    date: 'Novembre 2025',
    points: [
      'Impactune est une application mobile développée en React Native, conçue pour diffuser des contenus audio et vidéo en direct ou en replay. Elle s’adresse aux créateurs, organisations, étudiants et publics engagés souhaitant partager ou consommer des programmes à forte valeur ajoutée. La plateforme répond au besoin de visibilité, communication et expression numérique en offrant un espace moderne pour publier émissions, podcasts et conférences. Impactune se positionne comme un outil interactif qui amplifie les voix, connecte les talents et crée un impact social réel.',
    ],
  },
  {
    title: 'Développeur Web',
    companyName: 'Impactune',
    icon: impactuneLogo,
    iconBg: '#383E56',
    date: 'Novembre 2025',
    points: [
      'Impactune dispose aussi d’une application web moderne développée avec React, offrant une interface rapide, fluide et accessible depuis n’importe quel navigateur. Elle permet de diffuser et consulter des émissions, podcasts et replays avec la même qualité d’expérience que sur mobile. Cette version web répond au besoin d’accessibilité et de visibilité élargie, permettant à un public plus large d’interagir avec les contenus. Impactune Web devient ainsi une porte d’entrée essentielle pour connecter, informer et amplifier l’impact des créateurs et organisations.',
    ],
  },
  {
    title: 'Développeur Full Stack',
    companyName: 'Tribunal de grande instance',
    icon: impactuneLogo,
    iconBg: '#E6DEDD',
    date: 'Mai 2025 - Présent',
    points: [
      "Développement d'un logiciel d'archivage avec Laravel en front et Node en back end",
      "Création d'un logiciel de gestion de prison (en cours).",
    ],
  },
  {
    title: 'Développeur Web',
    companyName: 'Bloc des Innovateurs',
    icon: bdiLogo,
    iconBg: '#E6DEDD',
    date: 'Mars 2025 - Présent',
    points: [
      "Développement du site de l'association avec React",
      "Développement d'un site de gestion de brevet avec React (en cours).",
    ],
  },
];

export const projects: TProject[] = [
  {
    name: "Bloc note décentralisé",
    description:
      "Un site qui te permet de prendre des notes de manière décentralisée",
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
    name: "Christmas hackathon",
    description:
      "Hackathon initié par le tech pastor pour souhaiter un joyeux noël à la communauté tech",
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

export const gallery = [
  {
    id: 1,
    src: afiDrse,
    alt: "AFI DRSE",
  },
  {
    id: 2,
    src: copieImg,
    alt: "Copie de IMG",
  },
  {
    id: 3,
    src: drh,
    alt: "DRH",
  },
  {
    id: 4,
    src: dsi,
    alt: "DSI",
  },
  {
    id: 5,
    src: devAppliYas,
    alt: "Dev Appli Yas",
  },
  {
    id: 6,
    src: img20250707,
    alt: "IMG 20250707",
  },
  {
    id: 7,
    src: img20250906,
    alt: "IMG 20250906",
  },
  {
    id: 8,
    src: img20251102,
    alt: "IMG 20251102",
  },
  {
    id: 9,
    src: img2482,
    alt: "IMG 2482",
  },
  {
    id: 10,
    src: img9583,
    alt: "IMG 9583",
  },
  {
    id: 11,
    src: img9621,
    alt: "IMG 9621",
  },
  {
    id: 12,
    src: mamanSowe,
    alt: "Maman Sowe",
  },
  {
    id: 13,
    src: photoFamille,
    alt: "Photo de famille",
  },
  {
    id: 14,
    src: tcd2025114,
    alt: "TCD 2025 114",
  },
  {
    id: 15,
    src: tcd202556,
    alt: "TCD 2025 56",
  },
  {
    id: 16,
    src: whatsappImage,
    alt: "WhatsApp Image",
  },
];



export const socialLinks: TSocialLink[] = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jean-nenenor-86b121283/",
    color: "#0077B5",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/JNenenor/",
    color: "#000000",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/jean_morningstar_/",
    color: "#E1306C",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/22891120671",
    color: "#25D366",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.gg/q7W8eACs",
    color: "#5865F2",
  },
];
