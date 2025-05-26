import { BadgeCheck, Trophy, GraduationCap, AlertCircleIcon } from 'lucide-react';

export default function Certs() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1">

      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <GraduationCap size={32} className="min-w-[32px]" />
        <div>
        <h3 className="text-lg font-semibold">&gt; cat → <span className="text-[#FF4444]">certificates.txt</span></h3>
          <p className="text-sm mt-1 text-pretty">
            Real stuff. Real effort. No AI badges or "You watched a video!" trophies.
          </p>
        </div>
      </div>

      {/* Google Cybersecurity */}
      <div className="mb-8 flex flex-col items-start gap-4">
      <div className="flex items-start gap-4">
        <BadgeCheck size={28} className="min-w-[28px]" />
        <div>
          <h3 className="text-md font-semibold">Google Cybersecurity</h3>
          <p className="text-sm">Google via Coursera <span className="mx-2">|</span> May 2023</p>
          <p className="text-xs mt-2 text-[#00ffccaa] italic">
            “If it connects, I learned how to protect it. And if it breaks, I know how to trace it.”
          </p>
        </div>
        </div>
      </div>

      {/* CS50x */}
      <div className="mb-8 flex flex-col items-start gap-4">
      <div className="flex items-start gap-4">
        <Trophy size={28} className="min-w-[28px]" />
        <div>
          <h3 className="text-md font-semibold">CS50x: Introduction to Computer Science</h3>
          <p className="text-sm">Harvard University via edX <span className="mx-2">|</span> <span className='text-yellow-400'>In Progress</span></p>
          <p className="text-xs mt-2 text-[#00ffccaa] italic">
            “CS50 didn’t teach me how to code. It taught me how to solve problems like an engineer.”
          </p>
        </div>
      </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-pretty text-[#FF4444] flex items-center gap-2">
        <AlertCircleIcon size={16} />
        <span>User is currently behind schedule on CS50 — ETC: 1 July 2025.</span>
      </div>
    </div>
  );
}
