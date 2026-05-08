import type { Metadata } from "next";
import Certificate from "../components/certificate";
export const metadata: Metadata = {
  title: "Certifications | BeastCodZ",
  description:
    "Technical certifications and achievements in software development, programming, and systems-related technologies.",
  openGraph: {
    title: "Certifications | BeastCodZ",
    description:
      "Verified learning achievements and technical certifications.",
    url: "https://beastcodz.github.io/certifications"
  },
};
export default function Certifications() {
  return (
    <Certificate/>
  )}