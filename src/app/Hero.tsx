import React from 'react';
import { motion } from "framer-motion";
import confetti from 'canvas-confetti';
import { Quantico, Noto_Sans_Mono } from 'next/font/google'

const quantico = Quantico({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

const noto = Noto_Sans_Mono({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

const Hero = () => {
  const handleConfetti = () => {
    const count = 200; // Number of confetti pieces
    const defaults = {
        origin: { y: 0.7 }, // Start from the bottom
    };

    // Colors array
    const colors = [
        '#FF5733', // Bright Red
        '#FFBD33', // Yellow
        '#DBFF33', // Light Green
        '#75FF33', // Lime
        '#33FF57', // Bright Green
        '#33FFBD', // Teal
        '#33DBFF', // Cyan
        '#3357FF', // Blue
        '#5733FF', // Violet
        '#BD33FF', // Magenta
        '#FF33B5', // Pink
    ];

    // Create confetti from left
    for (let i = 0; i < count / 2; i++) {
        confetti({
            ...defaults,
            angle: 60, // Left
            spread: 70,
            startVelocity: 30,
            particleCount: 1,
            colors: [colors[Math.floor(Math.random() * colors.length)]], // Random color
        });
    }

    // Create confetti from right
    for (let i = 0; i < count / 2; i++) {
        confetti({
            ...defaults,
            angle: 120, // Right
            spread: 70,
            startVelocity: 30,
            particleCount: 1,
            colors: [colors[Math.floor(Math.random() * colors.length)]], // Random color
        });
    }
};



  return (
    <>
    <section className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center text-white px-4 md:px-8">
        <h1 className={`${quantico.className} text-5xl md:text-7xl font-bold mb-4`}>
          BeastCodZ
        </h1>
        <p className={`${noto.className} text-2xl md:text-3xl font-light mb-8`}>
          Full Stack Developer
        </p>
        <p className={`${noto.className} text-lg md:text-xl max-w-2xl mx-auto mb-12`}>
        Building intelligent, scalable solutions that fuse creativity with code. Pushing the boundaries of full-stack development, one line at a time.
        </p>
        <motion.button
        className='inline-block bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-opacity-50'
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleConfetti}
>Greetings!</motion.button>
      </div>
    </section>
    </>
  );
};

export default Hero;
