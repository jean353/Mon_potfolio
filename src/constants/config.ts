type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Jean NENENOR - Potfolio",
    fullName: "Jean NENENOR",
    email: "nenenorj@gmail.com",
  },
  hero: {
    name: "Jean NENENOR",
    p: ["Développement web et organisations d'évènements tech"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Développeur web passionné, je crée des applications modernes et performantes en combinant NestJS, Django, React et Next.js.
    J’aime concevoir des architectures propres, des APIs solides et des interfaces fluides.
    À l’aise avec Docker, PostgreSQL, Linux et le debugging réseau, je sais résoudre des problèmes techniques complexes.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Mes projets suivants mettent en avant mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers les dépôts de code et des démonstrations en ligne. Ils reflètent ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement des projets.`,
    },
  },
};
