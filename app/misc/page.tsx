"use client"
import { useState } from 'react';
import Games from './games';
import { ScrollGallery } from './gallery';
import { Gamepad2,HardDrive, Headphones, Laptop, Smartphone, SquareTerminalIcon } from 'lucide-react';

export default function Misc() {
  const [activePage, setActivePage] = useState('games');

  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-4 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl w-full mx-auto z-1">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <h3 className="text-lg font-semibold">&gt; cat → <span className="text-[#FF4444]">misc.txt</span></h3>
        <p className="text-sm mt-1 text-pretty">
          Nothing much here, just some random stuff I enjoy doing in my free time.
        </p>
      </div>

      {/* Navigation */}
      <div className="mb-8 flex flex-wrap gap-2 md:gap-4">
        <button
          onClick={() => setActivePage('games')}
          className={`px-4 py-2 rounded-lg cursor-pointer bg-transparent hover:border-[#FF4444] hover:text-[#FF4444] border transition-all duration-200 ${activePage === 'games' ? 'border-[#FF4444] text-[#FF4444] flicker' : ' border-[#00FFCC]'}`}
        >
          Games
        </button>
        <button
          onClick={() => setActivePage('music')}
          className={`px-4 py-2 rounded-lg cursor-pointer bg-transparent hover:border-[#FF4444] hover:text-[#FF4444] border transition-all duration-200 ${activePage === 'music' ? 'border-[#FF4444] text-[#FF4444] flicker' : ' border-[#00FFCC]'}`}
        >
          Music
        </button>
        <button
          onClick={() => setActivePage('photography')}
          className={`px-4 py-2 rounded-lg cursor-pointer bg-transparent hover:border-[#FF4444] hover:text-[#FF4444] border transition-all duration-200 ${activePage === 'photography' ? 'border-[#FF4444] text-[#FF4444] flicker' : ' border-[#00FFCC]'}`}
        >
          Photography
        </button>
        <button
          onClick={() => setActivePage('quotes')}
          className={`px-4 py-2 rounded-lg cursor-pointer bg-transparent hover:border-[#FF4444] hover:text-[#FF4444] border transition-all duration-200 ${activePage === 'quotes' ? 'border-[#FF4444] text-[#FF4444] flicker' : ' border-[#00FFCC]'}`}
        >
          Quotes
        </button>
        <button
          onClick={() => setActivePage('gadgets')}
          className={`px-4 py-2 rounded-lg cursor-pointer bg-transparent hover:border-[#FF4444] hover:text-[#FF4444] border transition-all duration-200 ${activePage === 'gadgets' ? 'border-[#FF4444] text-[#FF4444] flicker' : ' border-[#00FFCC]'}`}
        >
          Arsenel
        </button>
      </div>

      {/* Content */}
      {activePage === 'games' && (
        <Games />
      )}

      {activePage === 'music' && (
        <div className="mb-8">
          <h3 className="text-md font-semibold mb-4">🎵 Music Playlists</h3>
            <div className="flex flex-col items-start mb-4">
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#00FFCC33] w-full bg-[#0a2a24cc]">
              <iframe
              src="https://open.spotify.com/embed/playlist/2yjKGkUbYPKs2jYAQ7wgrK?utm_source=generator"
              width="100%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              />
              <span className="flex justify-center text-xs text-[#00ffcc99] m-1 text-pretty">Energize yourself—sadness is overrated anyway.</span>
            </div>
            </div>
            <div className="flex flex-col items-start mb-4">
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#00FFCC33] w-full bg-[#0a2a24cc]">
              <iframe
              src="https://open.spotify.com/embed/playlist/0hkEIZsRIopsyjHYQeUpeI?utm_source=generator&theme=0"
              width="100%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              />
              <span className="flex justify-center text-xs text-[#00ffcc99] m-1 text-pretty">A playlist for those down days—because we all have them.</span>
            </div>
            </div>
            <div className="flex flex-col items-start mb-4">
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#00FFCC33] w-full bg-[#0a2a24cc]">
              <iframe
              src="https://open.spotify.com/embed/playlist/28quoqsJqZQM6utOfXmiX4?utm_source=generator"
              width="100%"
              height="80"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              />
              <span className="flex justify-center text-xs text-[#00ffcc99] m-2 text-pretty">On repeat—because some songs never get old.</span>
            </div>
          </div>
        </div>
      )}

      {activePage === 'photography' && (
        <div className="mb-8">
          <h3 className="text-md font-semibold mb-4">📸 Photography</h3>
          <div className="relative w-full max-w-full">
            <ScrollGallery />
          </div>
        </div>
      )}

      {activePage === 'quotes' && (
        <div className="mb-8">
          <h3 className="text-md font-semibold mb-4">💬 Favorite Quotes</h3>
          <ul className="list-disc list-inside text-sm text-pretty">
            <li>"The only way to do great work is to love what you do." - Steve Jobs</li>
            <li>"Simplicity is the ultimate sophistication." - Leonardo da Vinci</li>
            <li>"Code is like humor. When you have to explain it, it’s bad." - Cory House</li>
            <li>"If you don't fight for your love, what kind of love do you have?" - Keanu Reeves</li>
            <li>"Everybody lies." - Dr. Gregory House</li>
          </ul>
        </div>
      )}

      {activePage === 'gadgets' && (
        <div className="mb-8">
          <h3 className="text-md font-semibold mb-4">🔧 Arsenel</h3>
          <table className="w-full text-sm border-separate border-spacing-y-2 border-spacing-x-4 text-pretty">
            <tbody>
              <tr className="align-top">
                <td><Laptop className="w-5 h-5 text-[#00FFCC]" /></td>
                <td className="font-semibold text-pretty">Acer Nitro 5 (AN515-57)</td>
                <td className="ml-2 italic text-xs text-[#00ffcc99] text-pretty">
                  Intel i5-11400H • 24GB DDR4 3200MHz • RTX 3050 Laptop • 1.25TB SSD+HDD
                </td>
              </tr>
              <tr className="align-top">
                <td><Smartphone className="w-5 h-5 text-[#00FFCC]" /></td>
                <td className="font-semibold text-pretty">Apple iPhone XS Max</td>
                <td className="ml-2 italic text-xs text-[#00ffcc99] text-pretty">
                  I hate iOS, but I love the camera. 256GB Storage
                </td>
              </tr>
              <tr className="align-top">
                <td><HardDrive className="w-5 h-5 text-[#00FFCC]" /></td>
                <td className="font-semibold text-pretty">Storage</td>
                <td className="ml-2 italic text-xs text-[#00ffcc99] text-pretty"><div className='flex flex-col gap-1'>
                  <ul className='list-inside list-decimal text-pretty'>
                    <li>256GB ADATA SATA SSD</li>
                    <li>1TB Seagate HDD</li>
                    <li>500GB SeaGate SATA HDD</li>
                  </ul>
                </div></td>
              </tr>
              <tr className="align-top">
                <td><Headphones className="w-5 h-5 text-[#00FFCC]" /></td>
                <td className="font-semibold text-pretty">RedGear Cosmos 7.1</td>
                <td className="ml-2 italic text-xs text-[#00ffcc99] text-pretty">
                  USB, 50mm drivers, RGB, 7.1 surround sound
                </td>
              </tr>
              <tr className="align-top">
                <td><Gamepad2 className="w-5 h-5 text-[#00FFCC]" /></td>
                <td className="font-semibold text-pretty">EvoFox Elite X</td>
                <td className="ml-2 italic text-xs text-[#00ffcc99] text-pretty">
                  2.4GHz, Translucent, Analog Triggers
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-6 mt-8 flex items-center gap-3 text-xs text-[#00ffcc99] text-pretty">
        <SquareTerminalIcon width={22} height={22} />
        <span className="italic text-pretty">Because even mediocrity has its standards.</span>
      </div>
    </div>
  );
}
