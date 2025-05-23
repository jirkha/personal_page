export type CompanyTechStack = {
  frontend: string[];
  backend: string[];
  tools: string[];
};

export type CompanyData = {
  name: string;
  profession: string;
  logo: string;
  companyLink: string;
  bgColor: string;
  textColor: string;
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
    profession: "Junior Full-Stack Developer | Sustainable Mobility",
    logo: "omio.svg",
    companyLink: "https://www.omio.com/corporate/jobs/#744000045136045",
    bgColor: "#132968",
    textColor: "#132968",
    imgClass: "mx-auto h-20 lg:w-2/5",
    about:
      "I am a railway transport specialist. Since 2021, along with my transportation expertise, I have been focusing on programming. I create my own projects (React, JavaScript) and keep learning more in the field. Now, I am looking for a job opportunity in ",
    techStack: {
      frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Material UI",
        "Tailwind CSS",
        "HTML",
        "Redux",
        "Axios",
      ],
      backend: ["Python", "REST API", "Django", "PostgreSQL"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, REST API, Python, Django, PostgreSQL, Material UI, Redux, Axios",
      ],
      suma: ["React, Next.js, TypeScript, HTML, Tailwind CSS"],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  fairtiq: {
    name: "FAIRTIQ",
    profession: "Junior Full-Stack Developer | Sustainable Mobility",
    logo: "fairtiq.svg",
    companyLink: "https://fairtiq.com/cs/",
    bgColor:
      "radial-gradient(circle, rgba(226, 26, 52, 0.1), rgba(226, 26, 52, 0.5))",
    textColor: "rgba(226, 26, 52)",
    imgClass: "mx-auto h-20 lg:w-2/5",
    about:
      "I am a transport specialist. Since 2021, along with my transportation expertise, I have been focusing on programming. I create my own projects (Python, JavaScript) and keep learning more in the field. Now, I am open to different forms of cooperation with ",
    techStack: {
      backend: ["Python", "REST API", "Django", "PostgreSQL"],
      frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Material UI",
        "Tailwind CSS",
        "HTML",
        "Redux",
        "Axios",
      ],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "Python, Django, PostgreSQL, React, JavaScript, REST API, Material UI, Redux, Axios",
      ],
      suma: ["React, Next.js, TypeScript, Google API, HTML, Tailwind CSS"],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  ttc: {
    name: "TTC MARCONI",
    profession: "Junior Full-Stack Developer | Sustainable Mobility",
    logo: "ttc.png",
    companyLink: "https://ttc-marconi.com/",
    bgColor:
      "radial-gradient(circle, rgb(8, 183, 230, 0.1), rgb(8, 183, 230, 0.5)",
    textColor: "rgb(8, 183, 230)",
    imgClass: "mx-auto h-full sm:mt-3 sm:w-3/5 lg:w-2/5",
    about:
      "I am a transport specialist. Since 2021, along with my transportation expertise, I have been focusing on programming. I create my own projects (JavaScript, React, Python) and keep learning more in the field. Now, I am open to different forms of cooperation with ",
    techStack: {
      frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Material UI",
        "Tailwind CSS",
        "HTML",
        "Redux",
        "Axios",
      ],
      backend: ["Python", "REST API", "Django", "PostgreSQL"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "JavaScript, React, REST API, Python, Django, PostgreSQL, Material UI, Redux, Axios",
      ],
      suma: [
        "JavaScript, TypeScript, React, Next.js, Google API, HTML, Tailwind CSS",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  mediaboard: {
    name: "Mediaboard",
    profession: "Junior Full-Stack Developer",
    logo: "mediaboard.svg",
    companyLink:
      "https://mediaboard.com/cs/volne-pozice/junior-python-developer/?_gl=1*1jbbjt3*_up*MQ..*_ga*MzcxOTM1ODg1LjE3NDYzNzkyMzk.*_ga_F1KVHNZSSD*czE3NDYzNzkyMzkkbzEkZzEkdDE3NDYzNzkyNTIkajAkbDAkaDE0OTE2NTM4ODE.",
    bgColor:
      "radial-gradient(circle, rgb(13, 97, 255, 0.1), rgb(13, 97, 255, 0.8)",
    textColor: "rgb(13, 97, 255)",
    imgClass: "mx-auto h-full sm:mt-3 sm:w-3/5 lg:w-2/5",
    about:
      "I have been a transport specialist. Since 2021, I have been learning programming. I create my own projects (Python, React) and further develop my skills in the field. Now, I am looking for a job opportunity in ",
    techStack: {
      backend: ["Python", "Django", "REST API", "PostgreSQL"],
      frontend: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "React",
        "Redux",
        "HTML",
        "Tailwind CSS",
        "Material UI",
        "Axios",
      ],

      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "Python, Django, PostgreSQL, REST API, JavaScript, React, Redux, HTML, Material UI, Axios",
      ],
      suma: [
        "Next.js, JavaScript, TypeScript, React, HTML, Google API, HTML, Tailwind CSS",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  oksystem: {
    name: "OKsystem",
    profession: "Junior Full-Stack Developer",
    logo: "ok.svg",
    companyLink: "https://www.oksystem.com/cs/kariera",
    bgColor:
      "radial-gradient(circle, rgb(1, 150, 69, 0.1), rgb(1, 150, 69, 0.5)",
    textColor: "rgb(1, 150, 69)",
    imgClass: "mx-auto lg:ml-auto h-24",
    about:
      "I have been a transport specialist. Since 2021, I have been learning programming. I create my own projects (JavaScript, Python) and further develop my skills in the field. Now, I am looking for a job opportunity in ",
    techStack: {
      frontend: [
        "JavaScript, TypeScript, React, Redux, HTML, Tailwind CSS, Next.js, Material UI, Axios",
      ],
      backend: ["Python", "REST API", "Django", "PostgreSQL"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "JavaScript, React, Python, Django, REST API, PostgreSQL, HTML, Redux, Material UI, Axios",
      ],
      suma: [
        "JavaScript, TypeScript, React, HTML, Next.js, Google API, HTML, Tailwind CSS",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  contember: {
    name: "Contember",
    profession: "Junior Full-Stack Developer",
    logo: "contember.svg",
    companyLink: "https://www.contember.com/",
    bgColor: "radial-gradient(circle, rgb(0, 24, 47, 0.5), rgb(0, 24, 47, 0.8)",
    textColor: "rgb(0, 24, 47)",
    imgClass: "mx-auto lg:mx-0 -mt-4 lg:ml-auto h-24 lg:w-2/5",
    about:
      "I have been a transport specialist. Since 2021, I have been learning programming. I create my own projects (JavaScript, Python) and further develop my skills in the field. Now, I am looking for a job opportunity in ",
    techStack: {
      frontend: [
        "React, JavaScript, TypeScript, Next.js, Redux, HTML, Tailwind CSS, Material UI, Axios",
      ],
      backend: ["Python", "REST API", "Django", "PostgreSQL"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, Python, Django, REST API, PostgreSQL, HTML, Redux, Material UI, Axios",
      ],
      suma: [
        "React, JavaScript, TypeScript, HTML, Next.js, Google API, HTML, Tailwind CSS",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  aim: {
    name: "Aim",
    profession: "Junior Full-Stack Developer",
    logo: "aim.svg",
    companyLink: "https://www.startupjobs.cz/nabidka/89491/fullstack-engineer",
    bgColor:
      "radial-gradient(circle, rgb(68, 0, 204, 0.3), rgb(68, 0, 204, 0.5)",
    textColor: "rgb(68, 0, 204)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-10 lg:ml-auto h-40 lg:w-2/5",
    about:
      "I have been a transport specialist. Since 2021, I have been learning programming. I create my own projects (React, Next.js, Python) and further develop my skills in the field. Now, I am looking for a job opportunity in ",
    techStack: {
      frontend: [
        "React, JavaScript, TypeScript, Next.js, Tailwind CSS, Material UI, HTML, Redux, Axios",
      ],
      backend: ["Python", "REST API", "Django", "PostgreSQL"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, Python, Django, REST API, PostgreSQL, Material UI, HTML, Redux, Axios",
      ],
      suma: ["React, TypeScript, Next.js, Tailwind CSS, HTML, Google API"],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  azd: {
    name: "AŽD",
    profession: "Railway Transport | Junior Full-Stack Developer",
    logo: "azd.png",
    companyLink: "https://www.azd.cz/cs/zamestnani",
    bgColor:
      "radial-gradient(circle, rgb(0, 72, 114, 0.5), rgb(255, 209, 0, 0.3)",
    textColor: "rgb(230, 188, 0)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-10 lg:ml-auto w-1/2 sm:w-1/3 lg:w-1/5",
    about:
      "I am a railway transport specialist. Since 2021, along with my transportation expertise, I have been focusing on programming. I create my own projects (Python, JavaScript) and keep learning more in the field. Now, I am looking for a job opportunity in ",
    techStack: {
      backend: ["Python", "REST API", "Django", "PostgreSQL"],
      frontend: [
        "React, JavaScript, TypeScript, Next.js, Tailwind CSS, Material UI, HTML, Redux, Axios",
      ],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "Python, Django, REST API, React, JavaScript, PostgreSQL, Material UI, HTML, Redux, Axios",
      ],
      suma: ["React, TypeScript, Next.js, Tailwind CSS, HTML, Google API"],
      div: ["Python, Django, PostgreSQL"],
    },
  },
};
