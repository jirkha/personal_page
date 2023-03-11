import React from "react";
import { FiPhone } from "react-icons/fi";
import { RiAtLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div className="m-9 my-28" id="contact">
      <article>
        <header>
          <h2 className="text-6xl text-slate-100 tracking-wide">Kontakt</h2>
        </header>
        <hr className="slate-100 my-8"></hr>
        <section>
          <div className="flex flex-row text-xl gap-x-10 mt-10 mb-5">
            <FiPhone size={32} className="text-slate-100" />
            <p className="text-slate-100">
              <a href="tel:+420721665444">+420 721 665 444</a>
            </p>
          </div>
          <div className="flex flex-row text-xl gap-x-10 mb-5">
            {" "}
            <RiAtLine size={32} className="text-slate-100" />
            <p className="text-slate-100">
              <a href="mailto:veckoj@seznam.cz">veckoj@seznam.cz</a>
            </p>
          </div>
          <div className="flex flex-row text-xl gap-x-10 mb-5">
            <a href="https://www.linkedin.com/in/ji%C5%99%C3%AD-vecko-44579b127/">
              <BsLinkedin size={32} className="text-slate-100" />
            </a>
          </div>
        </section>
        <h3 className="text-2xl text-slate-100 mt-12 mb-4">
          ... nebo využijte <b className="tracking-wide">kontaktní formulář</b>
        </h3>
        <section className="">
          <form
            action="https://getform.io/f/1850e12a-ea00-4a64-b04c-aab2f30a41c7"
            className="flex flex-col"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Jméno"
              className="rounded py-2 my-2 px-3 max-w-screen-sm"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="rounded py-2 my-2 px-3 max-w-screen-sm"
              required
            />
            <textarea
              name="message"
              placeholder="Zpráva"
              className="rounded py-2 my-2 px-3 max-w-screen-sm h-64 min-h-fit"
              required
            />
            <input
              type="hidden"
              name="_gotcha"
              className="display:none !important"
            ></input>
            <button
              type="submit"
              className="rounded my-2 mb-10 px-5 py-2 w-fit bg-slate-700 hover:bg-slate-800 text-slate-300 shadow-inner shadow-slate-400"
            >
              Odeslat
            </button>
          </form>
        </section>
      </article>
    </div>
  );
}

export default Contact;
