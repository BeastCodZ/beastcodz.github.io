import { Terminal, Cog, Shield, AlertTriangle, Laptop2 } from "lucide-react";
import Image from "next/image";
export default function FallenOS() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1">
      {/* Header */}
      <div className="mb-8 flex items-start gap-4">
        <Laptop2 size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">
            &gt; project → <span className="text-[#FF4444]">FallenOS</span>
          </h3>
          <p className="text-sm mt-1 text-[#00ffccaa] italic">
            &ldquo;Built in the ruins of Arch.&rdquo;
          </p>
        </div>
      </div>

      <div className="mb-8 space-y-4 text-sm">
        <p>
          FallenOS is my custom-built Arch Linux distro tailored for speed,
          aesthetics, and full keyboard-driven control. It features the Hyprland
          window manager, a custom theming layer, and preconfigured tools like
          Kitty, Fish — all optimized for minimal resource usage and maximum
          productivity. Designed for users who live in the terminal and thrive
          in chaos.
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="flex items-start gap-3">
          <Terminal size={20} />
          <span className="text-sm">
            Tiling window manager (Hyprland) | Terminal (Kitty + Fish)
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Cog size={20} />
          <span className="text-sm">
            Optimized for smooth and quiet runtime.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <Shield size={20} />
          <span className="text-sm">Music powered by pipewire.</span>
        </div>
      </div>
      <div className="mb-8">
        <h4 className="text-sm font-semibold mb-2 text-[#00FFCC]">
          Screenshots
        </h4>
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <a
              href="/projects/FallenOS/2.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/FallenOS/2.png"
                alt="FallenOS screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Desktop
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              href="/projects/FallenOS/4.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/FallenOS/4.png"
                alt="FallenOS screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Terminal (Kitty + Fish)
              </span>
            </a>
          </div>

          <div className="relative">
            <a
              href="/projects/FallenOS/3.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/FallenOS/3.png"
                alt="FallenOS screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Spotify
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              href="/projects/FallenOS/4.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/FallenOS/1.png"
                alt="FallenOS screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Firefox
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              href="/projects/FallenOS/5.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/FallenOS/5.png"
                alt="FallenOS screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Multi Window Setup + Window Launcher(Rofi)
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              href="/projects/FallenOS/6.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/FallenOS/6.png"
                alt="FallenOS screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Power Menu (Rofi)
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              href="/projects/FallenOS/7.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/FallenOS/7.png"
                alt="FallenOS screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Discord
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-[#FF4444] flex items-center gap-2">
        <AlertTriangle size={16} />
        <span>For your own sanity. Know your bash before you dive in.</span>
      </div>
    </div>
  );
}
