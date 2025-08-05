"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useDragControls, PanInfo } from "framer-motion";

const games = [
  {
    title: "Last of Us Part 1 & Part 2",
    description:
      "A brutal, cinematic dive into the apocalypse — not just surviving, but feeling every damn cutscene like it’s your last.",
    src: "/games/lastofus.png",
  },
  {
    title: "Ghost of Tsushima",
    description:
      "Honor died on the beach. Now you’re caught between legacy and survival — every victory feels like the start of another war.",
    src: "/games/got.png",
  },
  {
    title: "Spider-Man 2",
    description:
      "Great power comes with great responsibility. Life ain’t stopping, and neither are criminals.",
    src: "/games/sp2.png",
  },
  {
    title: "Spider-Man: Miles Morales",
    description:
      "New guy, same grind. Every Spider-Man has a story, this one’s about carving out your own legacy.",
    src: "/games/spm.png",
  },
  {
    title: "Black Myth: Wukong",
    description:
      "You are the chosen one, channel the Monkey King’s wrath and cunning in a world where legends bleed and gods fall.",
    src: "/games/bmw.png",
  },
  {
    title: "Forza Horizon 5",
    description: "Tires go brrrr, engines go rawrrr",
    src: "/games/fh5.png",
  },
  {
    title: "Drive Beyond Horizons",
    description:
      "Unleash the journey. You, the road, the car, and infinite possibilities.",
    src: "/games/dbh.png",
  },
];

export default function GameCarousel() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const dragControls = useDragControls();

  const prev = () =>
    setCurrent((prev) => (prev - 1 + games.length) % games.length);
  const next = () => setCurrent((prev) => (prev + 1) % games.length);

  const getIndex = (index: number) => {
    const diff = (index - current + games.length) % games.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -games.length + 1) return "right";
    if (diff === games.length - 1 || diff === -1) return "left";
    return "hidden";
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) {
      next();
    } else if (info.offset.x > 50) {
      prev();
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12">
      <button
        onClick={prev}
        className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#00FFCC] text-black px-3 py-2 z-10 rounded-full shadow hover:bg-[#FF4444] hover:text-white transition"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#00FFCC] text-black px-3 py-2 z-10 rounded-full shadow hover:bg-[#FF4444] hover:text-white transition"
      >
        ▶
      </button>

      <div
        className="flex justify-center items-center gap-4 overflow-hidden relative h-[350px]"
        ref={containerRef}
      >
        {games.map((game, index) => {
          const position = getIndex(index);
          if (position === "hidden") return null;

          const isActive = position === "center";

          return (
            <motion.div
              key={game.title}
              className="w-3/4 md:w-1/2 text-center absolute touch-pan-x rounded-lg bg-[#146d5b1d] shadow-lg text-pretty"
              drag="x"
              dragControls={dragControls}
              dragListener={false}
              onPointerDown={(e) => dragControls.start(e)}
              onDragEnd={handleDragEnd}
              style={{ touchAction: "none" }}
              animate={{
                x:
                  position === "left"
                    ? "-300px"
                    : position === "right"
                    ? "300px"
                    : "0px",
                scale: isActive ? 1.1 : 0.9,
                opacity: isActive ? 1 : 0.2,
                zIndex: isActive ? 2 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <div
                onPointerDown={(e) => dragControls.start(e)}
                className="cursor-grab"
              >
                {isActive ? (
                  <a
                    href={`${game.src}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={game.src}
                      alt={game.title}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover w-full h-auto shadow-lg pointer-events-none"
                    />
                  </a>
                ) : (
                  <Image
                    src={game.src}
                    alt={game.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-auto shadow-lg pointer-events-none"
                  />
                )}

                <h4 className="text-sm font-semibold mt-2 text-pretty">
                  {game.title}
                </h4>
                <p className="text-xs italic mt-1 text-pretty">
                  {game.description}
                </p>
              </div>
              <div className="lg:hidden text-center text-xs text-[#00FFCC] mt-2 select-none opacity-70 animate-pulse text-pretty">
                ← Swipe here →
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
