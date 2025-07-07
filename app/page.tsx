import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
//import styles from "./page.module.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="flex flex-col space-y-40 max-w-[1220px] mx-auto">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
