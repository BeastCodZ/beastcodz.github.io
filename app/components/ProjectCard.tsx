import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "../data/projects";

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
    <a
      href={href}
      className="
        block
        rounded-3xl
        border border-(--border)
        bg-(--surface)
        backdrop-blur-md
        p-4
        transition-colors
        hover:border-(--accent-soft)
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
                text-(--text-primary)
              "
            >
              {title}
            </h3>

            <ExternalLink size={16} className="text-(--accent-soft)" />
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
              text-(--text-secondary)
            "
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
