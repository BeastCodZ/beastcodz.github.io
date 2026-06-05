import type { Metadata } from "next";
import "./globals.css";
import Particle from "./components/background";
import {JetBrains_Mono} from "next/font/google"

const jetbrain = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://beastcodz.github.io"),
  title: "BeastCodZ | Full Stack Developer & Systems Developer",
  description:
    "Tinkering with tech, breaking the rules, and building what matters. Code meets chaos and every byte tells a story. Because even mediocrity has standards.",
  keywords:
    "BeastCodZ, Portfolio, Electron, Arch Linux, Projects, Offline Authenticator, TOTP, WinKey, The Dev, Full Stack Developer, Editor, Typist, Student",
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
    title: "BeastCodZ | Systems Developer",
    description: "Building tools, Linux workflows, and desktop apps.",
    images: ["/image.jpg"],
  },
  alternates: {
    canonical: "https://beastcodz.github.io",
  },
  openGraph: {
    title: "BeastCodZ | Code Alchemist & Tinkerer of the Stack",
    description:
      "Tinkering with tech, breaking the rules, and building what matters. Code meets chaos and every byte tells a story. Because even mediocrity has standards.",
    images: ["/image.jpg"],
    type: "website",
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
