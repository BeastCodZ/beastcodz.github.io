import {
  C,
  Cplusplus,
  Javascript,
  Nodedotjs,
  Typescript,
  Git,
  Docker,
  Postman,
  ArchLinux,
  Linux,
  Mongodb,
  Mysql,
  Figma,
  Photoshop,
  Premierepro,
  AfterEffects,
  React,
} from "@thesvg/react";
import { AlertTriangle, Wrench } from "lucide-react";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiGithub,
  SiTailwindcss,
  SiElectron,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const chipClassName =
    "rounded-full border border-[var(--border)] px-2 py-1 text-xs text-[var(--text-secondary)] flex items-center gap-2";

  return (
    <section
      id="skills"
      className="
        mt-8
        rounded-3xl
        border border-(--border)
        bg-(--surface)
        backdrop-blur-xl
        p-4 md:p-6
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <Wrench size={22} className="text-(--accent)" />

        <div>
          <h2 className="text-lg font-semibold text-(--text-primary)">
            Tech Stack
          </h2>

          <p className="text-xs text-(--text-muted)">
            Tools and technologies I actively work with.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Web */}
        <div
          className="
            rounded-2xl
            border border-(--border)
            p-4
          "
        >
          <h3
            className="
              mb-3
              text-sm
              font-semibold
              text-(--text-primary)
            "
          >
            Web Development
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              {
                name: "JavaScript",
                icon: <Javascript width={16} height={16} />,
              },
              { name: "Node.js", icon: <Nodedotjs width={16} height={16} /> },
              {
                name: "Express.js",
                icon: <SiExpress width={16} height={16} />,
              },
              { name: "React", icon: <React width={16} height={16} /> },
              { name: "Next.js", icon: <SiNextdotjs width={16} height={16} /> },
              {
                name: "TypeScript",
                icon: <Typescript width={16} height={16} />,
              },
              {
                name: "TailwindCSS",
                icon: <SiTailwindcss width={16} height={16} />,
              },
              { name: "Electron", icon: <SiElectron width={16} height={16} /> },
            ].map((skill) => (
              <span key={skill.name} className={chipClassName}>
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Systems */}
        <div
          className="
            rounded-2xl
            border border-(--border)
            p-4
          "
        >
          <h3
            className="
              mb-3
              text-sm
              font-semibold
              text-(--text-primary)
            "
          >
            Systems & Tools
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              { name: "Git", icon: <Git width={16} height={16} /> },
              { name: "GitHub", icon: <SiGithub width={16} height={16} /> },
              { name: "Docker", icon: <Docker width={16} height={16} /> },
              { name: "Postman", icon: <Postman width={16} height={16} /> },
              {
                name: "Arch Linux",
                icon: <ArchLinux width={16} height={16} />,
              },
              { name: "Linux", icon: <Linux width={16} height={16} /> },
            ].map((skill) => (
              <span key={skill.name} className={chipClassName}>
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        <div
          className="
            rounded-2xl
            border border-(--border)
            p-4
          "
        >
          <h3
            className="
              mb-3
              text-sm
              font-semibold
              text-(--text-primary)
            "
          >
            Databases
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              { name: "MongoDB", icon: <Mongodb width={16} height={16} /> },
              { name: "MySQL", icon: <Mysql width={16} height={16} /> },
              {
                name: "PostgreSQL",
                icon: <SiPostgresql width={16} height={16} />,
              },
            ].map((skill) => (
              <span key={skill.name} className={chipClassName}>
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        {/* Languages */}
        <div
          className="
            rounded-2xl
            border border-(--border)
            p-4
          "
        >
          <h3
            className="
              mb-3
              text-sm
              font-semibold
              text-(--text-primary)
            "
          >
            Languages
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              { name: "C", icon: <C width={16} height={16} /> },
              { name: "C++", icon: <Cplusplus width={16} height={16} /> },
              { name: "Python", icon: <SiPython width={16} height={16} /> },
            ].map((skill) => (
              <span key={skill.name} className={chipClassName}>
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="
          mt-4
          rounded-2xl
          border border-(--border)
          p-4
        "
      >
        <h3
          className="
            mb-3
            text-sm
            font-semibold
            text-(--text-primary)
          "
        >
          Other Skills
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            { name: "Figma", icon: <Figma width={16} height={16} /> },
            { name: "Photoshop", icon: <Photoshop width={16} height={16} /> },
            {
              name: "Premiere Pro",
              icon: <Premierepro width={16} height={16} />,
            },
            {
              name: "After Effects",
              icon: <AfterEffects width={16} height={16} />,
            },
          ].map((skill) => (
            <span
              key={skill.name}
              className="
                rounded-full
                border border-(--border)
                px-2 py-1
                text-xs
                text-(--text-secondary)
                flex items-center gap-2
              "
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      <div
        className="
        mt-6 pt-4
          border-t border-(--border)
          flex items-center gap-2
          text-xs
          text-(--accent)
        "
      >
        <AlertTriangle size={20} />

        <span>
          Every skill listed here is backed by experimentation, or projects.
        </span>
      </div>
    </section>
  );
}
