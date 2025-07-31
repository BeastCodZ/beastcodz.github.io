"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useDragControls, PanInfo } from "framer-motion";

const photos = [
  { file: "1_IQOO.jpg", landscape: true },
  { file: "2_IQOO.jpg" },
  { file: "3_IQOO.jpg" },
  { file: "4_IQOO.jpg" },
  { file: "5_IQOO.jpg" },
  { file: "6_IQOO.jpg" },
  { file: "7_IQOO.jpg" },
  { file: "8_IQOO.jpg" },
];

function getDevice(file: string) {
  return file.startsWith("IQOO") ? "iQOO Z6 Pro 5G" : "iPhone XS Max";
}

export function ScrollGallery() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();

  const prev = () =>
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  const next = () => setCurrent((prev) => (prev + 1) % photos.length);

  const getIndex = (index: number) => {
    const diff = (index - current + photos.length) % photos.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -photos.length + 1) return "right";
    if (diff === photos.length - 1 || diff === -1) return "left";
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
        className="relative flex justify-center items-center gap-4 overflow-hidden h-[400px]"
        ref={containerRef}
      >
        {photos.map((photo, index) => {
          const position = getIndex(index);
          if (position === "hidden") return null;
          const isActive = position === "center";

          const isPortrait =
            photo.landscape === undefined ? true : !photo.landscape;
          const width = isPortrait ? 300 : 400;
          const height = 300;

          return (
            <motion.div
              key={photo.file}
              className="text-center absolute touch-pan-x rounded-lg bg-[#146d5b1d] shadow-lg text-pretty"
              drag="x"
              dragControls={dragControls}
              dragListener={false}
              onDragEnd={handleDragEnd}
              animate={{
                x:
                  position === "left"
                    ? "-300px"
                    : position === "right"
                    ? "300px"
                    : "0px",
                scale: isActive ? 1 : 0.4,
                opacity: isActive ? 1 : 0.2,
                zIndex: isActive ? 2 : 1,
              }}
              transition={{ duration: 0.4 }}
              style={{ touchAction: "none" }}
            >
              <div
                onPointerDown={(e) => dragControls.start(e)}
                className="cursor-grab"
              >
                <div
                  onPointerDown={(e) => dragControls.start(e)}
                  className="cursor-grab"
                >
                  {isActive ? (
                    <a
                      href={`/photography/${photo.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={`/photography/${photo.file}`}
                        alt={`Photo ${index + 1}`}
                        width={width}
                        height={height}
                        className="rounded-lg shadow-lg"
                      />
                    </a>
                  ) : (
                    <Image
                      src={`/photography/${photo.file}`}
                      alt={`Photo ${index + 1}`}
                      width={width}
                      height={height}
                      className="rounded-lg shadow-lg"
                    />
                  )}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs bg-[#0000006e] text-[#00FFCC] px-2 py-0.5 rounded text-pretty">
                    {getDevice(photo.file)}
                    {isActive && (
                      <div className="lg:hidden text-center text-xs text-[#00FFCC] mt-2 select-none opacity-70 animate-pulse text-pretty">
                        ← Swipe here →
                      </div>
                    )}
                  </span>
                </div>

                <span className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs bg-[#0000006e] text-[#00FFCC] px-2 py-0.5 rounded text-pretty">
                  {getDevice(photo.file)}
                  <div className="lg:hidden text-center text-xs text-[#00FFCC] mt-2 select-none opacity-70 animate-pulse text-pretty">
                    ← Swipe here →
                  </div>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
