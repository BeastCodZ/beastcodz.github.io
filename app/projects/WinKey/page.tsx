import { LockIcon, Clock, AlertTriangle, QrCode, Zap } from "lucide-react";
import Image from "next/image";

export default function WinKey() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1 max-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-8 flex items-start gap-4 shrink-0">
        <LockIcon size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">
            &gt; project → <span className="text-[#FF4444]">WinKey</span>
          </h3>
          <p className="text-sm mt-1 text-[#00ffccaa] italic">
            &ldquo;Because security shouldn&apos;t be ugly.&rdquo;
          </p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 text-sm">
        <p>
          WinKey is a clean, bloatfree desktop authenticator built with
          Electron. It’s lightweight, offline-first, and focused on one thing:
          generating secure TOTP codes without unnecessary clutter.
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Clock size={20} />
            <span>TOTP-based 2FA (RFC 6238-compliant)</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap size={20} />
            <span>Instant offline token generation</span>
          </div>
          <div className="flex items-center gap-3">
            <QrCode size={20} />
            <span>QR-based setup (coming soon)</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2 text-[#00FFCC]">
            Screenshots
          </h4>
          <div className="flex flex-wrap gap-2">
            {["1", "2", "3", "4"].map((num, index) => (
              <div className="relative w-40 h-28" key={index}>
                <a
                  href={`/projects/WinKey/${num}.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/projects/WinKey/${num}.png`}
                    alt={`WinKey UI screenshot ${num}`}
                    className="rounded-lg shadow-md border border-[#00FFCC33] bg-[#0a2e27] object-contain hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                    fill
                  />
                  <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                    {["Login", "Dashboard", "Add Code", "Sync"][index]}
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
        <span>
          No encryption yet. Guard your <code>secrets.json</code> or learn the hard way.
        </span>
      </div>
    </div>
  );
}
