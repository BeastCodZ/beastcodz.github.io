import { lazy, Suspense } from "react";
import Projects from "./components/projects";
import FadeIn from "./components/FadeIn";

const Home = lazy(() => import("./components/Home"));
const Skills = lazy(() => import("./components/skills"));
const Certificate = lazy(() => import("./components/certificate"));
const Education = lazy(() => import("./components/education"));
const Contact = lazy(() => import("./components/contact"));

export default function Page() {
  return (
    <>
      <div className="w-full flex flex-row justify-center items-center">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center min-h-screen max-h-2svh p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <FadeIn>
              <section id="home">
                <Home />
              </section>
            </FadeIn>
          </Suspense>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <FadeIn>
              <section id="skills">
                <Skills />
              </section>
            </FadeIn>
          </Suspense>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <FadeIn>
              <section id="projects">
                <Projects />
              </section>
            </FadeIn>
          </Suspense>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <FadeIn>
              <section id="certificate">
                <Certificate />
              </section>
            </FadeIn>
          </Suspense>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <FadeIn>
              <section id="education">
                <Education />
              </section>
            </FadeIn>
          </Suspense>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <FadeIn>
              <section id="contact">
                <Contact />
              </section>
            </FadeIn>
          </Suspense>
        </div>
      </div>
    </>
  );
}
