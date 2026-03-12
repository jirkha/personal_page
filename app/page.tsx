import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
//import styles from "./page.module.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col space-y-40 max-w-[1220px] mx-auto pt-20">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
