import {
  LockIcon,
  Clock,
  AlertTriangle,
  QrCode,
  Zap,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export const metadata: Metadata = {
  title: "WinKey | BeastCodZ",
  description:
    "WinKey was a lightweight desktop authenticator built with Electron. It later evolved into FallenKey, a complete redesign focused on performance, security, and cross-device integration.",
  openGraph: {
    title: "WinKey | BeastCodZ",
    description: "Legacy desktop authenticator and predecessor to FallenKey.",
    url: "https://beastcodz.github.io/projects/WinKey",
    images: ["/projects/WinKey/winkey.png"],
  },
};

export default function WinKey() {
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
    text-[var(--text-secondary)]
    hover:text-[var(--accent-soft)]
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
            <LockIcon
              size={24}
              className="text-[var(--text-primary)] shrink-0 mt-1"
            />

            <div>
              <h1
                className="
              text-xl
              md:text-2xl
              font-semibold
              text-[var(--text-primary)]
            "
              >
                WinKey
              </h1>

              <p
                className="
              mt-2
              text-sm
              text-[var(--text-secondary)]
            "
              >
                Lightweight desktop authenticator that served as the foundation
                for FallenKey.
              </p>

              <div className="mt-3 flex items-center gap-2 text-[10px]">
                <span
                  className="
                rounded-full
                border border-[var(--border)]
                px-2 py-0.5
                text-[var(--accent)]
              "
                >
                  Archived
                </span>

                <Link
                  href="/projects/Fallen"
                  className="
    flex items-center gap-1
    text-[var(--text-secondary)]
    hover:text-[var(--accent-soft)]
    transition-colors
  "
                >
                  <ExternalLink size={12} />
                  <span>Successor: FallenKey</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Overview */}

          <div
            className="
          rounded-3xl
          border border-[var(--border)]
          bg-[var(--surface)]
          backdrop-blur-md
          p-4
        "
          >
            <h2
              className="
            mb-3
            text-base
            font-semibold
            text-[var(--text-primary)]
          "
            >
              Overview
            </h2>

            <p
              className="
            text-sm
            leading-6
            text-[var(--text-secondary)]
          "
            >
              WinKey was a desktop authenticator built to provide a clean and
              intuitive experience for managing two-factor authentication.
              Designed around simplicity and reliability, it focused on secure
              offline TOTP generation without unnecessary complexity.
            </p>
            <h2
              className="
            mt-3
            text-base
            font-semibold
            text-[var(--text-primary)]
          "
            >
              Limitations
            </h2>
            <div
              className="
    mt-4
    grid
    grid-cols-1
    md:grid-cols-2
    gap-2
  "
            >
              <div
                className="
      rounded-xl
      border border-[var(--border)]
      p-3
      text-sm
      text-[var(--text-secondary)]
    "
              >
                Huge bundle size due to Chromium
              </div>

              <div
                className="
      rounded-xl
      border border-[var(--border)]
      p-3
      text-sm
      text-[var(--text-secondary)]
    "
              >
                Limited platform support
              </div>

              <div
                className="
      rounded-xl
      border border-[var(--border)]
      p-3
      text-sm
      text-[var(--text-secondary)]
    "
              >
                Complexity in maintenance and updates
              </div>

              <div
                className="
      rounded-xl
      border border-[var(--border)]
      p-3
      text-sm
      text-[var(--text-secondary)]
    "
              >
                Resource-intensive operation
              </div>
            </div>
          </div>

          {/* Features */}

          <div
            className="
          mt-4
          rounded-3xl
          border border-[var(--border)]
          bg-[var(--surface)]
          backdrop-blur-md
          p-4
        "
          >
            <h2
              className="
            mb-4
            text-base
            font-semibold
            text-[var(--text-primary)]
          "
            >
              Key Features
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[var(--accent-soft)]" />
                <span className="text-sm text-[var(--text-secondary)]">
                  RFC 6238 compliant TOTP generation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Zap size={18} className="text-[var(--accent-soft)]" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Instant offline authentication
                </span>
              </div>

              <div className="flex items-center gap-3">
                <QrCode size={18} className="text-[var(--accent-soft)]" />
                <span className="text-sm text-[var(--text-secondary)]">
                  QR code onboarding workflow
                </span>
              </div>

              <div className="flex items-center gap-3">
                <LockIcon size={18} className="text-[var(--accent-soft)]" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Local-first security model
                </span>
              </div>
            </div>
          </div>

          {/* Screenshots */}

          <div
            className="
          mt-4
          rounded-3xl
          border border-[var(--border)]
          bg-[var(--surface)]
          backdrop-blur-md
          p-4
        "
          >
            <h2
              className="
            mb-4
            text-base
            font-semibold
            text-[var(--text-primary)]
          "
            >
              Screenshots
            </h2>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  file: "1",
                  label: "Login",
                },
                {
                  file: "2",
                  label: "Dashboard",
                },
                {
                  file: "3",
                  label: "Add Token",
                },
                {
                  file: "4",
                  label: "Sync",
                },
              ].map((image) => (
                <a
                  key={image.file}
                  href={`/projects/WinKey/${image.file}.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                group
                overflow-hidden
                rounded-2xl
                border border-[var(--border)]
              "
                >
                  <div className="relative aspect-video">
                    <Image
                      src={`/projects/WinKey/${image.file}.png`}
                      alt={image.label}
                      fill
                      className="
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                    />
                  </div>

                  <div
                    className="
                  border-t border-[var(--border)]
                  px-3 py-2
                  text-xs
                  text-[var(--text-secondary)]
                "
                  >
                    {image.label}
                  </div>
                </a>
              ))}
            </div>
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
              Legacy project preserved for historical reference. Development
              continues through FallenKey.
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
