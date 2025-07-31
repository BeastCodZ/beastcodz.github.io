import { Mail, Send, AlertCircle, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1">
      <div className="mb-8 flex flex-col items-start gap-4">
        <Mail size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">
            &gt; ping → <span className="text-[#FF4444]">BeastCodZ</span>
          </h3>
          <p className="text-sm mt-1">
            Interested to talk? I’m all ears (and fingers). Reach out – I don’t
            ghost (unless it’s system updates).
          </p>
          <p className="text-sm mt-2 text-[#00ffccaa]">
            Whether it’s freelance work, collaboration, or nerd banter, my inbox
            doesn’t bite.
          </p>

          <div className="mt-4 flex flex-col items-center flex-wrap gap-2">
            <a
              href="mailto:beastcodz1934@gmail.com"
              className="inline-flex items-center gap-2 text-[#FF4444] hover:underline transition"
            >
              <Send size={16} /> beastcodz1934@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/beastcodz/"
              className="inline-flex items-center gap-2 text-[#FF4444] hover:underline transition"
            >
              <Linkedin size={16} /> beastcodz
            </a>
            <a
              href="https://github.com/beastcodz"
              className="inline-flex items-center gap-2 text-[#FF4444] hover:underline transition"
            >
              <Github size={16} /> beastcodz
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-[#FF4444] flex items-center gap-2">
        <AlertCircle size={16} />
        <span>Responses may vary depending on person and Wi-Fi stability.</span>
      </div>
    </div>
  );
}
