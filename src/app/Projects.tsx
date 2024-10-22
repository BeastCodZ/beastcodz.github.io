"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";
import Image from "next/image";
const projectsData = [
  {
    title: "Streamdecky",
    description: "A scalable web-based tool, enabling users to create and manage over 20 customizable buttons which can be executed over the network.",
    technologies: ["Next.js", "Node.js"],
    link: "https://github.com/BeastCodZ/streamdecky/",
    image: "/streamdecky.jpg",
    status: "live",
  },
  {
    title: "BeastLock",
    description: "An advanced security system with built-in passkey authentication and a seamless UI, ensuring privacy and security for digital assets.",
    technologies: ["Electron", "MongoDB", "Node.js"],
    link: "https://github.com/BeastCodZ/beastlock/",
    image: "https://wallpapers.com/images/hd/cyber-security-codes-and-padlocks-louj44tbnhinx0e4.jpg",
    status: "in development",
  },
  {
    title: "WinKey",
    description: "A lightweight, Electron-based authenticator that streamlines Windows login and multi-factor authentication for developers and power users.",
    technologies: ["Electron", "Node.js"],
    link: "https://github.com/BeastCodZ/winkey/",
    image: "https://i.pinimg.com/736x/c5/99/22/c599223b857cb28289e80a1fbbfc2330.jpg",
    status: "in development",
  },
  {
    title: "Real-Time Whiteboard",
    description: "A collaborative, real-time whiteboard tool designed for teams, featuring kanban boards and advanced analytics integration.",
    technologies: ["React", "Socket.IO", "Node.js"],
    link: "https://github.com/BeastCodZ/whiteboard/",
    image: "https://www.overflow.design/src/assets/img/nw/interview.png",
    status: "in development",
  },
  {
    title: "TaskerPro",
    description: "A task management system equipped with time tracking, Kanban boards, and detailed project analytics for optimized productivity.",
    technologies: ["React", "Express", "MongoDB"],
    link: "https://github.com/BeastCodZ/taskerpro/",
    image: "https://c0.wallpaperflare.com/preview/389/615/630/business-businessman-communication-concept.jpg",
    status: "in development",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [projectsPerPage, setProjectsPerPage] = useState(1);

  const updateProjectsPerPage = () => {
    if (window.innerWidth < 640) {
      setProjectsPerPage(1); // Mobile
    } else if (window.innerWidth < 768) {
      setProjectsPerPage(2); // Small screens (sm)
    } else {
      setProjectsPerPage(3); // Medium and large screens (lg)
    }
  };

  React.useEffect(() => {
    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const handlePageChange = (direction: "next" | "prev") => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "next") {
          return Math.min(prevIndex + projectsPerPage, projectsData.length - projectsPerPage);
        }
        return Math.max(prevIndex - projectsPerPage, 0);
      });
      setIsAnimating(false);
    }, 300); // Adjust duration to match the animation duration
  };

  const currentProjects = projectsData.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-foreg px-8 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="w-full max-w-6xl">
        <div
          className={`grid gap-8 ${
            currentProjects.length === 1 ? "grid-cols-1" : currentProjects.length === 2 ? "grid-cols-2" : "grid-cols-3"
          } justify-items-center`}
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-sm"
              initial={{ opacity: 0 }} // Start invisible
              animate={{ opacity: isAnimating ? 0 : 1 }} // Fade in/out
              transition={{ duration: 0.3 }} // Animation duration
            >
              <Image 
  src={project.image} 
  alt={project.title} 
  className="w-full h-40 object-cover" 
  height={160}
  width={213}
/>

              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
                <p className="text-sm text-gray-300 mb-4">Tech: {project.technologies.join(", ")}</p>
                {project.status === "in development" ? (
                  <p className="text-yellow-500">In Development</p>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-8 w-full max-w-6xl">
        <motion.button
          onClick={() => handlePageChange("prev")}
          className={`flex justify-center items-center w-12 h-12 bg-zinc-600 ${
            currentIndex === 0 ? "opacity-0 cursor-not-allowed" : "hover:bg-zinc-800"
          } rounded-full`}
          disabled={currentIndex === 0}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <CaretLeft size={24} className="text-white" />
        </motion.button>
        <motion.button
          onClick={() => handlePageChange("next")}
          className={`flex justify-center items-center w-12 h-12 bg-zinc-600 ${
            currentIndex + projectsPerPage >= projectsData.length ? "opacity-0 cursor-not-allowed" : "hover:bg-zinc-800"
          } rounded-full`}
          disabled={currentIndex + projectsPerPage >= projectsData.length}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <CaretRight size={24} className="text-white" />
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
