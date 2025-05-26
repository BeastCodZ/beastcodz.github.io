import { AlertTriangle, ExternalLink, FolderGit2, Laptop2, LockIcon } from "lucide-react";

export default function Projects() {
  return (
    <div className="h-auto max-w-4xl mx-auto flex flex-col bg-[#146d5b07] text-[#00FFCC] rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out">

      
        <div className="flex-1 overflow-y-auto p-6 md:p-10 snap-y snap-mandatory">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start gap-4">
          <FolderGit2 size={32} className="min-w-[32px]" />
          <div>
            <h3 className="text-lg font-semibold">&gt; projects → <span className="text-[#FF4444]">BeastCodZ</span></h3>
            <p className="text-sm mt-1 break-words">Built with efforts, powered by choco milk and a bit of madness.</p>
          </div>
        </div>

        <a
          href='/projects/WinKey'
          className="snap-start flex flex-col items-start gap-4 hover:bg-[#00ffcc11] rounded-xl transition-colors duration-75 focus:outline-none focus:ring-2 focus:ring-[#00FFCC] cursor-pointer p-4"
        >
          <div className="flex items-start gap-4">
            <LockIcon size={28} className="min-w-[28px]" />
            <div>
              <h3 className="text-md font-semibold">WinKey — Offline Authenticator</h3>
              <p className="text-sm">Electron.js • TOTP • Local Storage • Cross-Platform</p>
              <p className="text-xs mt-2 text-[#00ffccaa] italic">
                “Because trusting the cloud for OTPs is a rookie move.”
              </p>
              <span
                className="inline-flex items-center gap-1 text-[#FF4444] text-xs mt-2 "
              >
                View Project <ExternalLink size={14} />
              </span>
            </div>
          </div>
        </a>
        <a
          href="/projects/FallenOS"
          className="snap-start flex flex-col items-start gap-4 hover:bg-[#00ffcc11] rounded-xl transition-colors duration-75 focus:outline-none focus:ring-2 focus:ring-[#00FFCC] cursor-pointer p-4"
        >
          <div className="flex items-start gap-4">
            <Laptop2 size={28} className="min-w-[28px]" />
            <div>
              <h3 className="text-md font-semibold underline underline-offset-2 decoration-dotted">
                FallenOS
              </h3>
              <p className="text-sm">Arch Linux • Translucent • Cozy Environment</p>
              <p className="text-xs mt-2 text-[#00ffccaa] italic">
                “I use Arch, btw.”
              </p>
              <span
                className="inline-flex items-center gap-1 text-[#FF4444] text-xs mt-2 "
              >
                View Project <ExternalLink size={14} />
              </span>
            </div>
          </div>
        </a>
      </div>

      {/* Sticky Footer */}
      <div className="border-t border-[#00FFCC55] px-6 py-4 text-xs text-pretty text-[#FF4444] flex items-center gap-2">
        <AlertTriangle size={20} />
        <span>Fewer bugs than your life. But hey, never zero.</span>
      </div>

    </div>
  );
}