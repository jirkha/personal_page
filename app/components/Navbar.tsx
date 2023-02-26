"use client";
import React, {useState} from "react";
import {Link} from "react-scroll";
import Image from "next/image";
import logo from "../images/jiri_vecko_logo_sm.jpeg";
import { AiOutlineMenu } from "react-icons/ai";

const items: { label: string; page: string }[] = [
  {
    label: "Úvod",
    page: "/",
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
    <div>
      <header>
        <nav className="flex justify-between shadow mx-auto w-full px-2 bg-black">
          <Image
            className="ml-8"
            src={logo}
            alt="Logo of the author"
            width={90}
            height={90}
          ></Image>
          <ul className="hidden md:flex space-x-8 mr-10 my-8  text-slate-100">
            {items.map(({ label, page }) => (
              <li
                className=" hover:text-amber-100 hover:underline decoration-1 cursor-pointer"
                key={page}
              >
                <Link to={page} smooth duration={500}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setNavbar(true)}
            className="flex md:hidden mr-10 my-8 z-10 cursor-pointer"
          >
            <AiOutlineMenu color="white" size={30} />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
