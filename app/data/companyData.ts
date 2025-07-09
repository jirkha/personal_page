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
  appio: {
    name: "Appio",
    profession: "Junior Full-Stack Developer",
    logo: "appio.svg",
    companyLink: "https://www.appio.dev/",
    bgColor:
      "radial-gradient(circle, rgb(10, 85, 215, 0.4), rgb(10, 85, 215, 0.7)",
    textColor: "rgb(10, 85, 215)",
    imgClass: "mx-auto lg:mx-0 -mt-4 lg:ml-auto h-24 lg:w-2/5",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (JavaScript, Python) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
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
  qest: {
    name: "QEST",
    profession: "Junior Full-Stack Developer",
    logo: "qest.png",
    companyLink: "https://www.qest.cz/career/464405",
    bgColor: "radial-gradient(circle, rgb(0,0,0, 0.3), rgb(131, 225, 255, 0.9)",
    textColor: "rgb(50, 160, 190)",
    imgClass:
      "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (React, Next.js, TypeScript) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost ve ",
    techStack: {
      frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "Material UI",
        "Redux",
        "Axios",
      ],
      backend: ["Python, PostgreSQL, REST API, Django"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, PostgreSQL, REST API, Python, Django, Material UI, Redux, Axios",
      ],
      suma: [
        "Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML, Google API",
      ],
      div: ["Python, PostgreSQL, Django"],
    },
  },
  pfp: {
    name: "PFP Innovations",
    profession: "Junior Full-Stack Developer",
    logo: "pfp.jpeg",
    companyLink: "https://www.pfpinnovations.com/career/positions/fullstack",
    bgColor:
      "radial-gradient(circle, rgb(226, 184, 20, 0.3), rgb(226, 184, 20, 0.7)",
    textColor: "rgb(226, 184, 20)",
    imgClass:
      "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (React, JavaScript, Tailwind) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Next.js",
        "HTML",
        "Material UI",
        "Redux",
        "Axios",
      ],
      backend: ["Python, Django, PostgreSQL, REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, Python, Django, Material UI, PostgreSQL, REST API, Redux, Axios",
      ],
      suma: [
        "React, Tailwind CSS, TypeScript, JavaScript, Next.js, HTML, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  acantha: {
    name: "Acantha",
    profession: "Junior Full-Stack Developer",
    logo: "acantha.svg",
    companyLink:
      "https://www.acantha.cz/volne-pozice/?r=detail&id=2000612559&impressionId=342ee589-600a-47fb-9287-145809feb358",
    bgColor:
      "radial-gradient(circle, rgb(214, 36, 19, 0.3), rgb(214, 36, 19, 0.8)",
    textColor: "rgb(214, 36, 19)",
    imgClass:
      "mx-auto lg:mx-0 lg:-mt-10 lg:ml-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (React, Redux, TypeScript) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "React",
        "Redux",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Next.js",
        "HTML",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, Django, PostgreSQL, REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, Redux, JavaScript, Python, Django, Material UI, PostgreSQL, REST API, Axios",
      ],
      suma: [
        "React, TypeScript, JavaScript, Tailwind CSS, Next.js, HTML, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  pixelfield: {
    name: "Pixelfield",
    profession: "Junior Full-Stack Developer",
    logo: "pixelfield.png",
    companyLink: "https://pixelfield.cz/kariera/",
    bgColor:
      "radial-gradient(circle, rgb(191, 127, 51, 0.3), rgb(191, 127, 51, 0.7)",
    textColor: "rgb(191, 127, 51)",
    imgClass:
      "mx-auto lg:mx-0 -my-16 -mb-14 lg:ml-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (React, JavaScript) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "Tailwind CSS",
        "Next.js",
        "Redux",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, Django, PostgreSQL, REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, Python, Django, Material UI, Redux, PostgreSQL, REST API, Axios",
      ],
      suma: [
        "React, TypeScript, JavaScript, HTML, Tailwind CSS, Next.js, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  ynput: {
    name: "ynput",
    profession: "Junior Full-Stack Developer",
    logo: "ynput.svg",
    companyLink: "https://ynput.io/company/",
    bgColor:
      "radial-gradient(circle, rgb(0, 215, 160, 0.3), rgb(0, 215, 160, 0.7)",
    textColor: "rgb(0, 215, 160)",
    imgClass:
      "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (TypeScript, Next.js, Python) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "TypeScript",
        "JavaScript",
        "Next.js",
        "React",
        "HTML",
        "Tailwind CSS",
        "Redux",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, Django, PostgreSQL, REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, Python, Django, PostgreSQL, REST API, Material UI, Redux, Axios",
      ],
      suma: [
        "TypeScript, JavaScript, Next.js, React, HTML, Tailwind CSS, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  memos: {
    name: "MEMOS Software",
    profession: "Junior Full-Stack Developer",
    logo: "memos.png",
    companyLink: "https://www.memos.cz/kariera/",
    bgColor:
      "radial-gradient(circle, rgb(255, 159, 66, 0.3), rgb(255, 159, 66, 0.7)",
    textColor: "rgb(255, 159, 66)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-2/3 md:w-1/3",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (JavaScript, React, HTML) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "HTML",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, Django, PostgreSQL, REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, Python, Django, PostgreSQL, REST API, Material UI, Redux, Axios",
      ],
      suma: [
        "JavaScript, TypeScript, HTML, Tailwind CSS, Next.js, React, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  provys: {
    name: "PROVYS Technologies",
    profession: "Junior Full-Stack Developer",
    logo: "provys.png",
    companyLink: "https://jobs.provys.com/projektovy-programator/",
    bgColor:
      "radial-gradient(circle, rgb(241, 142, 19, 0.3), rgb(241, 142, 19, 0.7)",
    textColor: "rgb(241, 142, 19)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-2/3 md:w-1/3",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (Python, PostgreSQL, JavaScript) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      backend: ["Python, PostgreSQL, Django, REST API"],
      frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "HTML",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Material UI",
        "Axios",
      ],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "Python, PostgreSQL, Django, React, JavaScript, REST API, Material UI, Redux, Axios",
      ],
      suma: [
        "JavaScript, TypeScript, HTML, Tailwind CSS, Next.js, React, Google API",
      ],
      div: ["Python, PostgreSQL, Django"],
    },
  },
  grandit: {
    name: "Grand IT",
    profession: "Junior Full-Stack Developer",
    logo: "grandit.png",
    companyLink: "https://www.grandit.cz/",
    bgColor:
      "radial-gradient(circle, rgb(243, 146, 0, 0.3), rgb(243, 146, 0, 0.7)",
    textColor: "rgb(243, 146, 0)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-2/3 md:w-1/6",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (Python, JavaScript, PostgreSQL) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "Tailwind CSS",
        "React",
        "Next.js",
        "Redux",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, PostgreSQL, Django, REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "Python, JavaScript, React, PostgreSQL, REST API, Django, Material UI, Redux, Axios",
      ],
      suma: [
        "JavaScript, TypeScript, HTML, Tailwind CSS, Next.js, React, Google API",
      ],
      div: ["Python, PostgreSQL, Django"],
    },
  },
  manGoweb: {
    name: "manGoweb",
    profession: "Junior Full-Stack Developer",
    logo: "manGoweb.png",
    companyLink: "https://www.mangoweb.cz/",
    bgColor: "radial-gradient(circle, rgb(1, 0, 255, 0.2), rgb(1, 0, 255, 0.4)",
    textColor: "rgb(1, 0, 255)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-2/3 sm:w-1/2 md:w-1/3",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty (React, TypeScript, PostgreSQL) a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "Tailwind CSS",
        "Next.js",
        "Redux",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, PostgreSQL, Django, REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "React, PostgreSQL, Python, JavaScript, REST API, Django, Material UI, Redux, Axios",
      ],
      suma: [
        "TypeScript, JavaScript, React, Next.js, HTML, Tailwind CSS, Google API",
      ],
      div: ["Python, PostgreSQL, Django"],
    },
  },
};
;