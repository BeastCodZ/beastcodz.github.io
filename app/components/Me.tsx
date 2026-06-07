"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

export default function Me() {
  return (
    <>
    <MotionImage
      src="/me.webp"
      width={96}
      height={96}
      alt="BeastCodZ"
      className="rounded-2xl border border-(--border)"
      animate={{
  y: [0, -4, 0],
  x: [0, 2, 0, -2, 0],
  rotate: [0, 1, 0, -1, 0],
}}
transition={{
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut",
}}
      whileHover={{
        scale: 1.05,
      }}
    />
    <div>
            <div className="inline-flex flex-col items-center">
  <h1
    className="
      text-3xl
      font-bold
      tracking-wide
      text-(--text-primary)
    "
  >
    <span className="text-(--accent-soft)">Beast</span>CodZ
  </h1>

  <div className="relative mb-2 h-1 w-50 overflow-hidden rounded-full bg-(--border)">
    <motion.div
      className="
        absolute top-0 left-0
        h-full w-12
        bg-(--accent-soft)
      "
      animate={{
        x: ["-100%", "400%"],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
</div>

            <p
              className="
        mt-1
        text-xs
        text-(--accent-soft)
      "
            >
              Full Stack Developer • Software Engineer
            </p>
          </div>
          </>
  );
}