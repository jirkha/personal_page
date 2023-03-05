import React from "react";
import typescript from "@/app/images/logos/TypeScript.svg";
import jp2 from "@/app/images/jp2_app.jpg";
import personal_page from "@/app/images/personal_page.jpg";
import Image from "next/image";
import Link from "next/link";

const projects: { name: string; img: any; demo: string; code: string }[] = [
  {
    name: "J&P Candles APP",
    img: jp2,
    demo: "https://jpexamplepublic-production.up.railway.app/",
    code: "https://github.com/jirkha/jp_example_public",
  },
  {
    name: "Osobní stránka",
    img: personal_page,
    demo: "https://personalpage-production.up.railway.app/",
    code: "https://github.com/jirkha/personal_page",
  },
];

function Projects() {
  return (
    <div id="projects" className="m-9 my-28">
      <section>
        <h2 className="text-6xl text-slate-100 tracking-wide">Projekty</h2>
        <hr className="slate-100 mt-8"></hr>
        <div className="mt-8 p-2 flex flex-wrap mx-auto w-full h-fit">
          {projects.map(({ name, img, demo, code }) => (
            <div key={name} className="flex flex-col hover:scale-105 bg-slate-600 rounded w-64 h-auto m-3 shadow-inner shadow-slate-400">
              <Image
                className="rounded p-2 w-auto mx-auto max-h-36"
                src={img}
                alt="Project preview"
              ></Image>
              <p className="text-center	text-slate-300 m-1">{name}</p>
              <div className="flex justify-around m-1">
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
