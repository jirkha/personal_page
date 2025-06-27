"use client";
import React, {useState} from "react";
//import {Link} from "react-scroll";
import Image from "next/image";
import logo from "@/app/images/jiří_vecko_logo_PNG.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const items: { label: string; page: string }[] = [
  {
    label: "Úvod",
    page: "home",
  },
  {
    label: "O mně",
    page: "about",
  },
  {
    label: "Dovednosti",
    page: "skills",
  },
  {
    label: "Projekty",
    page: "projects",
  },
  {
    label: "Kontakt",
    page: "contact",
  },
];

function Navbar() {

  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <header
      className="sticky top-0 w-full bg-black
        md:bg-gradient-to-r from-black to-neutral-800 z-50"
    >
      <nav className="flex items-center justify-between shadow max-w-[1220px] mx-auto">
        <Image
          className="ml-8 w-28"
          src={logo}
          alt="Logo of the author"
        ></Image>
        <ul className="hidden text-xl lg:flex space-x-8 mr-10 text-slate-100">
          {items.map(({ label, page }) => (
            <li
              className="p-3 hover:text-amber-100 hover:underline decoration-1 cursor-pointer transition delay-100 duration-80 ease-in-out hover:scale-110"
              key={page}
            >
              <a
                href={`https://www.jirivecko.cz/#${page}`}
                className="p-3 hover:text-amber-100 hover:underline decoration-1 cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNavbar(!navbar)}
          className="flex lg:hidden mr-10 my-8 z-10 cursor-pointer"
        >
          {navbar ? (
            <AiOutlineClose color="white" size={30} />
          ) : (
            <AiOutlineMenu color="white" size={30} />
          )}
        </div>
      </nav>
      {navbar && (
        <ul className="flex flex-col justify-center items-center bg-slate-800">
          {items.map(({ label, page }) => (
            <li
              className="text-slate-100 mt-4 mb-4 p-3 cursor-pointer"
              key={page}
            >
              <a
                href={`https://www.jirivecko.cz/#${page}`}
                className="p-3 hover:text-amber-100 hover:underline decoration-1 cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
      <hr className="border-black md:border-neutral-800"></hr>
    </header>
  );
}

export default Navbar;
