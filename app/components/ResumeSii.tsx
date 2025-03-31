import React from "react";
import { Poppins } from "next/font/google";
import { projects } from "../data/projects";
import { workExperience } from "../data/workExperience";

const opensans = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function ResumeSii() {
  return (
    <article
      id="resumesii"
      className="mt-4 p-8 max-w-[900px] lg:mx-auto bg-gray-100"
    >
      <div className={opensans.className}>
        <header>
          <div className="flex justify-start lg:justify-between items-start lg:items-center">
            <h1 className="mr-3 text-5xl text-zinc-900 font-bold tracking-widest">
              Jiří Vecko
            </h1>
            <h1 className="ml-3 text-5xl text-[#045A9F] font-bold tracking-widest">
              CV
            </h1>
          </div>
          <p className="mt-2 text-3xl text-left text-zinc-900 tracking-wide">
            Junior Full-Stack Developer
          </p>
          <p className="mt-3 text-base text-left text-zinc-800">
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
          <p className="mt-4 text-justify text-lg text-zinc-900">
            I have been a transport specialist. My biggest motivation in life is
            the desire to learn new things, so I started programming in 2021 and
            have been continuously improving through education and project
            development (JavaScript, React). Now, I am looking for a job
            opportunity in{" "}
            <a
              href="https://sii-group.com/en-CZ/offers/software-development/frontend-developer-digital-identity-platform"
              className="text-[#045A9F] underline decoration-solid underline-offset-4 decoration-2 decoration-zinc-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              SII Czech Republic
            </a>
            .
          </p>
        </header>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            Tech Stack
          </h2>
          <hr className="border-[#045A9F] border-2 my-3"></hr>
          <ul className="ml-8 list-disc text-base text-zinc-900 tracking-wide">
            <li>
              JavaScript, TypeScript, HTML, React, Next.js, Material UI,
              Tailwind CSS, Redux, Axios
            </li>
            <li>Python, Django, PostgreSQL, REST API</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            My projects
          </h2>
          <hr className="border-[#045A9F] border-2 my-3"></hr>
          <div>
            {projects.map((project) => (
              <article key={project.name} className="mb-6">
                <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center mb-1">
                  <h3 className="text-xl text-zinc-700 font-bold">
                    {project.name}
                  </h3>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-base underline text-zinc-700 lg:ml-4"
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
                  <li>{project.tech}</li>
                  <li>
                    <a
                      href={project.code}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.code.replace("https://", "")}
                    </a>
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            Work experience
          </h2>
          <hr className="border-[#045A9F] border-2 my-3"></hr>
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
            Education
          </h2>
          <hr className="border-[#045A9F] border-2 my-3"></hr>
          <article className="mb-3">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
              <h3 className="text-xl text-zinc-700 font-bold">
                CZECH TECHNICAL UNIVERSITY IN PRAGUE
              </h3>
              <p className="text-lg text-zinc-600 lg:ml-4 font-semibold">
                2016 - 2019
              </p>
            </div>
            <p className="text-base text-zinc-700">
              Faculty of Transportation Sciences
            </p>
            <p className="text-base text-zinc-700">
              Bachelor&apos;s degree (Bc.)
            </p>
          </article>
        </section>

        <section className="mt-7">
          <h2 className="text-3xl text-zinc-700 font-bold tracking-wide">
            Languages
          </h2>
          <hr className="border-[#045A9F] border-2 my-3"></hr>
          <article className="mb-3">
            <p className="text-base text-zinc-700">Czech – Native</p>
            <p className="text-base text-zinc-700">English – B2</p>
            <p className="text-base text-zinc-700">German – A2</p>
          </article>
        </section>
      </div>
    </article>
  );
}

export default ResumeSii;