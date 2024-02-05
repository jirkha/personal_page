import React from "react";
import Image from "next/image";
import img from "../../app/images/portrait_jiri_vecko_cut_width.jpg";
import icon from "../../app/images/jiří_vecko_icon_sm.png";

function Home() {
  return (
    <div id="home">
      <article className="grid my-12 justify-items-center w-auto md:flex md:justify-around items-center">
        <section className="m-8">
          <h1 className="text-6xl text-slate-100 tracking-widest mb-2">
            <b>Vecko Jiří</b>
          </h1>
          {/* <Image className="w-40 my-6" src={icon} alt="Icon of the author"></Image> */}
          <h2 className="text-3xl text-slate-100 tracking-widest font-medium">
            programátor, tvůrce webových aplikací
          </h2>
          <hr className="slate-100 mt-8"></hr>
          <div>
            <p className="mt-8 text-lg text-slate-300 tracking-wide">
              Mou největší motivací je touha učit se novým věcem. Proto jsem
              v roce 2021 začal s programováním a neustále se posouvám
              vpřed.
            </p>
          </div>
        </section>

        <Image
          className="p-8 w-96 mx-auto"
          src={img}
          alt="Pic of the author"
          // width={377}
          // height={345}
        ></Image>
      </article>
    </div>
  );
}

export default Home;
