"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";
import skillsData from "./skillsData";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [categoryPerPage, setCategoryperPage] = useState(1);

  const updateCategoryPerPage = () => {
    if (window.innerWidth < 640) {
      setCategoryperPage(1);
    } else if (window.innerWidth < 768) {
      setCategoryperPage(2);
    } else {
      setCategoryperPage(3);
    }
  };

  React.useEffect(() => {
    updateCategoryPerPage();
    window.addEventListener("resize", updateCategoryPerPage);
    return () => window.removeEventListener("resize", updateCategoryPerPage);
  }, []);

  const handlePageChange = (direction: "next" | "prev") => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "next") {
          return Math.min(
            prevIndex + categoryPerPage,
            skillsData.length - categoryPerPage
          );
        }
        return Math.max(prevIndex - categoryPerPage, 0);
      });
      setIsAnimating(false);
    }, 300);
  };

  const currentCategory = skillsData.slice(
    currentIndex,
    currentIndex + categoryPerPage
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-foreg px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Technical Arsenel</h2>
      <div className="w-full max-w-6xl mx-auto px-4">
        <div
          className={`grid gap-8 ${
            currentCategory.length === 1
              ? "grid-cols-1"
              : currentCategory.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {currentCategory.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 max-w-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimating ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-slate-800 to-slate-900 p-4 text-center shadow-md">
                {category.category}
              </h2>
              <ul className="p-4 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex justify-between items-center text-gray-300 bg-gray-700 rounded-md p-2 transition-colors duration-300 hover:bg-gray-600"
                  >
                    <div className="flex items-center">
                      <span className="mr-2 text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.skill}</span>
                    </div>
                    <span className="text-gray-400">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-8 w-full max-w-6xl">
        <motion.button
          onClick={() => handlePageChange("prev")}
          className={`flex justify-center items-center w-12 h-12 bg-zinc-600 ${
            currentIndex === 0
              ? "opacity-0 cursor-not-allowed"
              : "hover:bg-zinc-800"
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
            currentIndex + categoryPerPage >= skillsData.length
              ? "opacity-0 cursor-not-allowed"
              : "hover:bg-zinc-800"
          } rounded-full`}
          disabled={currentIndex + categoryPerPage >= skillsData.length}
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
