import { AlertCircle, UserCircle2 } from "lucide-react";
import RecentActivityCard from "./Recentactivitycard";
import Link from "next/link"


export default function Home() {
  return (
    <div
      className="
        w-full max-w-3xl mx-auto
        rounded-3xl
        bg-[var(--surface)]
        backdrop-blur-xs
        border-2
        border-[var(--border)]
        bg-opacity-50
        p-4 md:p-8
        shadow-lg
      "
    >
      {/* Hero */}
      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <UserCircle2 size={28} className="text-[var(--text-primary)]" />

        <h1
          className="
            text-xl
            md:text-2xl
            font-semibold
            text-[var(--text-primary)]
          "
        >
          BeastCodZ
        </h1>

        <p
          className="
            text-xs
            text-[var(--text-muted)]
          "
        >
          Full Stack Developer • Computer Engineering Student
        </p>

        <p
          className="
            text-xs md:text-sm
            text-[var(--text-secondary)]
          "
        >
          Building software, exploring systems, and understanding systems
          beneath the surface.
        </p>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
        {/* Current Status */}
        <div
          className="
    rounded-3xl
    border border-[var(--border)]
    bg-[var(--surface)]
    backdrop-blur-md
    p-4
  "
        >
          <RecentActivityCard />
        </div>

        {/* Highlighted Work */}
        <div
          className="
    rounded-3xl
    border border-[var(--border)]
    bg-[var(--surface)]
    backdrop-blur-md
    p-4
  "
        >
          <h3
            className="
      mb-4
      text-base
      font-semibold
      text-[var(--text-primary)]
    "
          >
            Project Status
          </h3>

          <div className="space-y-4">
            {/* FallenKey */}
            <div>
              <div className="flex flex-col">
                <h4
                  className="
            font-semibold
            text-[var(--text-primary)]
          "
                >
                  FallenKey
                </h4>

                <span
                  className="
            text-[10px]
            text-[var(--accent-soft)]
          "
                >
                  In Development
                </span>
              </div>

              <p
                className="
          mt-1
          text-xs
          leading-5
          text-[var(--text-secondary)]
        "
              >
                Complete rewrite of WinKey using Tauri, focused on performance,
                reliability, and a native desktop experience.
              </p>
            </div>

            {/* UniLost */}
            <div
              className="
        border-t border-[var(--border)]
        pt-4
      "
            >
              <div className="flex flex-col">
                <h4
                  className="
            font-semibold
            text-[var(--text-primary)]
          "
                >
                  UniLost
                </h4>

                <span
                  className="
            text-[10px]
            text-[var(--accent-soft)]
          "
                >
                  Active
                </span>
              </div>

              <p
                className="
          mt-1
          text-xs
          leading-5
          text-[var(--text-secondary)]
        "
              >
                Accessibility-focused platform built to solve everyday campus
                problems and improve the student experience.
              </p>
            </div>
          </div>

          <Link
            href="/#projects"
            className="
      mt-4
      inline-flex
      text-xs
      text-[var(--accent-soft)]
      hover:text-[var(--text-primary)]
      transition-colors
    "
          >
            View All Projects →
          </Link>
        </div>
        
      </div>
<div
        className="
        mt-6 pt-4
          border-t border-[var(--border)]
          flex items-center gap-2
          text-xs
          text-[var(--accent)]
        "
      >
        <AlertCircle size={18} />

        <span>
          Warning: User may be mood-oriented. Sarcasm included by
          default.
        </span>
      </div>
    </div>
  );
}
