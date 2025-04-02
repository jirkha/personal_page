export type CompanyTechStack = {
  frontend: string[];
  backend: string[];
  tools: string[];
};

export type CompanyData = {
  name: string;
  logo: string;
  bgClass: string;
  imgClass: string;
  about: string;
  techStack: CompanyTechStack;
  projectTech: {
    jp: string[];
    suma: string[];
    div: string[];
  };
};

export const companyData: { [key: string]: CompanyData } = {
  omio: {
    name: "Omio",
    logo: "omio.svg",
    bgClass: "#132968",
    imgClass: "mx-auto h-20 lg:w-2/5",
    about:
      "Profesně jsem dosud dopravní specialista. Mou největší životní motivací je touha učit se novým věcem, proto jsem v roce 2021 začal s programováním a neustále se posouvám vpřed vzděláváním a tvorbou projektů (Python, JavaScript). Nyní hledám pracovní příležitost.",
    techStack: {
      frontend: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "React",
        "Next.js",
        "Material UI",
        "Tailwind CSS",
        "Redux",
        "Axios",
      ],
      backend: ["Python", "Django", "PostgreSQL", "REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: ["React", "Redux", "Node.js"],
      suma: ["Python", "Django", "PostgreSQL"],
      div: ["Git & GitHub", "Material UI"],
    },
  },
  google: {
    name: "Google",
    logo: "/images/google.png",
    bgClass: "googlebg",
    imgClass: "mx-auto w-2/3",
    about: "Software Engineer working on scalable web applications.",
    techStack: {
      frontend: ["Angular"],
      backend: ["Go"],
      tools: ["Kubernetes"],
    },
    projectTech: {
      jp: ["Angular", "Kubernetes"],
      suma: ["Go"],
      div: ["BigQuery", "TensorFlow"],
    },
  },
  default: {
    name: "Generic Company",
    logo: "/images/default.png",
    bgClass: "defaultbg",
    imgClass: "mx-auto w-2/3",
    about: "General developer role in a tech company.",
    techStack: {
      frontend: ["JavaScript", "HTML", "CSS"],
      backend: [],
      tools: [],
    },
    projectTech: {
      jp: ["JavaScript", "HTML"],
      suma: ["CSS"],
      div: [],
    },
  },
};
