import { AlertTriangle, GraduationCap } from "lucide-react";
import Image from "next/image";
export default function Education() {
  return (
    <section
      id="education"
      className="
        mt-8
        rounded-3xl
        border border-[var(--border)]
        bg-[var(--surface)]
        backdrop-blur-xl
        p-4 md:p-6
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <GraduationCap size={22} className="text-[var(--accent)]" />

        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            Education
          </h2>

          <p className="text-xs text-[var(--text-muted)]">
            Academic journey and milestones.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {/* University */}
        <div
          className="
            rounded-2xl
            border border-[var(--border)]
            p-4
          "
        >
          <div className="flex items-start gap-4">
            <Image
              src="/thapar.png"
              alt="TIET"
              width={48}
              height={48}
              className="rounded-lg shrink-0 bg-[var(--accent)]"
            />

            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">
                Thapar Institute of Engineering & Technology
              </h3>

              <p className="text-sm text-[var(--text-secondary)]">
                B.E. Computer Engineering
              </p>

              <p className="text-xs text-[var(--text-muted)]">2025 – 2029</p>
            </div>
          </div>
          <div
            className="
              mt-3
              text-xs
              leading-5
              text-[var(--text-secondary)]
              flex md:flex-row flex-col gap-2
            "
          >
            <div className="md:mr-4 bg-black/20 p-2 rounded-lg">
              Started in Electrical Engineering and successfully upgraded
              to Computer Engineering.
            </div>
            <div className="bg-black/20 p-2 rounded-lg">
              Currently focused on strengthening fundamentals in software
              development, systems, and computer science.
            </div>
          </div>
        </div>

        <div
          className="
            rounded-2xl
            border border-[var(--border)]
            p-4
          "
        >
          <div className="flex items-start gap-4">
  <Image
  src="/motiram.png"
  alt="Moti Ram Arya Senior Secondary Model School"
  width={64}
  height={64}
  className="w-16 h-auto rounded-lg bg-black/30 shrink-0"
/>

  <div>
    <h3 className="font-semibold text-[var(--text-primary)]">
      Moti Ram Arya Senior Secondary Model School
    </h3>

    <p className="mt-1 text-sm text-[var(--text-secondary)]">
      Senior Secondary Education
    </p>

    <p className="text-xs text-[var(--text-muted)]">
      2022 – 2024
    </p>
  </div>
</div>

<div
  className="
    mt-3
    text-xs
    leading-5
    text-[var(--text-secondary)]
  "
>
  <div className="md:mr-4 bg-black/20 p-2 rounded-lg">
  Non-Medical Stream with Computer Science.
  </div>
</div>
</div>
      </div>

      <div
        className="
          mt-6 pt-4
          border-t border-[var(--border)]
          flex items-center gap-2
          text-xs
          text-[var(--accent)]
        "
      >
        <AlertTriangle size={18} />

        <span>
          The fundamentals learned here continue to shape every project built today.
        </span>
      </div>
    </section>
  );
}
