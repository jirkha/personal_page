import React from 'react'
import Image from "next/image";
import { Link } from "react-scroll";
import img from "../../app/images/portrait_jiri_vecko_cut_width.jpg";
import down from "../../app/images/down_jv.png";
import dot from "../../app/images/dot_jv.png";

function Home() {
  return (
    <div id="home">
      <article className="grid justify-items-center w-auto md:p-8 md:flex md:justify-around items-center">
        <section className="m-8">
          <h1 className="text-6xl text-slate-100 tracking-wide">
            <b>Vítejte</b> ve světě webových aplikací
          </h1>
          {/* <div>
            <Image
              className="m-5"
              src={dot}
              alt="Dot mark of the author"
              width={177}
              height={13}
            ></Image>
          </div> */}
          <hr className="slate-100 mt-8"></hr>
          <div>
            <p className="mt-8 text-slate-300 tracking-wide">
              Mou největší motivací je touha učit se nové věci. Proto jsem se
              před dvěma lety pustil do programování a neustále se posouvám
              vpřed.
            </p>
            <p></p>
            <p></p>
          </div>
        </section>

        <Image
          className="m-8"
          src={img}
          alt="Pic of the author"
          width={377}
          height={345}
        ></Image>
      </article>
      <section className="hidden md:flex justify-center mt-16 cursor-pointer">
        {/* <Link to="about" smooth duration={500}> */}
          <Image src={down} alt="Down button" width={195} height={27}></Image>
        {/* </Link> */}
      </section>
    </div>
  );
}

export default Home