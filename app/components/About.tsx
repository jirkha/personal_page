import React from 'react'

function About() {
  return (
    <div id="about">
      <section className="m-8">
        <h2 className="text-5xl sm:text-6xl text-slate-100 tracking-wide">
          O mně
        </h2>
        <hr className="slate-100 mt-8"></hr>
        <p className="text-lg mt-8 text-slate-300 tracking-wide">
          Jmenuji se Jiří Vecko a dlouhodobě se profesně pohybuji v sektoru udržitelné
          dopravy. Od roku 2021 ale rychle pronikám do tajů webového
          developmentu a stavím webové aplikace.
        </p>
        <p className="text-lg mt-8 text-slate-300 tracking-wide">
          {" "}
          Vpřed jsem se posunul zejména tvorbou několika vlastních praktických
          projektů. Nyní jsem připraven naprogramovat jak serverovou, tak klientskou část aplikace. Vytvořím jak komplexnější aplikaci, tak i méně rozsáhlý projekt.
        </p>
        <p className="text-lg mt-8 text-slate-300 tracking-wide">
          Ručím za dotažení zadání k maximální spokojenosti zadavatele. Díky velké vnitřní motivaci se posouvat dále není mým aktuálním cílem dosáhnutí nejvyššího zisku, avšak
          nikoli na úkor kvality, kterou považuji za prvořadou.
        </p>
        <p className="text-lg mt-8 text-slate-300 tracking-wide">
          Moje vize je dlouhodobá spolupráce založená na důvěře,
          spolehlivosti, komunikaci a lidském přístupu.
        </p>
      </section>
    </div>
  );
}

export default About