import Link from "next/link";
import { FileWarning, SearchX, Bot } from "lucide-react";

export default function NotFound() {
  const burns = [
    "Did you mistype that, script kiddie?",
    "Location not found. Brain cells also missing.",
    "Nice detour, genius. Back to base.",
    "Even FallenOS can't parse your nonsense.",
    "Request returned: nothing. As expected.",
    "You lost, but at least you tried.",
    "My cat could navigate better. Get it together.",
    "Path invalid. User IQ questionable.",
    "Your search returned: air.",
    "Good news: you found a void. Bad news: that's all you found.",
    "Another broken URL. Another disappointment.",
  ];

  const lostLines = [
    "Where did you come from, nerd? All that clicking and you still got lost.",
    "Lost again? Maybe read the URL next time.",
    "You tried. You failed. Try the homepage.",
    "You wandered too far, genius.",
    "Wrong turn, champ. No map will save you.",
  ];

  const recoveryLines = [
    "Run this to crawl back home. And next time, pay attention.",
    "Execute and pretend this never happened.",
    "Use this command. Try not to mess up again.",
    "Home awaits. Don't break it this time.",
    "Return quietly. I won't mention this to anyone.",
  ];

  const subs = [
    "Bravo. You reached the one file that doesn't exist.",
    "Impressive. You found a digital black hole.",
    "Nothing here. Keep walking, champ.",
    "Zero bytes. Zero hope.",
    "There's no path here. Only regret.",
  ];

  const footers = [
    "File not found. Terminal closed. User error confirmed.",
    "Session ended. Try not to break it next time.",
    "Nothing here. Nothing learned.",
    "Process killed. Next time, read the docs.",
    "Error handled. User still unhandled.",
  ];

  const insult = burns[Math.floor(Math.random() * burns.length)];
  const lostLine = lostLines[Math.floor(Math.random() * lostLines.length)];
  const recoveryLine =
    recoveryLines[Math.floor(Math.random() * recoveryLines.length)];
  const sub = subs[Math.floor(Math.random() * subs.length)];
  const footer = footers[Math.floor(Math.random() * footers.length)];

  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto mt-20 z-1">
      <div className="mb-8 flex flex-col items-start gap-4">
        <FileWarning size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">&gt; cat → not_found.txt</h3>
          <p className="text-sm mt-1 text-pretty">{sub}</p>
        </div>
      </div>

      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <SearchX size={28} className="min-w-[28px] mt-1" />
          <div>
            <h3 className="text-md font-semibold">Error Code: 404</h3>
            <p className="text-sm">{lostLine}</p>
            <p className="text-xs mt-2 text-[#00ffccaa] italic">
              &ldquo;{insult}&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <Bot size={28} className="min-w-[28px]" />
          <div>
            <h3 className="text-md font-semibold">Recovery Command</h3>
            <Link
              href="/"
              className="text-sm text-[#FF4444] underline hover:text-red-500"
            >
              &gt; cd ~
            </Link>
            <p className="text-xs mt-2 text-[#00ffccaa] italic">
              &ldquo;{recoveryLine}&rdquo;
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-pretty text-[#00ffcc99] flex items-center gap-2">
        <Bot size={16} />
        <span>{footer}</span>
      </div>
    </div>
  );
}
