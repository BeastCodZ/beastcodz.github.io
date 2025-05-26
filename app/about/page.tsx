import { AlertCircle, UserCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl w-full mx-auto z-1">
      
      {/* Main Section */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <UserCircle2 size={32} className="min-w-[32px] flex-shrink-0" />
        <div className="flex-1 ">
          <h3 className="text-lg md:text-xl font-semibold text-pretty">
            &gt; whoami → <span className="text-[#FF4444]">BeastCodZ</span>
          </h3>
          <p className="text-sm sm:text-base mt-2 text-pretty">
            I’m a <span className="text-[#FF4444]">developer</span> with curiosity for how things work — and how to break them. Whether I’m crafting tools for myself, tweaking my OS, or building something out of boredom, I stay <span className="text-[#FF4444]">ready()</span> by staying hands-on.
          </p>

          <p className="text-sm sm:text-base mt-2 text-pretty">
            Right now, I’m polishing my academics while keeping my coding fundamentals sharp before university kicks off. I believe software should always evolve — just like its developer.
          </p>

          <p className="text-sm sm:text-base mt-2 text-pretty">
            I type like I mean it. And yeah, I run <span className='text-[#FF4444]'>Arch</span>, btw.
          </p>

          <p className="text-xs mt-3 text-[#00ffccaa] italic text-pretty">
            &ldquo;Why read the book, when you can just make your own version of it?&rdquo;
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-[#FF4444] text-pretty flex items-center gap-2">
        <AlertCircle size={24} className="text-[#FF4444]" />
        Warning: User might be mood-oriented. May contain traces of sarcasm.
      </div>
    </div>
  );
}
