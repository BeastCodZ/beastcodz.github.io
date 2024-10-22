"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import DotNavigation from "./DotNavigation";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./navbar";

const components = [
  { key: "Hero", component: Hero },
  { key: "About", component: About },
  { key: "Projects", component: Projects },
  { key: "Skills", component: Skills },
  { key: "Contact", component: Contact },
];

export default function Page() {
  const [activeComponent, setActiveComponent] = useState(0);

  return (
    <>
      <Navbar />
      <div className="h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={components[activeComponent].key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {React.createElement(components[activeComponent].component)}
          </motion.div>
        </AnimatePresence>
        <DotNavigation
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
      </div>
    </>
  );
}
