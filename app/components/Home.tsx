"use client";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

import RecentActivityCard from "./Recentactivitycard";
import ProjectStatusCard from "./ProjectStatusCard";

import { projects } from "../data/projects";
import Image from "next/image";

export default function Home() {
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
      {" "}
      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/me.png"
            alt="BeastCodZ"
            width={92}
            height={92}
            className="
      rounded-2xl
      border border-(--border)
    "
          />

          <div>
            <h1
              className="
        text-3xl
        font-bold
        tracking-wide
        text-(--text-primary)
      "
            >
              Beast<span className="text-(--accent-soft)">CodZ</span>
            </h1>

            <p
              className="
        mt-1
        text-xs
        text-(--accent-soft)
      "
            >
              Full Stack Developer • Software Engineer
            </p>
          </div>
        </div>

        <p
          className="
            text-xs md:text-sm
            text-(--text-secondary)
          "
        >
          Building software, exploring systems, and understanding systems
          beneath the surface.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <div
          className="
            rounded-3xl
            border border-(--border)
            bg-(--surface)
            backdrop-blur-md
            p-4
          "
        >
          <h3
            className="
              mb-4
              text-base
              font-semibold
              text-(--text-primary)
            "
          >
            Project Status
          </h3>

          <div className="flex flex-col md:flex-row gap-4">
            {projects.slice(0, 2).map((project) => (
              <ProjectStatusCard
                key={project.title}
                title={project.title}
                status={project.status}
                description={project.description}
              />
            ))}
          </div>

          <Link
            href="/#projects"
            className="
              mt-4
              inline-flex
              text-xs
              text-(--accent-soft)
              hover:text-(--text-primary)
              transition-colors
            "
          >
            View All Projects →
          </Link>
        </div>

        <div
          className="
            rounded-3xl
            border border-(--border)
            bg-(--surface)
            backdrop-blur-md
            p-4
          "
        >
          <RecentActivityCard />
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
        <AlertTriangle size={18} />

        <span>
          Warning: User may be mood-oriented. Sarcasm included by default.
        </span>
      </div>
    </div>
  );
}
