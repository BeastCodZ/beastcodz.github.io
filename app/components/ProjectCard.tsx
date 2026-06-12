"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "../data/projects";

export default function ProjectCard({
  title,
  href,
  image,
  imageAlt,
  status,
  statusColor = "text-[var(--accent-soft)]",
  description,
}: Project) {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.99,
      }}
      transition={{
        duration: 0.15,
      }}
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
        <Image
          src={image}
          width={28}
          height={28}
          alt={imageAlt}
          className="shrink-0 mt-1 rounded-md"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3
              className="
                font-semibold
                text-[var(--text-primary)]
              "
            >
              {title}
            </h3>

            <motion.div
              whileHover={{
                x: 3,
              }}
              transition={{
                duration: 0.15,
              }}
            >
              <ExternalLink
                size={16}
                className="text-[var(--accent-soft)]"
              />
            </motion.div>
          </div>

          <p
            className={`
              mt-1
              text-[10px]
              ${statusColor}
            `}
          >
            {status}
          </p>

          <p
            className="
              mt-2
              text-xs
              leading-5
              text-[var(--text-secondary)]
            "
          >
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}