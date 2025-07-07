"use client";

import React from "react";
import Image from "next/image";
import img from "../../app/images/portrait_jiri_vecko_cut_width.jpg";
import { motion, type Variants } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Home(): JSX.Element {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Zpoždění mezi animací potomků
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  return (
    <div id="home" className="scroll-mt-28">
      <motion.article
        className="grid my-6 lg:my-12 justify-items-center w-auto md:flex md:justify-around items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section className="m-8" variants={itemVariants}>
          <motion.h1
            className="text-6xl text-slate-100 tracking-widest mb-2"
            variants={itemVariants}
          >
            <b>Vecko Jiří</b>
          </motion.h1>
          {/* <Image className="w-40 my-6" src={icon} alt="Icon of the author"></Image> */}
          <motion.h2
            className="text-3xl text-slate-100 tracking-widest font-medium"
            variants={itemVariants}
          >
            programátor, tvůrce webových aplikací
          </motion.h2>
          <motion.hr
            className="slate-100 mt-8"
            variants={itemVariants}
          ></motion.hr>
          <motion.div variants={itemVariants}>
            <motion.p
              className="mt-8 text-lg text-slate-300 tracking-wide"
              variants={itemVariants}
            >
              Mou největší motivací je touha učit se novým věcem. Proto jsem v
              roce 2021 začal s programováním a neustále se posouvám vpřed
              vzděláváním a tvorbou projektů.
            </motion.p>
            <motion.div className="flex flex-row mt-8" variants={itemVariants}>
              <motion.a
                className="transition delay-150 duration-300 ease-in-out hover:scale-110"
                href="https://www.linkedin.com/in/ji%C5%99%C3%AD-vecko-44579b127/"
                variants={itemVariants}
              >
                <BsLinkedin size={56} className="text-slate-100" />
              </motion.a>
              <motion.a
                className="ml-8 transition delay-100 duration-80 ease-in-out hover:scale-110"
                href="https://github.com/jirkha"
                variants={itemVariants}
              >
                <FaGithub size={56} className="text-slate-100" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <Image
            className="p-6 w-96 mx-auto"
            src={img}
            alt="Pic of the author"
            // width={377}
            // height={345}
          ></Image>
        </motion.section>
      </motion.article>
    </div>
  );
}

export default Home;
