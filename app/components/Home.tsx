"use client";

import { AlertTriangle } from "lucide-react";
import ContactButton from "./contactb";
import RecentActivityCard from "./Recentactivitycard";
import Me from "./Me";

export default function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-3xl bg-(--surface) backdrop-blur-xs border-2 border-(--border) bg-opacity-50 p-4 md:p-8 shadow-lg">

      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <Me />

        <p className="max-w-xl text-xs md:text-sm text-(--text-secondary)">
          Building software that matters and exploring the unexplored.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4">

        <div className="rounded-3xl border border-(--border) bg-(--surface) backdrop-blur-md p-6">

          <div className="mb-3">
            <span className="text-xs uppercase tracking-widest text-(--accent-soft)">
              About
            </span>
          </div>

          <div className="space-y-4 text-sm text-(--text-secondary)">

            <p>
              I&apos;m a{" "}
              <span className="text-(--accent-soft) italic font-semibold">
                developer
              </span>{" "}
              with a knack for computers.
            </p>

            <p>
              Whether it&apos;s web development, Linux, networking, embedded
              systems, or something completely unrelated, chances are
              I&apos;ll end up poking at it eventually.
            </p>

            <p>
              I don&apos;t build software only because I want a career.
              I build things because creating something from nothing is fun,
              and chasing{" "}
              <span className="text-(--accent-soft) italic font-semibold">
                weird
              </span>{" "}
              ideas often leads to the most interesting results.
            </p>

            <div className="pt-2">
              <p className="text-xs text-(--text-border)">
                The best ideas usually come from combining things that were
                never supposed to fit together.
              </p>
            </div>

          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <ContactButton />
          </div>

        </div>

        <div className="rounded-3xl border border-(--border) bg-(--surface) backdrop-blur-md p-4">
          <RecentActivityCard />
        </div>

      </div>

      <div className="mt-6 pt-4 border-t border-(--border) flex items-center gap-2 text-xs text-(--accent)">
        <AlertTriangle size={16} />

        <span>
          Warning: May disappear into a random project for 12 hours and emerge
          with either a prototype or a completely broken system and ton of knowledge.
        </span>
      </div>

    </div>
  );
}