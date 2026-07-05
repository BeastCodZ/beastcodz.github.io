"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;

    function update() {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const sc = doc.scrollTop;
      const percent = total > 0 ? (sc / total) * 100 : 0;
      setPct(percent);
    }

    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="fixed right-0 h-full w-1 z-50 pointer-events-none">
      <div
        style={{ height: `${pct}%`, background: "var(--accent)" }}
        className="h-full transition-[height] duration-150 ease-linear"
      />
    </div>
  );
}
