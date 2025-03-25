// pages/cv.js
import React from "react";
import ResumeMiranda from "../components/ResumeMiranda";
import Image from "next/image";
import img from "../../app/images/mirandamedia.png";

const CV = () => {
  return (
    <main className="flex flex-col bg-[#5AE592] lg:bg-mirandamedia bg-repeat bg-size mx-auto">
      <Image
        className="lg:hidden max-w-xs w-auto mx-auto"
        src={img}
        alt="Logo Mirandamedia.cz"
      ></Image>
      <ResumeMiranda />
    </main>
  );
};

export default CV;
