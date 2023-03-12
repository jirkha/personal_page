import React from "react";
import Image from "next/image";

import typescript from "@/app/images/logos/TypeScript.svg";
import javascript from "@/app/images/logos/JS.svg";
import react from "@/app/images/logos/React.svg";
import html from "@/app/images/logos/HTML5.svg";
import css from "@/app/images/logos/CSS3.svg";
import python from "@/app/images/logos/Python.svg";
import github from "@/app/images/logos/Github.png";
import django from "@/app/images/logos/Django.png";
import nextjs from "@/app/images/logos/Nextjs.png";
import tailwind from "@/app/images/logos/TailwindCSS.png";
import pandas from "@/app/images/logos/Pandas.png";
import postgre from "@/app/images/logos/Postgresql.png";

const experiences: { name: string; img: any; color: string }[] = [
  {
    name: "TypeScript",
    img: typescript,
    color: "typescript",
  },
  {
    name: "JavaScript",
    img: javascript,
    color: "javascript",
  },
  {
    name: "Next.js",
    img: nextjs,
    color: "slate-100",
  },
  {
    name: "React",
    img: react,
    color: "react",
  },
  {
    name: "HTML",
    img: html,
    color: "html",
  },
  {
    name: "CSS",
    img: css,
    color: "css",
  },
  {
    name: "Tailwind CSS",
    img: tailwind,
    color: "tailwind",
  },
  {
    name: "Python",
    img: python,
    color: "python",
  },
  {
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
    name: "GitHub",
    img: github,
    color: "slate-900",
  },
];

function Skills() {
  return (
    <div id="skills" className="m-9 my-28">
      <section>
        <h2 className="text-5xl sm:text-6xl text-slate-100 tracking-wide">Dovednosti</h2>
        <hr className="slate-100 mt-8"></hr>
        <div className="mt-8 p-2 flex flex-wrap mx-auto w-full h-fit">
          {experiences.map(({ name, img, color }) => (
            <div
              key="name"
              className={`rounded hover:scale-105 border-2 hover:border-${color} border-slate-500 border-b-${color} w-28 h-52 m-3`}
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
