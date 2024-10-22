"use client"
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine"; // Import the Engine type from tsparticles-engine
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {  // Define engine type
    await loadFull(engine);
  }, []);

  return (
      <Particles 
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#0d0d0d" }
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
            },
            number: { density: { enable: true, area: 800 }, value: 30 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}></Particles>
  );
};

export default Particle;
