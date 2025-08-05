import { Bot, Code2, Wrench, Terminal } from "lucide-react";

export default function Skills() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <Wrench size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">
            &gt; cat → <span className="text-[#FF4444]">skills.txt</span>
          </h3>
          <p className="text-sm mt-1 text-pretty">
            A toolkit built through real projects, hands-on practice, and constant iteration.
          </p>
        </div>
      </div>

      {/* Core Tech Stack */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <Code2 size={28} className="min-w-[28px] mt-1" />
          <div>
            <h3 className="text-md font-semibold">Core Tech Stack</h3>
            <p className="text-sm">
              C, Python, JavaScript, Next.js, Node.js, MongoDB, MySQL
            </p>
          </div>
        </div>
      </div>

      {/* Dev & OS Tools */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <Terminal size={28} className="min-w-[28px]" />
          <div>
            <h3 className="text-md font-semibold">Dev & OS Tools</h3>
            <p className="text-sm">
              Git, Docker, Postman, VSCode,{" "}
              <span className="relative group cursor-pointer">
                <a href="/projects/FallenOS">
                  <span className="text-[#FF4444] underline decoration-dotted">
                    FallenOS
                  </span>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Other Skills */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <Bot size={28} className="min-w-[28px]" />
          <div>
            <h3 className="text-md font-semibold">Other Skills</h3>
            <p className="text-sm">
              126 WPM, Figma, Adobe Photoshop, Adobe Premiere Pro, Adobe After Effects
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-pretty text-[#00ffcc99] flex items-center gap-2">
        <Bot size={16} />
        <span>Every skill listed here is backed by practice, not just theory.</span>
      </div>
    </div>
  );
}
