import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Cpu,
  GitBranch,  
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Fallen | BeastCodZ",
  description:
    "Fallen is a custom ecosystem connecting Arch Linux and Android through seamless integration, authentication, and developer-focused tooling.",
  openGraph: {
    title: "Fallen | BeastCodZ",
    description:
      "A custom ecosystem connecting Arch Linux and Android through secure and developer-focused tools.",
    url: "https://beastcodz.github.io/projects/Fallen",
    images: ["/image.webp"],
  },
};

export default function Fallen() {
  return (
    <>
      <Link
        href="/#projects"
        className="
    p-6
    inline-flex
    items-center
    gap-2
    text-sm
    text-(--text-secondary)
    hover:text-(--accent-soft)
    transition-colors
  "
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>
      <div className="w-full flex flex-row justify-center items-center p-4">
        <div className="w-full max-w-3xl flex flex-col items-center justify-center min-h-screen">
          <div
            className="
        w-full max-w-4xl mx-auto
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
            {/* Hero */}

            <div className="mb-8 flex items-start gap-3">
              <Image
                src="/projects/Fallen/arch.webp"
                width={20}
                height={20}
                alt="Arch Linux"
                className="text-(--primary) shrink-0 mt-1"
              />

              <div>
                <h1
                  className="
              text-xl
              md:text-2xl
              font-semibold
              text-(--primary)
            "
                >
                  Project Fallen
                </h1>

                <p
                  className="
              mt-2
              text-sm
              text-(--text-secondary)
            "
                >
                  A custom ecosystem designed to bridge Arch Linux and Android
                  through seamless connectivity, authentication, and
                  developer-focused tools.
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent)
              "
                  >
                    Active Development
                  </span>

                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent-soft)
              "
                  >
                    Linux
                  </span>

                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent-soft)
              "
                  >
                    C/C++
                  </span>
                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent-soft)
              "
                  >
                    Python
                  </span>
                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent-soft)
              "
                  >
                    Rust
                  </span>
                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent-soft)
              "
                  >
                    Tauri
                  </span>
                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent-soft)
              "
                  >
                    Bash
                  </span>
                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent-soft)
              "
                  >
                    Shell Scripting
                  </span>
                  <span
                    className="
                rounded-full
                border border-(--border)
                px-2 py-0.5
                text-(--accent-soft)
              "
                  >
                    CSS
                  </span>
                </div>
              </div>
            </div>

            {/* Origin Story */}

            <div
              className="
          rounded-3xl
          border border-(--border)
          bg-(--surface)
          p-4
        "
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={18} className="text-(--accent-soft)" />

                <h2
                  className="
              text-base
              font-semibold
              text-(--primary)
            "
                >
                  Origin
                </h2>
              </div>

              <p
                className="
    text-sm
    leading-6
    text-(--text-secondary)
  "
              >
                It all began with a simple question. I had Kali Linux installed
                alongside Windows, yet I rarely used it. That led me to ask:
                <span className="font-semibold"> Why not?</span>
                <br />
                <br />
                The answer was surprisingly simple. I was comfortable with
                Windows. Every time I switched to Linux, small tasks felt
                unfamiliar. File management behaved differently, permissions
                required more thought, and many workflows I had taken for
                granted suddenly demanded a deeper understanding of the system.
                <br />
                <br />
                Instead of returning to what was familiar, I decided to step
                outside my comfort zone and build an environment I would
                genuinely enjoy using every day. That decision became the
                foundation of FallenOS.
                <br />
                <br />
                Arch Linux was chosen as the base because it provided complete
                control and encouraged learning from the ground up. I
                deliberately avoided preconfigured themes and ready-made
                configurations. The goal was never to recreate someone
                else&apos;s setup, it was to build a system tailored to my own
                workflow, preferences, and ideas.
                <br />
                <br />
                Over time, FallenOS grew into something larger. What started as
                a personalized Linux environment evolved into a broader vision:
                an ecosystem of tools and services designed to work together.
                This expansion led to projects such as <u>FallenCore</u>,{" "}
                <u>FallenKey</u>, and <u>FallenLink</u>, each exploring
                different technologies, programming languages, and approaches to
                software development.
                <br />
                <br />
                Today, Fallen is more than a Linux setup. It is an ongoing
                journey of learning, experimentation, and building the tools I
                wish existed.
              </p>
              <br />
              <p
                className="
    text-sm
    leading-6
    text-(--text-secondary)
  "
              >
                As for the name, &quot;Fallen&quot; was inspired by the idea of
                a knight serving their kingdom with unwavering loyalty and
                dedication. Not for recognition or reward, but because it is
                their duty to protect, support, and remain dependable no matter
                the challenge.
                <br />
                <br />
                That philosophy became a guiding principle for the project
                itself. Fallen is intended to be an ecosystem that quietly does
                its job well—reliable, dependable, and always working in the
                background to support its user. Just as a knight serves their
                kingdom, Fallen is designed to serve its user, being their loyal
                knight.
              </p>
            </div>

            {/* Vision */}

            <div
              className="
          mt-4
          rounded-3xl
          border border-(--border)
          bg-(--surface)
          p-4
        "
            >
              <h2
                className="
            mb-3
            text-base
            font-semibold
            text-(--primary)
          "
              >
                Vision
              </h2>

              <p
                className="
            text-sm
            leading-6
            text-(--text-secondary)
          "
              >
                Existing solutions often rely on proprietary ecosystems, cloud
                dependencies, or fragmented tooling. Fallen aims to provide an
                alternative focused on openness, user control, privacy, and deep
                integration between Linux and Android.
              </p>
            </div>

            {/* Progress */}

            <div
              className="
          mt-4
          rounded-3xl
          border border-(--border)
          bg-(--surface)
          p-4
        "
            >
              <h2
                className="
            mb-4
            text-base
            font-semibold
            text-(--primary)
          "
              >
                Currently in Progress
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                <div
                  className="
              rounded-xl
              border border-(--border)
              p-3
            "
                >
                  <h3 className="text-sm font-semibold text-(--primary)">
                    Ecosystem Foundation
                  </h3>

                  <p className="mt-2 text-xs text-(--text-secondary)">
                    Architecture and project direction established.
                  </p>
                </div>

                <div
                  className="
              rounded-xl
              border border-(--border)
              p-3
            "
                >
                  <h3 className="text-sm font-semibold text-(--primary)">
                    Authentication
                  </h3>

                  <p className="mt-2 text-xs text-(--text-secondary)">
                    WinKey completed, FallenKey rewrite underway.
                  </p>
                </div>

                <div
                  className="
              rounded-xl
              border border-(--border)
              p-3
            "
                >
                  <h3 className="text-sm font-semibold text-(--primary)">
                    Desktop Integration
                  </h3>

                  <p className="mt-2 text-xs text-(--text-secondary)">
                    FallenCore currently in development.
                  </p>
                </div>

                <div
                  className="
              rounded-xl
              border border-(--border)
              p-3
            "
                >
                  <h3 className="text-sm font-semibold text-(--primary)">
                    Mobile Integration
                  </h3>

                  <p className="mt-2 text-xs text-(--text-secondary)">
                    Planned through FallenLink.
                  </p>
                </div>
              </div>
            </div>

            {/* Components */}

            <div
              className="
          mt-4
          rounded-3xl
          border border-(--border)
          bg-(--surface)
          p-4
        "
            >
              <div className="flex items-center gap-2 mb-4">
                <GitBranch size={18} className="text-(--accent-soft)" />

                <h2
                  className="
              text-base
              font-semibold
              text-(--primary)
            "
                >
                  Ecosystem Components
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-(--primary)">
                    FallenOS
                  </h3>

                  <p className="text-xs text-(--accent-soft)">
                    Arch Linux • Hyprland • Pipewire • Waybar • Thunar •
                    Linux-Zen • Pipewire
                  </p>

                  <p className="mt-1 text-sm text-(--text-secondary)">
                    Customized Linux environment focused on productivity,
                    performance, and workflow optimization.
                  </p>
                </div>

                <div className="border-t border-(--border) pt-4">
                  <h3 className="font-semibold text-(--primary)">
                    FallenCore
                  </h3>

                  <p className="text-xs text-(--accent-soft)">
                    C++ • Qt6 • Rust
                  </p>

                  <p className="mt-1 text-sm text-(--text-secondary)">
                    Central desktop control center responsible for ecosystem
                    management and device integration.
                  </p>
                </div>

                <div className="border-t border-(--border) pt-4">
                  <h3 className="font-semibold text-(--primary)">
                    FallenLink
                  </h3>

                  <p className="text-xs text-(--accent-soft)">
                    Rust • Android (Yet to be implemented)
                  </p>

                  <p className="mt-1 text-sm text-(--text-secondary)">
                    Cross-device communication layer enabling file transfer,
                    clipboard sync, and device interaction.
                  </p>
                </div>

                <div className="border-t border-(--border) pt-4">
                  <h3 className="font-semibold text-(--primary)">
                    FallenKey
                  </h3>

                  <p className="text-xs text-(--accent-soft)">
                    Tauri • Rust • TypeScript
                  </p>

                  <p className="mt-1 text-sm text-(--text-secondary)">
                    Secure authenticator focused on privacy, reliability, and
                    ecosystem integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Roadmap */}

            <div
              className="
          mt-4
          rounded-3xl
          border border-(--border)
          bg-(--surface)
          p-4
        "
            >
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={18} className="text-(--accent-soft)" />

                <h2
                  className="
              text-base
              font-semibold
              text-(--primary)
            "
                >
                  Roadmap
                </h2>
              </div>

              <div className="space-y-6 text-sm">
                {/* FallenOS */}

                <div>
                  <h3 className="font-semibold text-(--primary)">
                    FallenOS
                  </h3>

                  <div className="mt-2 space-y-2">
                    <div className="text-(--text-secondary)">
                      ✓ v1.0 — Foundation
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Initial Arch Linux setup, Hyprland configuration, custom
                      Waybar, theming, workflow optimization.
                    </div>

                    <div className="text-(--text-secondary)">
                      ◉ v2.0 — Workflow Expansion
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Custom SDDM lock screen, custom widgets, GPU screen
                      recorder integration, embedded timer, Spotify controls in
                      Waybar.
                    </div>

                    <div className="text-(--text-secondary)">
                      ○ v3.0 — Ecosystem Integration
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Thunar Customization, NetworkManager Wrapper , FallenCore
                      integration, FallenKey integration.
                    </div>

                    <div className="text-(--text-secondary)">
                      ○ v4.0 — Future Expansion
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      To be decided.
                    </div>
                  </div>
                </div>

                {/* FallenKey */}

                <div className="border-t border-(--border) pt-4">
                  <h3 className="font-semibold text-(--primary)">
                    FallenKey
                  </h3>

                  <div className="mt-2 space-y-2">
                    <div className="text-(--text-secondary)">
                      ✓ v0.1 — Core Authentication
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Secure offline TOTP generation and account management.
                    </div>

                    <div className="text-(--text-secondary)">
                      ○ v0.4 — Device Synchronization
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Synchronized encrypted database between desktop and
                      Android.
                    </div>

                    <div className="text-(--text-secondary)">
                      ○ v0.7 — Smart Autofill
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Keyboard integration for automatic OTP entry.
                    </div>
                  </div>
                </div>

                {/* FallenCore */}

                <div className="border-t border-(--border) pt-4">
                  <h3 className="font-semibold text-(--primary)">
                    FallenCore
                  </h3>

                  <div className="mt-2 space-y-2">
                    <div className="text-(--text-secondary)">
                      ◉ v0.1 — Core Foundation
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Qt-based desktop interface and QuickShare implementation.
                    </div>

                    <div className="text-(--text-secondary)">
                      ○ v0.2 — Service Integration
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Connectivity between UI layer and QuickShare backend.
                    </div>
                  </div>
                </div>

                {/* Future */}

                <div className="border-t border-(--border) pt-4">
                  <h3 className="font-semibold text-(--primary)">
                    Future Components
                  </h3>

                  <div className="mt-2 space-y-2">
                    <div className="text-(--text-secondary)">
                      ○ FallenLink
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Cross-device communication layer for Android and Linux
                      integration.
                    </div>

                    <div className="text-(--text-secondary)">
                      ○ FallenKnight
                    </div>

                    <div className="ml-4 text-xs text-(--muted)">
                      Local AI assistant for the Fallen ecosystem.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}

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
                Fallen is not a product. It is an ongoing attempt to build the
                ecosystem I wish existed.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
