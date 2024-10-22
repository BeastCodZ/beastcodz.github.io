import Particle from "./Particles";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: "300" });

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-white px-8 py-16 overflow-hidden"
    >
      <Particle />
      <div className="relative z-10 max-w-4xl w-full text-center">
        <div className="backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className={`text-4xl font-bold mb-4 ${lexend.className}`}>
            About Me
          </h2>
          <p className={`text-lg text-gray-400 mb-8 ${lexend.className}`}>
            I’m <span className="font-bold text-blue-500">BeastCodZ</span>, a
            full-stack developer focused on crafting efficient and maintainable
            code. I leverage both <span className="font-bold">front-end</span>{" "}
            and <span className="font-bold">back-end</span> technologies to
            build applications that solve real-world challenges.
          </p>
          <p className={`text-lg text-gray-400 mb-8 ${lexend.className}`}>
            I prioritize <span className="font-bold">functionality</span> and{" "}
            <span className="font-bold">performance</span>, exploring frameworks
            and tools that enhance development workflows and user experiences.
            My interests include <span className="font-bold">JavaScript</span>,{" "}
            <span className="font-bold">API design</span>, and integrating
            emerging technologies to optimize processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
