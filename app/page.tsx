import { AlertCircle, UserCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl w-full mx-auto z-1">
      {/* Main Section */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <UserCircle2 size={32} className="min-w-[32px] flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-pretty">
            &gt; whoami → <span className="text-[#FF4444]">BeastCodZ</span>
          </h3>

          <p className="text-sm sm:text-base mt-2 text-pretty">
            I’m a <span className="text-[#FF4444]">developer</span> obsessed with understanding how things work
            and improving current solutions. Whether I&apos;m building tools, tweaking my system,
            or experimenting with new ideas, I stay <span className="text-[#FF4444]">ready()</span> by staying hands-on.
          </p>

          <p className="text-sm sm:text-base mt-2 text-pretty">
            Right now, I’m sharpening my fundamentals and pushing my skills forward
            while starting my Engineering journey at university.
            Software should evolve, and so should the developer behind it.
          </p>

          <p className="text-xs mt-3 text-[#00ffccaa] italic text-pretty">
            &ldquo;Why read the manual, when you can rewrite it your way?&rdquo;
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-[#FF4444] text-pretty flex items-center gap-2">
        <AlertCircle size={24} className="text-[#FF4444]" />
        Warning: User may be mood-oriented. Sarcasm included by default.
      </div>
    </div>
  );
}

