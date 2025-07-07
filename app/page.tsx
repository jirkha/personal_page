import About from "@/app/components/about";
import Home from "@/app/components/home";
import Skills from "@/app/components/skills";
import styles from "./page.module.css";
import Projects from "./components/projects";
import Contact from "./components/contact";

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
