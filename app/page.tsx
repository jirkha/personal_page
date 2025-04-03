import About from "@/app/components/About";
import Home from "@/app/components/Home";
import Skills from "@/app/components/Skills";
import styles from "./page.module.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="flex flex-col space-y-40 max-w-[1220px] mx-auto bg-gradient-to-b from-black to-slate-600">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
