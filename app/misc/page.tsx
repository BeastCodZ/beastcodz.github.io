"use client";
import { useState } from "react";
import Games from "./games";
import { ScrollGallery } from "./gallery";
import {
  Gamepad2,
  HardDrive,
  Headphones,
  Laptop,
  Smartphone,
  SquareTerminalIcon,
} from "lucide-react";

export default function Misc() {
  const [activePage, setActivePage] = useState("games");

  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-4 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl w-full mx-auto z-1 max-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex flex-col items-start gap-4 shrink-0">
        <h3 className="text-lg font-semibold">
          &gt; cat → <span className="text-[#FF4444]">misc.txt</span>
        </h3>
        <p className="text-sm mt-1 text-pretty">Not everything has to compile.</p>
      </div>

      {/* Navigation */}
      <div className="mb-4 flex flex-wrap gap-2 md:gap-4 shrink-0">
        {["games", "music", "photography", "quotes", "gadgets"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActivePage(tab)}
            className={`px-4 py-2 rounded-lg cursor-pointer bg-transparent hover:border-[#FF4444] hover:text-[#FF4444] border transition-all duration-200 ${
              activePage === tab
                ? "border-[#FF4444] text-[#FF4444] flicker"
                : "border-[#00FFCC]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {activePage === "games" && <Games />}

        {activePage === "music" && (
          <div>
            <h3 className="text-md font-semibold mb-4">🎵 Music Playlists</h3>
            {[
              {
                src: "https://open.spotify.com/embed/playlist/2yjKGkUbYPKs2jYAQ7wgrK?utm_source=generator",
                caption: "Energize yourself—sadness is overrated anyway.",
              },
              {
                src: "https://open.spotify.com/embed/playlist/0hkEIZsRIopsyjHYQeUpeI?utm_source=generator&theme=0",
                caption: "A playlist for those down days—because we all have them.",
              },
              {
                src: "https://open.spotify.com/embed/playlist/28quoqsJqZQM6utOfXmiX4?utm_source=generator",
                caption: "On repeat—because some songs never get old.",
              },
            ].map((playlist, i) => (
              <div key={i} className="mb-4 rounded-xl overflow-hidden shadow-lg border border-[#00FFCC33] w-full bg-[#0a2a24cc]">
                <iframe
                  src={playlist.src}
                  width="100%"
                  height="80"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
                <span className="flex justify-center text-xs text-[#00ffcc99] m-1 text-pretty">
                  {playlist.caption}
                </span>
              </div>
            ))}
          </div>
        )}

        {activePage === "photography" && (
          <div>
            <h3 className="text-md font-semibold mb-4">📸 Photography</h3>
            <ScrollGallery />
          </div>
        )}

        {activePage === "quotes" && (
          <div>
            <h3 className="text-md font-semibold mb-4">💬 Favorite Quotes</h3>
            <ul className="list-disc list-inside text-sm text-pretty">
              <li>“The only way to do great work is to love what you do.” – Steve Jobs</li>
              <li>“Simplicity is the ultimate sophistication.” – Leonardo da Vinci</li>
              <li>“Code is like humor. When you have to explain it, it’s bad.” – Cory House</li>
              <li>“If you don’t fight for your love, what kind of love do you have?” – Keanu Reeves</li>
              <li>“Everybody lies.” – Dr. Gregory House</li>
            </ul>
          </div>
        )}

        {activePage === "gadgets" && (
          <div>
            <h3 className="text-md font-semibold mb-4">🔧 Arsenal</h3>
            <table className="w-full text-sm border-separate border-spacing-y-2 border-spacing-x-4 text-pretty">
              <tbody>
                <tr>
                  <td><Laptop className="w-5 h-5 text-[#00FFCC]" /></td>
                  <td className="font-semibold">Acer Nitro 5 (AN515-57)</td>
                  <td className="italic text-xs text-[#00ffcc99]">i5-11400H • 24GB DDR4 • RTX 3050 • 1.25TB SSD+HDD</td>
                </tr>
                <tr>
                  <td><Smartphone className="w-5 h-5 text-[#00FFCC]" /></td>
                  <td className="font-semibold">Apple iPhone XS Max</td>
                  <td className="italic text-xs text-[#00ffcc99]">Hate iOS, love the camera. 256GB.</td>
                </tr>
                <tr>
                  <td><HardDrive className="w-5 h-5 text-[#00FFCC]" /></td>
                  <td className="font-semibold">Storage</td>
                  <td className="italic text-xs text-[#00ffcc99]">
                    <ul className="list-inside list-decimal">
                      <li>256GB ADATA SATA SSD</li>
                      <li>1TB Seagate HDD</li>
                      <li>500GB Seagate HDD</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><Headphones className="w-5 h-5 text-[#00FFCC]" /></td>
                  <td className="font-semibold">RedGear Cosmos 7.1</td>
                  <td className="italic text-xs text-[#00ffcc99]">USB, 50mm drivers, RGB, 7.1 surround</td>
                </tr>
                <tr>
                  <td><Gamepad2 className="w-5 h-5 text-[#00FFCC]" /></td>
                  <td className="font-semibold">EvoFox Elite X</td>
                  <td className="italic text-xs text-[#00ffcc99]">2.4GHz, translucent, analog triggers</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-2 flex items-center gap-3 text-xs text-[#00ffcc99]">
        <SquareTerminalIcon width={22} height={22} />
        <span className="italic">Because even mediocrity has its standards.</span>
      </div>
    </div>
  );
}
