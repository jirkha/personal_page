// pages/cv.js
import React from "react";
import ResumeSii from "../components/ResumeSii";
import Image from "next/image";
import img from "../../app/images/sii.png";

const CV = () => {
  return (
    <main className="flex flex-col bg-white lg:bg-sii bg-repeat bg-sizeSii mx-auto max-w-full">
      <Image
        className="lg:hidden max-w-xs mx-auto"
        src={img}
        alt="Logo Sii"
      ></Image>
      <ResumeSii />
    </main>
  );
};

export default CV;
