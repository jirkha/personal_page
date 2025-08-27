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
  inizio: {
    name: "INIZIO Internet Media",
    profession: "Junior Full-Stack Developer",
    logo: "inizio.png",
    companyLink: "https://mozna.inizio.cz/success",
    bgColor:
      "radial-gradient(circle, rgb(0, 87, 138, 0.6), rgb(0, 87, 138, 0.3)",
    textColor: "rgb(0, 87, 138)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-1/3 sm:w-1/4 md:w-1/5",
    about:
      "Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně věnuji programování. Vytvářím vlastní projekty a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "Redux",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, Django, PostgreSQL, REST API"],
      tools: ["Git & GitHub"],
    },
    projectTech: {
      jp: [
        "JavaScript, React, REST API, PostgreSQL, Python, Django, Material UI, Redux, Axios",
      ],
      suma: [
        "TypeScript, JavaScript, Next.js, React, Tailwind CSS, HTML, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  smarteon: {
    name: "Smarteon",
    profession: "Junior Full-Stack Developer",
    logo: "smarteon.png",
    companyLink: "https://www.smarteon.cz/",
    bgColor:
      "radial-gradient(circle, rgb(217, 148, 16, 0.7), rgb(217, 148, 16, 0.2)",
    textColor: "rgb(217, 148, 16)",
    imgClass:
      "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-80",
    about:
      "Od roku 2021 se nadšeně věnuji programování. Vytvářím vlastní projekty (TypeScript, Python) a začínám profesní dráhu v tomto oboru. Nyní hledám pracovní příležitost ve ",
    techStack: {
      backend: ["Python, Django, PostgreSQL, REST API"],
      frontend: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "Redux",
        "Material UI",
        "Axios",
      ],
      tools: ["Git & GitHub, CI/CD"],
    },
    projectTech: {
      jp: [
        "Python, Django, REST API, PostgreSQL, JavaScript, React, Material UI, Redux, Axios",
      ],
      suma: [
        "TypeScript, JavaScript, Next.js, React, Tailwind CSS, HTML, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  foxmedia: {
    name: "Fox Media",
    profession: "Junior Full-Stack Developer",
    logo: "foxmedia.png",
    companyLink: "https://www.foxmedia.cz/",
    bgColor:
      "radial-gradient(circle, rgb(90, 88, 88, 0.8), rgb(90, 88, 88, 0.3)",
    textColor: "rgb(90, 88, 88)",
    imgClass:
      "mx-auto lg:mx-0 lg:-mt-12 lg:ml-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-80",
    about:
      "Od roku 2021 se se zapálením věnuji programování. Vytvářím vlastní projekty (React) a začal jsem profesní dráhu v tomto oboru. Nyní hledám pracovní příležitost ve ",
    techStack: {
      frontend: [
        "React",
        "HTML",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Redux",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, Django, PostgreSQL, REST API"],
      tools: ["Git & GitHub, CI/CD, Docker"],
    },
    projectTech: {
      jp: [
        "React, JavaScript, Python, Django, REST API, PostgreSQL, Material UI, Redux, Axios",
      ],
      suma: [
        "React, HTML, Tailwind CSS, TypeScript, JavaScript, Next.js, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  ackee: {
    name: "ackee",
    profession: "Projektový management | IT",
    logo: "ackee.png",
    companyLink: "https://www.ackee.cz/",
    bgColor: "radial-gradient(circle, rgb(0, 0, 255, 0.2), rgb(0, 0, 255, 0.6)",
    textColor: "rgb(0, 0, 255)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-1/2 md:w-1/3",
    about:
      "Od roku 2021 se se zapálením věnuji programování. Začal jsem profesní dráhu v oboru IT a mám praxi v projektovém řízení a vedení týmů. Rád bych oba obory propojil v ",
    techStack: {
      backend: ["Python, PostgreSQL, Django, REST API"],
      frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "Axios",
        "HTML",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Material UI",
      ],
      tools: ["Git & GitHub, Docker"],
    },
    projectTech: {
      jp: [
        "Python, PostgreSQL, Django, Axios, React, JavaScript, REST API, Material UI, Redux",
      ],
      suma: [
        "JavaScript, TypeScript, HTML, Tailwind CSS, Next.js, React, Google API",
      ],
      div: ["Python, PostgreSQL, Django"],
    },
  },
  mountain_lift: {
    name: "Mountain Lift",
    profession: "Projektový management | IT",
    logo: "mountain_lift.jpg",
    companyLink: "https://mountainlift.cz/",
    bgColor:
      "radial-gradient(circle, rgb(255, 116, 0, 0.7), rgb(255, 116, 0, 0.2)",
    textColor: "rgb(255, 116, 0)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-1/3 md:w-1/6",
    about:
      "Mám praxi v projektovém řízení a vedení týmů. Začal jsem profesní dráhu v oboru IT, programování je mým dlouholetým koníčkem. Nyní bych rád oba obory propojil v ",
    techStack: {
      backend: ["Python, PostgreSQL, Django, REST API"],
      frontend: [
        "JavaScript",
        "TypeScript",
        "React",
        "Axios",
        "HTML",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Material UI",
      ],
      tools: ["Git & GitHub, Docker, Slack, Jira"],
    },
    projectTech: {
      jp: [
        "Python, PostgreSQL, Django, Axios, React, JavaScript, REST API, Material UI, Redux",
      ],
      suma: [
        "JavaScript, TypeScript, HTML, Tailwind CSS, Next.js, React, Google API",
      ],
      div: ["Python, PostgreSQL, Django"],
    },
  },
  osforo: {
    name: "osforo",
    profession: "Junior Full-Stack Developer",
    logo: "osforo.png",
    companyLink: "https://osforo.com/",
    bgColor:
      "radial-gradient(circle, rgb(0, 117, 190, 0.7), rgb(0, 117, 190, 0.2)",
    textColor: "rgb(0, 117, 190)",
    imgClass: "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto w-1/3 md:w-1/6",
    about:
      "Od roku 2021 se nadšeně věnuji programování. Začal jsem profesní dráhu v oboru, také vytvářím vlastní projekty (Python, JavaScript). Nyní hledám pracovní příležitost v ",
    techStack: {
      backend: ["Python, REST API, Django, PostgreSQL"],
      frontend: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "Redux",
        "Material UI",
        "Axios",
      ],
      tools: ["Git & GitHub, CI/CD"],
    },
    projectTech: {
      jp: [
        "Python, Django, REST API, PostgreSQL, JavaScript, React, Material UI, Redux, Axios",
      ],
      suma: [
        "TypeScript, JavaScript, Next.js, React, Tailwind CSS, HTML, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
  xorux: {
    name: "xorux",
    profession: "Junior Full-Stack Developer",
    logo: "xorux.png",
    companyLink: "https://xorux.com/",
    bgColor:
      "radial-gradient(circle, rgb(67, 128, 139, 0.7), rgb(67, 128, 139, 0.2)",
    textColor: "rgb(67, 128, 139)",
    imgClass:
      "mx-auto lg:mx-0 lg:-mt-6 lg:ml-auto  w-2/3 sm:w-1/2 md:w-1/3 lg:w-80",
    about:
      "Od roku 2021 se se zapálením věnuji programování. Začal jsem profesní dráhu v oboru, také vytvářím vlastní projekty (TypeScript, Python). Nyní hledám pracovní příležitost v ",
    techStack: {
      frontend: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "Redux",
        "Material UI",
        "Axios",
      ],
      backend: ["Python, REST API, Django, PostgreSQL"],
      tools: ["Git & GitHub, Docker, CI/CD"],
    },
    projectTech: {
      jp: [
        "Python, Django, REST API, PostgreSQL, React, JavaScript, Material UI, Redux, Axios",
      ],
      suma: [
        "TypeScript, JavaScript, React, Next.js, Tailwind CSS, HTML, Google API",
      ],
      div: ["Python, Django, PostgreSQL"],
    },
  },
};
