"use client";

import { useState, useEffect, useRef } from "react";

type CommandHandler = () => Promise<string[]> | string[];

const commands: Record<string, CommandHandler> = {
  help: () => [
    "Commands you probably need (or not):",
    " $help: Because you clearly need guidance.",
    " $whoami: As if you don't know who you are.",
    " $nuke: For when you mess up so badly, only total annihilation helps.",
    " $meow: Because even you deserve a meow.",
    " $ascii: Some art, because your life lacks it.",
    " $wisdom: Prepare to be enlightened, if you can handle it.",
    " $sudo: For those who think they're important.",
    ` $sourcecode: Because you need to know how I work.`,
  ],
  wisdom: () => [
    "Code is like humor. When you have to explain it, it's bad.",
  ],
  sudo: () => ["Nice try. You don't have permission. Maybe one day."],
  meow: () => ["Meow! 🐾 Even my cat codes better than most."],
  ascii: () => [
    `                       `,
    `──────▄▀▄─────▄▀▄      `,
    `─────▄█░░▀▀▀▀▀░░█▄      `,
    `─▄▄──█░░░░░░░░░░░█──▄▄  `,
    `█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█ `,
    `That’s art. Try not to be jealous.`,
  ],
  whoami: async () => {
    try {
      const res = await fetch("https://ipapi.co/json");
      const data = await res.json();
      return [
        `Scanning your existence...`,
        `Relax, your secrets are safe. Not that they're interesting.`,
        `Apparently, you're in ${data.country_name}, probably lost in ${data.city}.`,
        `Your Internet Daddy is ${data.org} and your IP is ${data.ip}.`,
        ...(data.user_agent !== undefined
          ? [
            `User agent: ${data.user_agent} (Impressive? Not really.)`,
            `Browser: ${data.browser_name} ${data.browser_version}`,
            `Device: ${data.device_name} ${data.device_type}`
          ]
          : []
        ),
        `Timezone: ${data.timezone}. Try not to waste more of it.`,
        `Currency: ${data.currency}. Don't worry, I'm not after your money.`,
      ];
    } catch (e) {
      return [
        `Failed to scan your existence. Maybe that's for the best. ${e}`
      ];
    }
  },
};
export default function InteractiveTerminal() {
  const [count, setCount] = useState<number | null>(null)
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [introComplete, setIntroComplete] = useState(false);
  const [isTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  


  const appendLines = async (lines: string[], delayLines: number = 30, delayWords: number = 10) => {
    for (const line of lines) {
      if (!line) continue;
      let displayLine = "";
      for (let i = 0; i < line.length; i++) {
        displayLine += line[i];
        setHistory((prev) => [...prev.slice(0, -1), displayLine]);
          await new Promise((res) => setTimeout(res, delayWords));
      }
      setHistory((prev) => [...prev, ""]);
        await new Promise((res) => setTimeout(res, delayLines));
    }
  };

  const handleCommand = async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((prev) => [...prev, `$ ${cmd}`, ""]);

    if (trimmed === "nuke") {
      setHistory([]);
      return;
    }
    if (trimmed === "clear") {
      await appendLines(["That's nuke, RUN NUKE!"]);
      return
    }
    if (trimmed === "sourcecode") {
      fetch('https://beastcodzapi.vercel.app/api/counter', { method: 'POST' }).catch(console.error)
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
      return
    }
    if (trimmed === "whoami") {
      const command = commands[trimmed];
      const output = await command();
      await appendLines(output, 50, 20);
      return
    }
    const command = commands[trimmed];

    if (!command) {
      await appendLines(["Unknown command. Type 'help'"]);
      return;
    }

    let output = await command();

    if (trimmed === "help" && count !== null) {
      output = output.map(line =>
        line.startsWith(" $sourcecode:")
          ? ` $sourcecode: Because you need to know how I work. (Total downloads: ${count})`
          : line
      );
      await appendLines(output, 90, 0);
      return;
    }
    await appendLines(output);
  };
const introLines = [
    "Powering on...",
    "Establishing connection to beastcodz.github.io (you're welcome).",
    "Injecting pure talent into the environment...",
    "Loading modules you probably can't comprehend...",
    "Logged in as guest. Root access? Dream on.",
    "Type $help if you need a lifeline."
  ];
const returningLines = [
  "Back again? Why?",
  "Welcome back, I guess.",
  "You just can't get enough, huh?",
  "Still here? Impressive.",
  "Missed me already?",
];

/* eslint-disable */
  useEffect(() => {
    if (introComplete) return;

    if (localStorage.getItem("introComplete") === "true") {
      const line = returningLines[Math.floor(Math.random() * returningLines.length)]
      setHistory([line]);
      setIntroComplete(true);
      fetch('https://beastcodzapi.vercel.app/api/counter')
        .then(res => res.json())
        .then(data => setCount(data.count));
      return;
    }

    const runIntro = async () => {
      await appendLines(introLines, 50, 25);
      setIntroComplete(true);
      localStorage.setItem("introComplete", "true");
      fetch('https://beastcodzapi.vercel.app/api/counter')
        .then(res => res.json())
        .then(data => setCount(data.count));
    };

    runIntro();
  }, []);
/* eslint-enable */
  


  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [history]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    const cmd = input;
    setInput("");
    await handleCommand(cmd);
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#0d0d0d3c] text-[#00FFCC] overflow-hidden select-none relative rounded-2xl w-full p-4 sm:p-6 md:p-10 text-left max-w-full max-h-[75vh] mx-auto"
    >
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(180deg,rgba(0,255,204,0.05)_0_1px,transparent_1px_4px)]"></div>
      <label>
        <div className="relative z-10">
          {history.map((line, i) => (
            <div key={i}>{line}</div>
          ))}

          {introComplete && !isTyping && (
            <form className="flex items-center" onSubmit={handleSubmit} autoComplete="off">
              <span className="mr-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                placeholder="sudo"
                className="bg-transparent border-none outline-none text-[#00FFCC] w-full caret-[#00FFCC]"
                spellCheck={false}
                inputMode="text"
                enterKeyHint="done"
              />
            </form>
          )}

        </div>
      </label>
    </div>

  );
}
