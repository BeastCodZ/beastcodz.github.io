import { Linkedin } from "@thesvg/react";
import {  
  Mail,
  AlertTriangle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";


export default function Contact() {
  return (
    <div
      className="
        w-full max-w-3xl mx-auto
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

      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Mail
            size={24}
            className="text-[var(--text-primary)]"
          />

          <h2
            className="
              text-xl
              font-semibold
              text-[var(--text-primary)]
            "
          >
            Contact
          </h2>
        </div>

        <p
          className="
            mt-2
            text-sm
            text-[var(--text-secondary)]
          "
        >
          Open to collaborations, internships,
          development projects, and interesting
          technical discussions.
        </p>
      </div>

      {/* Contact Methods */}

      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="mailto:manan19340@gmail.com"
          className="
            flex items-center gap-3
            text-sm
            text-[var(--text-secondary)]
            hover:text-[var(--text-primary)]
            transition-colors
          "
        >
          <Mail size={16} />
          beastcodz1934@gmail.com
        </a>

        <a
          href="https://github.com/beastcodz"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            text-sm
            text-[var(--text-secondary)]
            hover:text-[var(--text-primary)]
            transition-colors
          "
        >
          <FaGithub width={16} height={16} />
          github.com/beastcodz
        </a>

        <a
          href="https://linkedin.com/in/beastcodz"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            text-sm
            text-[var(--text-secondary)]
            hover:text-[var(--text-primary)]
            transition-colors
          "
        >
          <Linkedin width={16} height={16} className="text-[#0072B1]" />
          linkedin.com/in/beastcodz
        </a>
      </div>

      {/* Availability */}

      <div
        className="
          mt-8
          border-t border-[var(--border)]
          pt-4
        "
      >
        <h3
          className="
            mb-2
            text-sm
            font-semibold
            text-[var(--text-primary)]
          "
        >
          Availability
        </h3>

        <p
          className="
            text-xs
            leading-5
            text-[var(--text-secondary)]
          "
        >
          Currently focused on system tooling,
          Linux customization, full-stack
          development, and building the
          FallenOS ecosystem.
        </p>
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
          Response time varies between a few
          hours and one debugging session.
        </span>
      </div>
    </div>
  );
}