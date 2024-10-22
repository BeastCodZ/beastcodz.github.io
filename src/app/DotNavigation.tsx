import React, { FC, useState } from "react";
import { House, User, Folder, Wrench, Phone } from "phosphor-react";
import "./styles.css";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

interface DotNavigationProps {
  activeComponent: number;
  setActiveComponent: (index: number) => void;
}

const DotNavigation: FC<DotNavigationProps> = ({
  activeComponent,
  setActiveComponent,
}) => {
  const items = [
    { id: 1, name: "Home" },
    { id: 2, name: "Profile" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Skills" },
    { id: 5, name: "Contact" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget as HTMLButtonElement;
    const halfWidth = target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const icons = [
    <House size={24} key={1} />,
    <User size={24} key={2} />,
    <Folder size={24} key={3} />,
    <Wrench size={24} key={4} />,
    <Phone size={24} key={5} />,
  ];

  return (
    <div className="fixed bg-opacity-5 backdrop-blur-sm rounded-md bottom-0 left-1/2 transform -translate-x-1/2 mb-6 flex flex-row items-center space-x-4">
      {icons.map((icon, index) => (
        <div key={items[index].name} className="relative">
          <motion.button
            className={`flex z-20 items-center justify-center w-10 h-10 rounded-full transition-all duration-0 ${
              activeComponent === index ? "bg-slate-500" : "bg-slate-800"
            }`}
            onClick={() => setActiveComponent(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            {icon}
          </motion.button>

          <AnimatePresence>
            {hoveredIndex === index && items[index] && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ whiteSpace: "nowrap" }}
                className="absolute -top-10 z-10 flex text-xs flex-col items-center justify-center"
              >
                <div className="font-bold text-white">{items[index]?.name}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default DotNavigation;
