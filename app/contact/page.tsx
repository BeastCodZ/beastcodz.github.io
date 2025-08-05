import { Mail, Send, AlertCircle, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <Mail size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">
            &gt; ping → <span className="text-[#FF4444]">BeastCodZ</span>
          </h3>
          <p className="text-sm mt-1">
            Got a project, collaboration, or just want to talk tech? I’m open to hearing it.
          </p>
          <p className="text-sm mt-2 text-[#00ffccaa]">
            I reply fast unless the Wi-Fi gives up or I’m working on a project.
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

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-[#FF4444] flex items-center gap-2">
        <AlertCircle size={16} />
        <span>Ping received. Response time depends on caffeine levels.</span>
      </div>
    </div>
  );
}
