import { lazy, Suspense } from "react";
import Projects from "./components/projects";

const Home = lazy(() => import("./components/Home"));
const Skills = lazy(() => import("./components/skills"));
const Certificate = lazy(() => import("./components/certificate"));
const Education = lazy(() => import("./components/education"));
const Contact = lazy(() => import("./components/contact"));

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-4 md:gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <section id="home" className="w-full max-w-3xl min-h-screen px-4 py-4">
          <Home />
        </section>

        <section id="skills" className="w-full max-w-3xl min-h-screen px-4">
          <Skills />
        </section>


        <section id="projects" className="w-full max-w-3xl min-h-screen px-4">
          <Projects />
        </section>

        <section id="certificate" className="w-full max-w-3xl min-h-screen px-4">
          <Certificate />
        </section>

        <section id="education" className="w-full max-w-3xl min-h-screen px-4">
          <Education />
        </section>

        <section id="contact" className="w-full max-w-3xl min-h-screen px-4">
          <Contact />
        </section>
      </Suspense>
    </main>
  );
}