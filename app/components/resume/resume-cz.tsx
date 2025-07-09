import React from "react";
import { Poppins } from "next/font/google";

const opensans = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function ResumeCZ() {
  return (
    <article
      id="resumeen"
      className="p-8 max-w-[900px] lg:mx-auto bg-gray-100 border-neutral-900 border-2"
    >
      <div className={opensans.className}>
        <header>
          <div className="flex justify-start lg:justify-between items-start lg:items-center">
            <h1 className="text-5xl text-zinc-900 font-bold tracking-widest">
              Jiří Vecko
            </h1>
            <h1 className="text-5xl text-zinc-500 font-bold tracking-widest">
              CV
            </h1>
          </div>
          <p className="mt-2 text-3xl text-left	text-zinc-900 tracking-wide">
            Junior Full-Stack Developer
          </p>
          <p className="mt-2 text-base text-left text-zinc-800 tracking-widest">
            +420 721 665 444 | veckoj@seznam.cz |{" "}
            <a
              href="https://www.linkedin.com/in/jiri-vecko/"
              className="text-base underline text-zinc-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/jiri-vecko
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/jirkha"
              className="text-base underline text-zinc-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/jirkha
            </a>
          </p>
          <p className="mt-2 text-lg text-zinc-900 tracking-wide">
            Dosud jsem byl dopravním specialistou. Od roku 2021 se intenzivně
            věnuji programování. Vytvářím vlastní projekty (JavaScript, Python)
            a v oboru se dále vzdělávám. Nyní hledám pracovní příležitost.
          </p>
        </header>

        <section className="mt-3">
          <h2 className="text-3xl	text-zinc-700 font-bold tracking-wide">
            Technologie
          </h2>
          <hr className="border-zinc-500 my-2"></hr>
          <ul className="ml-8 list-disc text-base text-zinc-900 tracking-wide">
            <li>
              JavaScript, TypeScript, React, Next.js, Material UI, Tailwind CSS,
              Redux, Axios
            </li>
            <li>Python, Django, PostgreSQL, REST API</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section className="mt-3">
          <h2 className="text-3xl	text-zinc-700 font-bold tracking-wide">
            Projekty
          </h2>
          <hr className="border-zinc-500 my-3"></hr>
          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                J&P Candles
              </h3>

              <a
                href="https://jpexamplepublic-production.up.railway.app"
                className="text-base underline text-zinc-700 lg:ml-4 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                jpexamplepublic-production.up.railway.app
              </a>
            </div>

            <p className="text-base text-zinc-700">
              Aplikace pro rodinnou značku J&P Candles se skladovým
              hospodářstvím. Umožňuje evidovat a spravovat materiál včetně
              vyskladnění a naskladnění, produkty, prodejní kanály, transakce a
              statistiku tržeb.
            </p>
            <ul className="ml-8 list-disc text-base text-zinc-700">
              <li>
                React, JavaScript, Python, Django, PostgreSQL, Material UI,
                Redux, Axios
              </li>
              <li>
                <a
                  href="https://github.com/jirkha/jp2"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/jirkha/jp2
                </a>
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                Kalkulátor volného času (Suma Sumárum)
              </h3>
              <a
                href="https://sumasumarum.vercel.app"
                className="text-base underline text-zinc-700 lg:ml-4 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                sumasumarum.vercel.app
              </a>
            </div>

            <p className="text-base text-zinc-700">
              V aplikaci jsem využil profesní zkušenosti z dopravy i
              programování. Umožňuje zjistit vliv stěhování na změnu doby
              dojíždění a množství volného času. Pracuje s reálnými časy
              dojíždění (Google API).
            </p>
            <ul className="ml-8 list-disc text-base text-zinc-700">
              <li>React, Next.js, TypeScript, Tailwind CSS</li>
              <li>
                <a
                  href="https://github.com/jirkha/commute_calculator"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/jirkha/commute_calculator
                </a>
              </li>
            </ul>
          </article>

          <article className="mb-6">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                DIV.CZ Developer
              </h3>
              <a
                href="https://www.div.cz"
                className="text-base underline text-zinc-700 lg:ml-4 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.div.cz
              </a>
            </div>

            <p className="text-base text-zinc-700">
              Non-profit týmová spolupráce na vývoji nové platformy propojující
              filmy, hry a knihy. Ve spolupráci s vedoucím projektu jsem
              programoval skripty v backendové i frontendové části aplikace.
            </p>
            <ul className="ml-8 list-disc text-base text-zinc-700">
              <li>Python, Django, PostgreSQL</li>
              <li>
                <a
                  href="https://github.com/div-cz"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/div-cz
                </a>
              </li>
            </ul>
          </article>
        </section>

        <section className="mt-3">
          <h2 className="text-3xl	text-zinc-700 font-bold tracking-wide">
            Pracovní zkušenosti
          </h2>
          <hr className="border-zinc-500 my-3"></hr>
          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                Vedoucí odboru železniční dopravy
              </h3>

              <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
                2022 - 2024
              </p>
            </div>
            <p className="text-base text-zinc-700 font-semibold">
              Integrovaná doprava Středočeského kraje
            </p>
            <p className="text-base text-zinc-700">
              Vedení týmu, projektové řízení, řešení strategických i provozních
              úkolů
            </p>
          </article>

          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                Projektový manažer
              </h3>
              <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
                2020 - 2022
              </p>
            </div>
            <p className="text-base text-zinc-700 font-semibold">
              Magistrát hl. m. Prahy
            </p>
            <p className="text-base text-zinc-700">
              Projektové řízení Plánu udržitelné mobility a vedení expertní
              skupiny
            </p>
          </article>

          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                Specialista spolupráce se školami
              </h3>
              <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
                2019 - 2020
              </p>
            </div>
            <p className="text-base text-zinc-700 font-semibold">
              Správa železnic
            </p>
            <p className="text-base text-zinc-700">
              Správa webových stránek a HR marketing
            </p>
          </article>

          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                Projektant dopravy
              </h3>
              <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
                2017 - 2020
              </p>
            </div>
            <p className="text-base text-zinc-700 font-semibold">
              Integrovaná doprava Středočeského kraje
            </p>
            <p className="text-base text-zinc-700">
              Koordinace týmu, práce se softwarem pro tvorbu jízdních řádů a
              analytika
            </p>
          </article>

          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                Supervizor
              </h3>
              <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
                2014 - 2017
              </p>
            </div>
            <p className="text-base text-zinc-700 font-semibold">České dráhy</p>
          </article>

          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                Zaměstnanec specializované kontroly
              </h3>
              <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
                2011 - 2014
              </p>
            </div>
            <p className="text-base text-zinc-700 font-semibold">České dráhy</p>
          </article>

          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-2xl text-zinc-700 font-semibold">
                Vlakvedoucí, průvodčí
              </h3>
              <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
                2008 - 2011
              </p>
            </div>
            <p className="text-base text-zinc-700 font-semibold">České dráhy</p>
          </article>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl	text-zinc-700 font-bold tracking-wide">
            Vzdělání
          </h2>
          <hr className="border-zinc-500 my-3"></hr>
          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-xl text-zinc-700 font-bold">
                České vysoké učení technické v Praze
              </h3>
              <p className="text-lg text-zinc-600 lg:ml-4 font-semibold">
                2016 - 2019
              </p>
            </div>
            <p className="text-base text-zinc-700">Fakulta dopravní</p>
            <p className="text-base text-zinc-700">Titul Bc.</p>
          </article>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl	text-zinc-700 font-bold tracking-wide">
            Jazykové dovednosti
          </h2>
          <hr className="border-zinc-500 my-3"></hr>
          <article className="mb-3">
            <p className="text-base text-zinc-700">Čeština – rodilý mluvčí</p>
            <p className="text-base text-zinc-700">Angličtina – B2</p>
            <p className="text-base text-zinc-700">Němčina – A2</p>
          </article>
        </section>
      </div>
    </article>
  );
}

export default ResumeCZ;
