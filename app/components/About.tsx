import React from 'react'

function About() {
  return (
    <div id="about">
      <section className="m-8">
        <h2 className="text-6xl text-slate-100 tracking-wide">O mně</h2>
        <hr className="slate-100 mt-8"></hr>
        <p className="text-lg mt-8 text-slate-300 tracking-wide">
          Jmenuji se Jiří Vecko a dlouhodobě se profesně pohybuji v dopravním
          sektoru. Od roku 2021 ale rychle pronikám do tajů webového
          developmentu a stavím webové aplikace.
        </p>
        <p className="text-lg mt-8 text-slate-300 tracking-wide">
          {" "}
          Protože vpřed se mohu dále posouvat zejména při tvorbě konkrétních
          projektů, jsme připraven detailně vyslechnout přání klienta a následně
          naprogramovat jako serverovou, tak i klientskou část aplikace.
          Vytvářím dále osobní i firemní stránky na míru klienta.
        </p>
        <p className="text-lg mt-8 text-slate-300 tracking-wide">
          Nemám za sebou zatím mnoho projektů, zato ale mohu nabídnout obrovskou
          touhu učit se novým věcem, motivaci projekt dotáhnout až do úplné
          spokojenosti klienta a nižší cenu, nikoliv ale na úkor kvaity.
        </p>
        <p className="text-lg mt-8 text-slate-300 tracking-wide">
          Mojí vizí je dlouhodobá spolupráce s klienty založená na důvěře,
          spolehlivosti, komunikaci a lidském přístupu.
        </p>
      </section>
    </div>
  );
}

export default About