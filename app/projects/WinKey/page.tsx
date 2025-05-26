import { LockIcon, Clock, AlertTriangle, QrCode, Zap } from "lucide-react";
import Image from "next/image";
export default function WinKey() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1">
      {/* Header */}
      <div className="mb-8 flex items-start gap-4">
        <LockIcon size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">
            &gt; project → <span className="text-[#FF4444]">WinKey</span>
          </h3>
          <p className="text-sm mt-1 text-[#00ffccaa] italic">
            &ldquo;Security shouldn’t be ugly.&rdquo;
          </p>
        </div>
      </div>

      <div className="mb-8 space-y-4 text-sm">
        <p>
          WinKey is a slick, no-nonsense desktop authenticator built with
          Electron. It’s lightweight, local, and focused entirely on one thing —
          generating secure TOTP codes for your accounts.
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="flex items-start gap-3">
          <Clock size={20} />
          <span className="text-sm">TOTP-based 2FA (RFC 6238-compliant)</span>
        </div>
        <div className="flex items-start gap-3">
          <Zap size={20} />
          <span className="text-sm">Instant offline token generation</span>
        </div>
        <div className="flex items-start gap-3">
          <QrCode size={20} />
          <span className="text-sm">QR-based setup (Coming soon)</span>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-sm font-semibold mb-2 text-[#00FFCC]">
          Screenshots
        </h4>
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <a
              href="/projects/WinKey/1.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/WinKey/1.png"
                alt="WinKey UI screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Home
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              href="/projects/WinKey/2.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/WinKey/2.png"
                alt="WinKey UI screenshot"
                className="rounded-lg shadow-md w-48 h-32 object-cover border border-[#00FFCC33] bg-[#0a2e27]"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-2 bg-[#0a2e27cc] text-[#00FFCC] text-xs px-2 py-0.5 rounded">
                Add Code
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-[#FF4444] flex items-center gap-2">
        <AlertTriangle size={16} />
        <span>
          No encryption yet. Keep your <code>secrets.json</code> safe, or don’t
          cry when it’s gone.
        </span>
      </div>
    </div>
  );
}
