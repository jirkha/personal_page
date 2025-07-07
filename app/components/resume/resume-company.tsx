import React from "react";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import { projects } from "../../data/projects";
import { workExperience } from "../../data/workExperience";
import { companyData, CompanyData } from "../../data/companyData";

const opensans = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function ResumeCompany({ nameOfTheCompany }: { nameOfTheCompany: string }) {
  const company: CompanyData = companyData[nameOfTheCompany];

  return (
    <article
      id="resumecompany"
      className="p-8 max-w-[900px] mx-auto bg-gray-100"
    >
      <div className={opensans.className}>
        <header className="flex flex-col lg:flex-row">
          <img
            className={clsx("block lg:hidden mb-8", company.imgClass)}
            src={`/companies/${company.logo}`}
            alt={`${company.name} Logo`}
          />
          <div className="text-left">
            <div className="flex flex-row justify-between items-start mt-2">
              <h1 className="text-5xl text-zinc-900 font-bold tracking-widest">
                Jiří Vecko
              </h1>
              <h1
                className="lg:hidden ml-4 text-5xl font-bold tracking-widest"
                style={{ color: company.textColor }}
              >
                CV
              </h1>
            </div>
            <p className="mt-3 text-3xl text-zinc-900 tracking-wide">
              {company.profession}
            </p>
          </div>
          <img
            className={clsx("hidden lg:block", company.imgClass)}
            src={`/companies/${company.logo}`}
            alt={`${company.name} Logo`}
          />
        </header>

        <p className="mt-4 text-base text-left text-zinc-800">
          +420 721 665 444 | veckoj@seznam.cz |{" "}
          <a
            href="https://www.linkedin.com/in/jiri-vecko/"
            className="text-base underline decoration-zinc-700"
            style={{ color: company.textColor }}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/jiri-vecko
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/jirkha"
            className="text-base underline decoration-zinc-700"
            style={{ color: company.textColor }}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/jirkha
          </a>
        </p>
        <p className="mt-4 text-justify text-lg text-zinc-900">
          {company.about}{" "}
          <a
            href={company.companyLink}
            className="underline decoration-solid underline-offset-4 decoration-2 decoration-zinc-700"
            style={{ color: company.textColor }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.name}
          </a>
          .
        </p>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            Tech Stack
          </h2>
          <hr
            className="border-2 my-3"
            style={{ borderColor: company.textColor }}
          ></hr>
          <ul className="ml-8 list-disc text-base text-zinc-900 tracking-wide">
            {Object.keys(company.techStack).map((key) => (
              <li key={key}>
                {(
                  company.techStack[key as keyof typeof company.techStack] || []
                ).join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            Projekty
          </h2>
          <hr
            className="border-2 my-3"
            style={{ borderColor: company.textColor }}
          ></hr>
          <div>
            {projects.map((project) => {
              let techKey: keyof typeof company.projectTech | null = null;

              if (project.name.includes("J&P CANDLES")) {
                techKey = "jp";
              } else if (project.name.includes("SUMA SUMÁRUM")) {
                techKey = "suma";
              } else if (project.name.includes("DIV.CZ")) {
                techKey = "div";
              }

              const techList = techKey ? company.projectTech[techKey] : [];

              return (
                <article key={project.name} className="mb-6">
                  <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center mb-1">
                    <h3 className="text-xl text-zinc-700 font-bold uppercase">
                      {project.name}
                    </h3>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-base underline lg:ml-4 decoration-zinc-700"
                        style={{ color: company.textColor }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.demo.replace("https://", "")}
                      </a>
                    )}
                  </div>

                  <p className="text-base text-zinc-700 text-justify">
                    {project.description}
                  </p>

                  <ul className="ml-8 list-disc text-base text-zinc-700">
                    {techList.length > 0 && <li>{techList[0]}</li>}

                    <li>
                      <a
                        href={project.code}
                        className="underline break-words decoration-zinc-700"
                        style={{ color: company.textColor }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.code.replace("https://", "")}
                      </a>
                    </li>
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            Pracovní zkušenosti
          </h2>
          <hr
            className="border-2 my-3"
            style={{ borderColor: company.textColor }}
          ></hr>
          <div>
            {workExperience.map((job) => (
              <article key={job.position} className="mb-6">
                <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
                  <h3 className="text-xl text-zinc-700 font-bold">
                    {job.position}
                  </h3>
                  <p className="text-lg text-zinc-600 lg:ml-4 font-semibold">
                    {job.years}
                  </p>
                </div>
                <p className="text-base text-zinc-700 font-semibold">
                  {job.company}
                </p>
                {job.description && (
                  <p className="text-base text-zinc-700  text-justify">
                    {job.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            Vzdělání
          </h2>
          <hr
            className="border-2 my-3"
            style={{ borderColor: company.textColor }}
          ></hr>
          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-xl text-zinc-700 font-bold">
                České vysoké učení technické v Praze, Fakulta dopravní
              </h3>
              <p className="text-lg text-zinc-600 lg:ml-4 font-semibold">
                2016 - 2019
              </p>
            </div>
            <p className="text-base text-zinc-700">
              Obor Technika a technologie v dopravě a spojích
            </p>
            <p className="text-base text-zinc-700">Titul bakalář (Bc.)</p>
          </article>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            Jazykové dovednosti
          </h2>
          <hr
            className="border-2 my-3"
            style={{ borderColor: company.textColor }}
          ></hr>
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

export default ResumeCompany;