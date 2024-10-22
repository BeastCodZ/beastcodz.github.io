// skills.tsx
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";

const skillsData = [
  {
    category: "Front-End",
    skills: [
      {
        skill: "JavaScript",
        level: "Expert",
        icon: <FaJs />,
        proficiency: 100,
        projects: ["Portfolio Website", "Real-Time Collaborative Whiteboard"],
      },
      {
        skill: "React",
        level: "Intermediate",
        icon: <FaReact />,
        proficiency: 75,
        projects: ["Management Dashboard", "Portfolio Website"],
      },
      {
        skill: "HTML",
        level: "Expert",
        icon: <FaHtml5 />,
        proficiency: 100,
        projects: ["Portfolio Website", "Various Projects"],
      },
      {
        skill: "CSS",
        level: "Expert",
        icon: <FaCss3Alt />,
        proficiency: 90,
        projects: ["Portfolio Website", "Various Projects"],
      },
      {
        skill: "Tailwind CSS",
        level: "Intermediate",
        icon: <FaCss3Alt />,
        proficiency: 80,
        projects: ["Portfolio Website", "Management Dashboard"],
      },
    ],
  },
  {
    category: "Back-End",
    skills: [
      {
        skill: "Node.js",
        level: "Intermediate",
        icon: <FaNodeJs />,
        proficiency: 70,
        projects: ["BeastLock", "Management Dashboard"],
      },
      {
        skill: "Express.js",
        level: "Intermediate",
        icon: <FaNodeJs />,
        proficiency: 70,
        projects: ["BeastLock", "Management Dashboard"],
      },
      {
        skill: "Python",
        level: "Intermediate",
        icon: <FaPython />,
        proficiency: 65,
        projects: ["Google Colab Integration"],
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        skill: "MySQL",
        level: "Intermediate",
        icon: <FaDatabase />,
        proficiency: 65,
        projects: ["BeastLock", "Various Projects"],
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
        icon: <FaDatabase />,
        proficiency: 70,
        projects: ["BeastLock", "Real-Time Collaborative Whiteboard"],
      },
    ],
  },
];

export default skillsData;
