import type { Metadata } from "next";
import "./globals.css";
import Nav from "./nav";
import Particle from "./components/background";

export const metadata: Metadata = {
  metadataBase: new URL('https://beastcodz.github.io'),
title: "BeastCodZ | Code Alchemist & Tinkerer of the Stack",
description: "Tinkering with tech, breaking the rules, and building what matters. BeastCodZ isn't a label—it's a definition. Code meets chaos and every byte tells a story.",
keywords: "BeastCodZ, Portfolio, Electron, Arch Linux, Projects, Offline Authenticator, TOTP, WinKey, The Dev, Full Stack Developer, Editor, Typist, Student",
authors: [
  {
    name: "BeastCodZ",
    url: "https://github.com/BeastCodZ",
  }
],
openGraph: {
  title: 'BeastCodZ | Code Alchemist & Tinkerer of the Stack',
  description: "Tinkering with tech, breaking the rules, and building what matters. BeastCodZ isn't a label—it's a definition. Code meets chaos and every byte tells a story.",
  images: ["/image.jpg"],
  type: 'website',
},
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">

        <div className="absolute inset-0 -z-10">
          <Particle />
        </div>

        <main className="relative flex flex-col md:flex-row items-center md:items-stretch z-10 min-h-screen">          
          <div className="w-full md:w-1/4 p-4 flex justify-center md:justify-end items-center md:items-center">
            <Nav />
          </div>
          <div className="w-full md:w-3/4 flex justify-center items-center p-4">

            <div className="w-full max-w-3xl flex flex-col items-center justify-center h-full">
              {children}
            </div>
          </div>
        </main>

      </body>
    </html>
  );
}