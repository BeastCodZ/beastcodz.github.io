import type { Metadata } from "next";
import "./globals.css";
import Particle from "./components/background";
import {JetBrains_Mono} from "next/font/google"

const jetbrain = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://beastcodz.github.io"),

  title: "BeastCodZ | Full Stack Developer | Software Engineer",

  description:
    "I am a Computer Engineering student and software developer based in India, specializing in full-stack development, Linux systems, and developer-focused software. I enjoy building tools, exploring systems, and turning ideas into elegant solutions.",

  keywords: [
    "BeastCodZ",
    "Portfolio",
    "India",
    "Thapar",
    "University",
    "Student",
    "Internship",
    "Computer Scientist",
    "Fallen",
    "FallenOS",
    "FallenCore",
    "FallenKey",
    "UniLost",
    "Full Stack Developer",
    "Systems Developer",
    "Software Engineer",
    "Linux",
    "Arch Linux",
    "Hyprland",
    "Tauri",
    "Rust",
    "Qt",
    "C++",
    "Next.js",
    "Computer Engineering",
  ],

  authors: [
    {
      name: "BeastCodZ",
      url: "https://github.com/BeastCodZ",
    },
  ],

  verification: {
    google: "No1F5WTfQe4-jDTcQpVzZWVuhEfw7jvtDd1d7j1eEf0",
  },

  twitter: {
    card: "summary_large_image",
    title: "BeastCodZ | Full Stack Developer | Software Engineer",
    description:
      "Building the Fallen ecosystem, desktop software, Linux workflows, and developer-focused tools.",
    images: ["/image.jpg"],
  },

  alternates: {
    canonical: "https://beastcodz.github.io",
  },

  openGraph: {
    title: "BeastCodZ | Systems Developer & Builder",
    description:
      "Computer Engineering student building the Fallen ecosystem, desktop applications, Linux tooling, and developer-focused software.",
    url: "https://beastcodz.github.io",
    type: "website",
    images: ["/image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jetbrain.className} antialiased`}>
        <>
          {/* Gradient */}
          <div
            className="fixed inset-0 -z-20"
            style={{
              background: `
        radial-gradient(
          circle at top right,
          rgba(255,68,68,0.2),
          transparent 35%
        ),
        radial-gradient(
          circle at bottom left,
          rgba(255,68,68,0.15),
          transparent 35%
        ),
        linear-gradient(
          180deg,
          #090606 0%,
          #110707 100%
        )
      `,
            }}
          />

          {/* Graph */}
          <Particle />
        </>

        <main className="relative flex flex-col items-center md:items-stretch z-10 min-h-dvh">
          {children}
        </main>
      </body>
    </html>
  );
}
