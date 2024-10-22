import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BeastCodZ - Full Stack Developer",
  description: "Full-stack developer specializing in creating intelligent, scalable solutions that blend creativity with code.",
  keywords: "BeastCodZ, Full Stack Developer, Web Development, JavaScript, React, Node.js, Next.js, Scalable Solutions, Creative Coding",
  googleSiteVerification: "No1F5WTfQe4-jDTcQpVzZWVuhEfw7jvtDd1d7j1eEf0",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
