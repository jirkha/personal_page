import React from "react";
import typescript from "@/app/images/logos/TypeScript.svg";
import jp2 from "@/app/images/jp2_app.jpg";
import personal_page from "@/app/images/personal_page.jpg";
import Image from "next/image";
import Link from "next/link";

const projects: {
  name: string;
  about: string;
  img: any;
  demo: string;
  code: string;
}[] = [
  {
    name: "J&P Candles APP",
    about:
      "podnikový systém pro sledování skladových zásob, produktů, tržeb atd.",
    img: jp2,
    demo: "https://jpexamplepublic-production.up.railway.app/",
    code: "https://github.com/jirkha/jp_example_public",
  },
  {
    name: "Osobní stránka",
    about: "portfolio",
    img: personal_page,
    demo: "https://personalpage-production.up.railway.app/",
    code: "https://github.com/jirkha/personal_page",
  },
];

function Projects() {
  return (
    <div id="projects" className="m-9 my-40">
      <section>
        <h2 className="text-5xl sm:text-6xl text-slate-100 tracking-wide">
          Projekty
        </h2>
        <hr className="slate-100 mt-8"></hr>
        <div className="mt-8 p-2 flex flex-wrap mx-auto w-full h-fit">
          {projects.map(({ name, about, img, demo, code }) => (
            <div
              key={name}
              className="justify-between flex flex-col hover:scale-105 bg-slate-600 rounded w-64 h-auto m-3 shadow-inner shadow-slate-400"
            >
              <div>
                {" "}
                <Image
                  className="rounded p-2 w-auto mx-auto max-h-36"
                  src={img}
                  alt="Project preview"
                ></Image>
                <h3 className="text-center underline underline-offset-8	text-slate-300 m-2 font-bold tracking-wide">
                  {name}
                </h3>
                <p className="text-sm font-light text-center tracking-tight text-slate-300 m-3">
                  {about}
                </p>
              </div>

              <div className="flex justify-around m-2 object-bottom">
                <button className="rounded w-full p-2 bg-slate-700 hover:bg-slate-800 text-slate-300 shadow-inner shadow-slate-400">
                  <Link href={demo}>Demo</Link>
                </button>
                <button className="rounded p-2 w-full bg-slate-700 hover:bg-slate-800 text-slate-300 shadow-inner shadow-slate-400">
                  <Link href={code}>Kód</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
