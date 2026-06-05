"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function Particle() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-20"
      options={{
        fullScreen: false,
        fpsLimit: 30,
        particles: {
          color: {
            value: "#FF4444",
          },
          links: {
            enable: true,
            color: "#FF4444",
            distance: 120,
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: {
              min: 0.02,
              max: 0.15,
            },
          },
          size: {
            value: {
              min: 0.5,
              max: 1.5,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
            onClick: {
              enable: false,
            },
          },
        },
        detectRetina: false,
      }}
    />
  );
}