"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Me() {
  const imgWrap = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = imgWrap.current;
    if (!el) return;

    let raf = 0;

    function loop() {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      // small parallax based on distance from center
      const offset = rect.top + rect.height / 2 - winH / 2;
      const translate = Math.max(Math.min(-offset * 0.02, 24), -24);
      el.style.transform = `translateY(${translate}px)`;
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <div ref={imgWrap} className="rounded-2xl border border-(--border) inline-block overflow-hidden">
        <Image src="/me.webp" width={96} height={96} alt="BeastCodZ" />
      </div>

      <div>
        <div className="inline-flex flex-col items-center">
          <h1 className="text-3xl font-bold tracking-wide text-(--text-primary)">
            <span className="text-(--accent-soft)">Beast</span>CodZ
          </h1>

          <div className="relative mb-2 h-1 w-50 overflow-hidden rounded-full bg-(--border)">
            <div className="absolute top-0 left-0 h-full w-12 bg-(--accent-soft) animate-[slide_3s_linear_infinite]" />
          </div>
        </div>

        <p className="mt-1 text-xs text-(--accent-soft)">Full Stack Developer • Software Engineer</p>
      </div>
    </>
  );
}
