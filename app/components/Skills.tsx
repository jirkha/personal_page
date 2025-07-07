import React from "react";
import Image from "next/image";

import typescript from "@/app/images/logos/TypeScript.svg";
import javascript from "@/app/images/logos/JS.svg";
import react from "@/app/images/logos/React.svg";
import html from "@/app/images/logos/HTML5.svg";
//import css from "@/app/images/logos/CSS3.svg";
import python from "@/app/images/logos/Python.svg";
import github from "@/app/images/logos/Github.png";
import django from "@/app/images/logos/Django.png";
import nextjs from "@/app/images/logos/Nextjs.png";
import tailwind from "@/app/images/logos/TailwindCSS.png";
import mui from "@/app/images/logos/MUI.png";
//import pandas from "@/app/images/logos/Pandas.png";
//import postgre from "@/app/images/logos/Postgresql.png";

const experiences: { id: number; name: string; img: any; color: string }[] = [
  {
    id: 1,
    name: "TypeScript",
    img: typescript,
    color: "typescript",
  },
  {
    id: 2,
    name: "JavaScript",
    img: javascript,
    color: "javascript",
  },
  {
    id: 3,
    name: "Next.js",
    img: nextjs,
    color: "nextjs",
  },
  {
    id: 4,
    name: "React",
    img: react,
    color: "react",
  },
  {
    id: 5,
    name: "HTML",
    img: html,
    color: "html",
  },
  // {
  //   name: "CSS",
  //   img: css,
  //   color: "css",
  // },
  {
    id: 6,
    name: "Tailwind CSS",
    img: tailwind,
    color: "tailwind",
  },
  {
    id: 7,
    name: "Material UI",
    img: mui,
    color: "tailwind",
  },
  {
    id: 8,
    name: "Python",
    img: python,
    color: "python",
  },
  {
    id: 9,
    name: "Django",
    img: django,
    color: "django",
  },
  // {
  //   name: "Pandas",
  //   img: pandas,
  //   color: "pandas",
  // },
  // {
  //   name: "PostgreSQL",
  //   img: postgre,
  //   color: "postgre",
  // },
  {
    id: 10,
    name: "GitHub",
    img: github,
    color: "black",
  },
];

const colorClasses: { [key: string]: string } = {
  javascript: "border-b-javascript",
  typescript: "border-b-typescript",
  nextjs: "border-b-nextjs",
  react: "border-b-react",
  html: "border-b-html",
  tailwind: "border-b-tailwind",
  mui: "border-b-tailwind",
  python: "border-b-python",
  django: "border-b-django",
  black: "border-b-black",
};

const colorHoverClasses: { [key: string]: string } = {
  javascript: "hover:border-javascript",
  typescript: "hover:border-typescript",
  nextjs: "hover:border-nextjs",
  react: "hover:border-react",
  html: "hover:border-html",
  tailwind: "hover:border-tailwind",
  mui: "hover:border-tailwind",
  python: "hover:border-python",
  django: "hover:border-django",
  black: "hover:border-black",
};

function Skills() {
  return (
    <div id="skills" className="m-6 my-28 scroll-mt-28">
      <section>
        <h2 className="text-5xl sm:text-6xl text-slate-100 tracking-wide">
          Dovednosti
        </h2>
        <hr className="slate-100 mt-8"></hr>
        <div className="mt-8 p-2 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3 w-full h-fit">
          {experiences.map(({ id, name, img, color }) => (
            <div
              key={id}
              className={`rounded hover:scale-105 border-2 ${colorClasses[color]} ${colorHoverClasses[color]} w-28 md:w-34 h-52 m-3 p-2`}
            >
              <Image
                className="m-8 w-20 mx-auto max-h-20"
                src={img}
                alt="Logo of Experince"
              ></Image>
              <p className="text-center	text-slate-300">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
