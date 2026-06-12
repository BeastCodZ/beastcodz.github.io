import { Gmail, Linkedin, Pdf } from "@thesvg/react";
import { AlertTriangle, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="
        w-full max-w-3xl mx-auto
        rounded-3xl
        bg-(--surface)
        backdrop-blur-xs
        border-2
        border-(--border)
        bg-opacity-50
        p-4 md:p-8
        shadow-lg
      "
    >
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-(--accent)" />

          <h2
            className="
              text-xl
              font-semibold
              text-(--text-primary)
            "
          >
            Contact
          </h2>
        </div>

        <p
          className="
            mt-2
            text-sm
            text-(--text-secondary)
          "
        >
          Open to collaborations, internships, development projects, and
          interesting technical discussions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="mailto:manan19340@gmail.com"
          className="
            flex items-center gap-3
            text-sm
            text-(--text-secondary)
            hover:text-(--text-primary)
            transition-colors
          "
        >
          <Gmail width={16} height={16} />
          manan19340@gmail.com
        </a>

        <a
          href="https://github.com/beastcodz"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            text-sm
            text-(--text-secondary)
            hover:text-(--text-primary)
            transition-colors
          "
        >
          <FaGithub width={16} height={16} />
          github.com/BeastCodZ
        </a>

        <a
          href="https://linkedin.com/in/beastcodz"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            text-sm
            text-(--text-secondary)
            hover:text-(--text-primary)
            transition-colors
          "
        >
          <Linkedin width={16} height={16} className="text-[#0072B1]" />
          linkedin.com/in/beastcodz
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-3
            text-sm
            text-(--text-secondary)
            hover:text-(--text-primary)
            transition-colors
          "
        >
          <Pdf width={16} height={16} className="text-[#0072B1]" />
          resume.pdf
        </a>
      </div>

      <div
        className="
          mt-8
          border-t border-(--border)
          pt-4
        "
      >
        <h3
          className="
            mb-2
            text-sm
            font-semibold
            text-(--text-primary)
          "
        >
          Looking For
        </h3>

        <p className="text-xs leading-5 text-(--text-secondary)">
  Internships, collaborations, and ambitious ideas.
  If you&apos;ve got one, let&apos;s talk.
</p>
      </div>

      <div
        className="
          mt-6 pt-4
          border-t border-(--border)
          flex items-center gap-2
          text-xs
          text-(--accent)
        "
      >
        <AlertTriangle size={18} />

        <span>
          Response time varies between a few hours and one debugging session.
        </span>
      </div>
    </div>
  );
}
