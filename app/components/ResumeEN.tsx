import React from "react";

function ResumeEN() {
  return (
    <article
      id="resumeen"
      className="mt-4 p-8 max-w-[900px] lg:mx-auto bg-gray-100 text-justify"
    >
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
        <p className="mt-2 text-base text-left text-zinc-800">
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
        <p className="mt-2 text-lg text-zinc-900">
          I have been a transport specialist. My biggest motivation in life is
          the desire to learn new things, so I started programming in 2021 and
          have been continuously improving through education and project
          development (Python, JavaScript). Now, I am looking for a job
          opportunity.
        </p>
      </header>

      <section className="mt-3">
        <h2 className="text-3xl	text-zinc-700 font-bold tracking-wide">
          Tech Stack
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
          My projects
        </h2>
        <hr className="border-zinc-500 my-3"></hr>
        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center">
            <h3 className="text-2xl text-zinc-700 font-semibold">
              J&P CANDLES - WEB APPLICATION
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
            J&P Candles business app with warehouse management. It allows
            tracking and managing materials (including stock-in and stock-out),
            products, sales channels, transactions, and revenue statistics.
          </p>
          <ul className="ml-8 list-disc text-base text-zinc-700">
            <li>
              React, JavaScript, Python, Django, PostgreSQL, Material UI, Redux,
              Axios
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
              FREE TIME CALCULATOR (SUMA SUMÁRUM)
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
            I used my experience in transportation and programming in this app.
            It shows how moving affects commute time and free time. The app uses
            real commuting times based on Google API.
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
              DIV.CZ DEVELOPER
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
            Non-profit team collaboration on developing a platform connecting
            movies, games, and books. I worked with the project lead to program
            scripts for the backend and frontend of the app.
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
          Work experience
        </h2>
        <hr className="border-zinc-500 my-3"></hr>
        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
            <h3 className="text-2xl text-zinc-700 font-semibold">
              HEAD OF A DEPARTMENT
            </h3>
            <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
              2022 - 2024
            </p>
          </div>
          <p className="text-base text-zinc-700 font-semibold">IDSK</p>
          <p className="text-base text-zinc-700">
            Head of the Rail Transport Department (team leadership, project
            management, strategic and operation tasks)
          </p>
        </article>

        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
            <h3 className="text-2xl text-zinc-700 font-semibold">
              PROJECT MANAGER - SUSTAINABLE URBAN MOBILITY PLAN
            </h3>
            <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
              2020 - 2022
            </p>
          </div>
          <p className="text-base text-zinc-700 font-semibold">
            PRAGUE CITY HALL
          </p>
          <p className="text-base text-zinc-700">
            Project management and expert group coordination
          </p>
        </article>

        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
            <h3 className="text-2xl text-zinc-700 font-semibold">
              SCHOOL PARTNERSHIP SPECIALIST
            </h3>
            <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
              2019 - 2020
            </p>
          </div>
          <p className="text-base text-zinc-700 font-semibold">
            SPRAVA ZELEZNIC
          </p>
          <p className="text-base text-zinc-700">
            HR marketing, web administration
          </p>
        </article>

        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
            <h3 className="text-2xl text-zinc-700 font-semibold">
              TRANSPORT PLANNER
            </h3>
            <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
              2017 - 2020
            </p>
          </div>
          <p className="text-base text-zinc-700 font-semibold">IDSK</p>
          <p className="text-base text-zinc-700">
            Team coordination, working with specialized software, and analytics
          </p>
        </article>

        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
            <h3 className="text-2xl text-zinc-700 font-semibold">SUPERVISOR</h3>
            <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
              2014 - 2017
            </p>
          </div>
          <p className="text-base text-zinc-700 font-semibold">
            CZECH RAILWAYS
          </p>
        </article>

        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
            <h3 className="text-2xl text-zinc-700 font-semibold">
              SPECIALIZED CONTROL INSPECTOR
            </h3>
            <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
              2011 - 2014
            </p>
          </div>
          <p className="text-base text-zinc-700 font-semibold">
            CZECH RAILWAYS
          </p>
        </article>

        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
            <h3 className="text-2xl text-zinc-700 font-semibold">
              TRAIN CONDUCTOR
            </h3>
            <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
              2008 - 2011
            </p>
          </div>
          <p className="text-base text-zinc-700 font-semibold">
            CZECH RAILWAYS
          </p>
        </article>
      </section>

      <section className="mt-3">
        <h2 className="text-3xl	text-zinc-700 font-bold tracking-wide">
          Education
        </h2>
        <hr className="border-zinc-500 my-3"></hr>
        <article className="mb-3">
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end">
            <h3 className="text-2xl text-zinc-700 font-semibold">
              CZECH TECHNICAL UNIVERSITY IN PRAGUE
            </h3>
            <p className="text-lg text-zinc-700 lg:ml-4 font-semibold">
              2016 - 2019
            </p>
          </div>
          <p className="text-base text-zinc-700 font-semibold">
            Faculty of Transportation Sciences
          </p>
          <p className="text-base text-zinc-700 font-semibold">
            Bachelor&apos;s degree (Bc.)
          </p>
        </article>
      </section>

      <section className="mt-3">
        <h2 className="text-3xl	text-zinc-700 font-bold tracking-wide">
          Languages
        </h2>
        <hr className="border-zinc-500 my-3"></hr>
        <article className="mb-3">
          <p className="text-base text-zinc-700 font-semibold">
            Czech – Native
          </p>
          <p className="text-base text-zinc-700 font-semibold">English – B2</p>
          <p className="text-base text-zinc-700 font-semibold">German – A2</p>
        </article>
      </section>
    </article>
  );
}

export default ResumeEN;
