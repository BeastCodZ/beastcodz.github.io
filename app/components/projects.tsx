import {
  AlertTriangle,
  ExternalLink,
  FolderGit2,
} from "lucide-react";
import Image from "next/image"

export default function Projects() {
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
      {/* Header */}

      <div className="mb-8 flex items-start gap-3">
        <FolderGit2
          size={24}
          className="text-[var(--text-primary)] shrink-0"
        />

        <div>
          <h2
            className="
              text-xl
              font-semibold
              text-[var(--text-primary)]
            "
          >
            Projects
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-[var(--text-secondary)]
            "
          >
            Practical builds, experiments, and tools
            created to solve real problems.
          </p>
        </div>
      </div>

      {/* Project List */}

      <div className="space-y-4">
        {/* FallenKey */}

        <a
          href="/projects/WinKey"
          className="
            block
            rounded-3xl
            border border-[var(--border)]
            bg-[var(--surface)]
            backdrop-blur-md
            p-4
            transition-colors
            hover:border-[var(--accent-soft)]
          "
        >
          <div className="flex items-start gap-3">
            <Image src="/projects/WinKey/winkey.png"
              width={27} height={27} alt="WinKey"
              className="text-[var(--text-primary)] shrink-0 mt-1"
            />

            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h3
                  className="
                    font-semibold
                    text-[var(--text-primary)]
                  "
                >
                  WinKey
                </h3>

                <ExternalLink
                  size={16}
                  className="text-[var(--accent-soft)]"
                />
              </div>

              <p
  className="
    mt-1
    text-[10px]
    text-[var(--accent)]
  "
>
  [Archived]{" "}
  <span className="text-[var(--accent-soft)]">
    Successor: FallenKey
  </span>
</p>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-[var(--text-secondary)]
                "
              >
                A desktop authenticator featuring TOTP generation, backup and restore functionality, Google Drive synchronization, and a refined user experience. Designed to make managing two-factor authentication effortless while keeping security and reliability at the core.              </p>
            </div>
          </div>
        </a>

                <a
          href="/projects/Fallen"
          className="
            block
            rounded-3xl
            border border-[var(--border)]
            bg-[var(--surface)]
            backdrop-blur-md
            p-4
            transition-colors
            hover:border-[var(--accent-soft)]
          "
        >
          <div className="flex items-start gap-3">
            <Image src="/projects/Fallen/arch.png"
              width={20}
              height={20}
              alt="Arch Linux"
              className="text-[var(--text-primary)] shrink-0 mt-1"
            />

            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h3
                  className="
                    font-semibold
                    text-[var(--text-primary)]
                  "
                >
                  Project Fallen
                </h3>

                <ExternalLink
                  size={16}
                  className="text-[var(--accent-soft)]"
                />
              </div>

              <p
                className="
                  mt-1
                  text-[10px]
                  text-[var(--accent-soft)]
                "
              >
                Ongoing Project
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-[var(--text-secondary)]
                "
              >
                Fallen is a custom ecosystem that connects Arch Linux and Android into a seamless platform. Built around secure device integration, an integrated two-factor authenticator, and developer-focused utilities, it aims to simplify workflows while maintaining full user control, privacy, and performance.
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Footer */}

      <div
        className="
          mt-6 pt-4
          border-t border-[var(--border)]
          flex items-center gap-2
          text-xs
          text-[var(--accent)]
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