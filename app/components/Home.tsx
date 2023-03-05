import React from 'react'
import Image from "next/image";
import { Link } from "react-scroll";
import img from "../../app/images/portrait_jiri_vecko_cut_width.jpg";
import down from "../../app/images/down_jv.png";
import dot from "../../app/images/dot_jv.png";

function Home() {
  return (
    <div id="home">
      <article className="grid my-12 justify-items-center w-auto md:flex md:justify-around items-center">
        <section className="m-8">
          <h1 className="text-6xl text-slate-100 tracking-wide">
            <b>Vítejte</b> ve světě webových aplikací
          </h1>
          <hr className="slate-100 mt-8"></hr>
          <div>
            <p className="mt-8 text-lg text-slate-300 tracking-wide">
              Mou největší motivací je touha učit se novým věcem. Proto jsem se
              před dvěma lety pustil do programování a neustále se posouvám
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

export default Home