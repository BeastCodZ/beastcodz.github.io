import type { Metadata } from "next";
import "./globals.css";
// import Particle from "./components/background";
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
    description: "I build software, tweak systems, and occasionally break both. If something catches my attention, chances are I'll end up learning it, building it, or overengineering it. Currently pursuing my bachelor's degree while strengthening my computer science fundamentals.",
    images: ["/opengraph.png"],
  },

  alternates: {
    canonical: "https://beastcodz.github.io",
  },

  openGraph: {
    title: "BeastCodZ | Full Stack Developer | Software Engineer",
    description: "I build software, tweak systems, and occasionally break both. If something catches my attention, chances are I'll end up learning it, building it, or overengineering it. Currently pursuing my bachelor's degree while strengthening my computer science fundamentals.",
    url: "https://beastcodz.github.io",
    type: "website",
    images: ["/opengraph.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jetbrain.className} antialiased`}>
        <div className="watermark">
  {Array.from({ length: 150 }).map((_, i) => (
    <span key={i}>BEASTCODZ</span>
  ))}
</div>
        <main className="relative flex flex-col items-center md:items-stretch z-10 min-h-dvh">
          {children}
        </main>
      </body>
    </html>
  );
}
