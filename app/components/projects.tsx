import {
  AlertTriangle,
  Folder
} from "lucide-react";

import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div
      className="
        w-full max-w-3xl mx-auto
        rounded-3xl
        bg-(--surface)
        backdrop-blur-xs
        border-2
        border-(--border)
        bg-opacity-50
        p-4 md:p-8
        shadow-lg
      "
    >
      
        <div className="mb-6 flex items-center gap-3">
        <Folder size={22} className="text-(--accent)" />

        <div>
          <h2 className="text-lg font-semibold text-(--text-primary)">
            Projects
          </h2>

          <p className="text-xs text-(--text-muted)">
            A showcase of my work and contributions.
          </p>
        </div>
      </div>
      

      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
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
        <AlertTriangle size={18} />

        <span>
          Projects evolve. Bugs happen. Progress ships.
        </span>
      </div>
    </div>
  );
}