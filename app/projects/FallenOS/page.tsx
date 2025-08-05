import { Terminal, Cog, Shield, AlertTriangle, Laptop2 } from "lucide-react";
import Image from "next/image";

export default function FallenOS() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] overflow-hidden p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1 max-h-screen flex flex-col">
      {/* Header */}
      <div className="mb-8 flex items-start gap-4 shrink-0 overflow-hidden">
        <Laptop2 size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">
            &gt; project → <span className="text-[#FF4444]">FallenOS</span>
          </h3>
          <p className="text-sm mt-1 text-[#00ffccaa] italic">
            &ldquo;Minimal. Brutal. Unapologetically Arch.&rdquo;
          </p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 text-sm p-2 no-scrollbar">
        <p>
          FallenOS is my custom-built Arch Linux environment designed for speed,
          efficiency, and full keyboard-driven control. Featuring the Hyprland
          window manager, a refined theming setup, and preconfigured tools.
          It’s crafted for developers who value focus and
          minimalism without compromise.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Terminal size={20} />
            <span>Tiling window manager (Hyprland) with Kitty + Fish</span>
          </div>
          <div className="flex items-center gap-3">
            <Cog size={20} />
            <span>Optimized for smooth performance and low overhead</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield size={20} />
            <span>PipeWire powered audio stack for reliable sound</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#00FFCC]">
            Screenshots
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              { file: "2", label: "Desktop" },
              { file: "4", label: "Terminal (Kitty + Fish)" },
              { file: "3", label: "Spotify" },
              { file: "1", label: "Firefox" },
              { file: "5", label: "Dmenu (Rofi)" },
              { file: "6", label: "Power Menu (Rofi)" },
              { file: "7", label: "Discord" },
            ].map((shot, i) => (
              <div className="relative w-40 h-28" key={i}>
                <a
                  href={`/projects/FallenOS/${shot.file}.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/projects/FallenOS/${shot.file}.png`}
                    alt={`FallenOS ${shot.label}`}
                    className="rounded-lg shadow-md border border-[#00FFCC33] bg-[#0a2e27] object-contain hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                    fill
                  />
                  <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                    {shot.label}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-[#FF4444] flex items-center gap-2 shrink-0">
        <AlertTriangle size={16} />
        <span>Know your terminal. This isn’t a distro for hand-holding.</span>
      </div>
    </div>
  );
}
