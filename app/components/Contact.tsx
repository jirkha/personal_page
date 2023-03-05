import React from "react";

function Contact() {
  return (
    <div className="m-9 my-28" id="contact">
      <section>
        <h2 className="text-6xl text-slate-100 tracking-wide">Kontakt</h2>
        <hr className="slate-100 my-8"></hr>
        <div className="">
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
            <input
              type="text"
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
        </div>
      </section>
    </div>
  );
}

export default Contact;
