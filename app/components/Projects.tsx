import React from "react";
import jp2 from "@/app/images/jp2_app.png";
import personal_page from "@/app/images/personal_page.png";
import sumasumarum from "@/app/images/sumasumarum.png";
import divcz from "@/app/images/divcz.png";
import Image from "next/image";
import Link from "next/link";

const projects: {
  name: string;
  about: string | React.ReactNode;
  img: any;
  demo?: string;
  code: string;
}[] = [
  {
    name: "J&P Candles APP",
    about:
      "podnikový systém pro sledování skladových zásob, produktů, tržeb atd.",
    img: jp2,
    demo: "https://jpexamplepublic-production.up.railway.app/",
    code: "https://github.com/jirkha/jp2",
  },
  {
    name: "Osobní stránka",
    about: "portfolio",
    img: personal_page,
    //demo: "https://personalpage-production.up.railway.app/",
    code: "https://github.com/jirkha/personal_page",
  },
  {
    name: "SUMA SUMÁRUM",
    about: "kalkulátor volného času a dalších dopadů stěhování z města",
    img: sumasumarum,
    demo: "https://sumasumarum.vercel.app/",
    code: "https://github.com/jirkha/commute_calculator",
  },
  {
    name: "DIV.cz | Databáze filmů",
    about: "průvodce světem popkultury (non-profit spolupráce)",
    img: divcz,
    demo: "https://div.cz/",
    code: "https://github.com/div-cz",
  },
];

function Projects() {
  return (
    <div id="projects" className="m-9 my-40 scroll-mt-28">
      <section>
        <h2 className="text-5xl sm:text-6xl text-slate-100 tracking-wide">
          Projekty
        </h2>
        <hr className="slate-100 mt-8"></hr>
        <div className="mt-8 p-2 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 w-full h-fit">
          {projects.map(({ name, about, img, demo, code }) => (
            <div
              key={name}
              className="justify-between flex flex-col transition delay-100 duration-100 ease-in-out hover:scale-105 bg-slate-600 rounded w-64 h-auto m-3 shadow-inner shadow-slate-400 [backface-visibility:hidden]"
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
                {demo && (
                  <Link
                    className="rounded w-full p-2 bg-slate-700 hover:bg-slate-800 text-slate-300 shadow-inner shadow-slate-400"
                    href={demo}
                  >
                    <p className="text-center">Demo</p>
                  </Link>
                )}
                <Link
                  className="rounded w-full p-2 bg-slate-700 hover:bg-slate-800 text-slate-300 shadow-inner shadow-slate-400"
                  href={code}
                >
                  <p className="text-center">Kód</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
