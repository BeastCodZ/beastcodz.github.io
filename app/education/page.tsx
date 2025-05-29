import { School, University, Backpack, GraduationCap, CheckCheckIcon } from 'lucide-react';

export default function Education() {
  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1">

      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-4">

        <GraduationCap size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">&gt; cat → <span className="text-[#FF4444]">education.txt</span></h3>
          <p className="text-sm mt-1 text-pretty">
            Every stage mattered. From flipping textbooks to flipping kernels.
          </p>
        </div>
      </div>

      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <Backpack size={28} className="min-w-[28px]" />
          <div>
            <h3 className="text-md font-semibold">All India Secondary School Examination</h3>
            <p className="text-sm">CBSE <span className="mx-2">|</span> Year: 2022</p>
            <p className="text-sm">Score: 71.4%</p>
            <p className="text-xs mt-2 text-[#00ffccaa] italic">
              &ldquo;The only thing I learned in school was how to be a good person.&rdquo;
            </p>
          </div></div>
      </div>

      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <School size={28} className="min-w-[28px]" />
          <div>
            <h3 className="text-md font-semibold">Senior School Certificate Examination</h3>
            <p className="text-sm">Non-Medical <span className="mx-2">|</span> Year: 2024</p>
            <p className="text-sm">Score: 71.2%</p>
            <p className="text-xs mt-2 text-[#00ffccaa] italic">
              &ldquo;Aiming for the clouds, but still grounded in reality.&rdquo;
            </p>
          </div></div>
      </div>

      <div className="mb-8 flex flex-col items-start gap-4">
        <div className="flex items-start gap-4">
          <University size={28} className="min-w-[28px]" />
          <div>
            <h3 className="text-md font-semibold">Request pending.. to be updated by July 2025</h3>
            <p className="text-xs text-yellow-400">On the journey of learning a bit of everything, mastering the art of staying curious.</p>
            <p className="text-xs mt-2 text-[#00ffccaa] italic">
              &ldquo;The grind never stopped. Knowledge is the new exploit.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-pretty text-[#00ffcc99] flex items-center gap-2">
        <CheckCheckIcon size={16} />
        <span>All data verified and stored in the clouds (or maybe just my head).</span>
      </div>
    </div>
  );
}
