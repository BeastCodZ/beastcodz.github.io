"use client";

import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="/#contact"
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className="inline-flex text-xs text-(--accent-soft) hover:text-(--text-primary) transition-colors"
    >
      Convinced yet? Reach out →
    </Link>
  );
}