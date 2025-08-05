"use client";
import {
  BadgeCheck,
  Trophy,
  GraduationCap,
  AlertCircleIcon,
  ShieldCheck,
  Cpu,
  BookOpen,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  skills: string;
};
const issuerIcons: Record<string, React.ReactNode> = {
  "Google via Coursera": <BadgeCheck size={32} className="min-w-[32px]" />,
  "Harvard University via edX": <Trophy size={32} className="min-w-[32px]" />,
  Cisco: <Cpu size={32} className="min-w-[32px]" />,
  "Johnson & Johnson via Forage": (
    <BookOpen size={32} className="min-w-[32px]" />
  ),
  "LinkedIn Learning": <ShieldCheck size={32} className="min-w-[32px]" />,
};
const certs: Cert[] = [
  {
    title: "Google Cybersecurity",
    issuer: "Google via Coursera",
    date: "Aug 2023",
    skills:
      "Network Security · Risk Assessment · Python · SQL · Information Security · Cybersecurity · Threat & Vulnerability Management · Linux · Risk Management · Information Systems · Cloud Computing · Network Analyzer",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University via edX",
    date: "Jun 2025",
    skills:
      "C · CSS · SQLite · HTML · Computer Science · Flask · Python · SQL · Databases · Bootstrap",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "Jun 2025",
    skills: "Computer Hardware · Computer Hardware Troubleshooting",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco",
    date: "Jun 2025",
    skills: "Internet of Things (IoT) · Digital Transformation",
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco",
    date: "Jun 2025",
    skills: "Operating Systems",
  },
  {
    title: "Robotics and Controls Job Simulation",
    issuer: "Johnson & Johnson via Forage",
    date: "Jun 2025",
    skills: "Python",
  },
  {
    title: "Cybersecurity By Microsoft & LinkedIn",
    issuer: "LinkedIn Learning",
    date: "Jul 2025",
    skills:
      "Cybersecurity · Threat & Vulnerability Management · Information Security Awareness",
  },
  {
    title: " System Administration By Microsoft & LinkedIn",
    issuer: "LinkedIn Learning",
    date: "Jul 2025",
    skills: "System Administration · Network Administration",
  },
  {
    title: "Software Development By Microsoft & LinkedIn",
    issuer: "LinkedIn Learning",
    date: "Jun 2025",
    skills:
      "Programming · Computer Programming · Career Management · Software Development · Tech Career Skills",
  },
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "Jul 2025",
    skills: "Containerization · Docker Products",
  },
  {
    title: "GitHub Professional Certificate",
    issuer: "LinkedIn Learning",
    date: "Jun 2025",
    skills: "GitHub",
  },
];

// Group by issuer
const grouped = certs.reduce<Record<string, Cert[]>>((acc, cert) => {
  acc[cert.issuer] = acc[cert.issuer] ? [...acc[cert.issuer], cert] : [cert];
  return acc;
}, {});

const PAGE_SIZE = 2;

export default function Certs() {
  const [page, setPage] = useState(0);
  const maxPages = Math.ceil(Object.keys(grouped).length / PAGE_SIZE);

  return (
    <div className="bg-[#146d5b07] text-[#00FFCC] p-6 md:p-10 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out max-w-4xl mx-auto z-1">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start gap-4">
        <GraduationCap size={32} className="min-w-[32px]" />
        <div>
          <h3 className="text-lg font-semibold">
            &gt; cat → <span className="text-[#FF4444]">certificates.txt</span>
          </h3>
          <p className="text-sm mt-1 text-pretty">
            Validated knowledge. Backed by hands-on work, not just course completion.
          </p>
        </div>
      </div>

      {/* Grouped by issuer, paginated */}
      {Object.entries(grouped)
        .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
        .map(([issuer, certsArr]) => (
          <div key={issuer} className="mb-8 flex flex-col items-start gap-4">
            <div className="flex items-start gap-4">
              <span>{issuerIcons[issuer]}</span>
              <div>
                <h3 className="text-md font-semibold">{issuer}</h3>
                <div className="mb-2">
                  {certsArr.map((cert, idx) => (
                    <div key={idx} className="mb-2">
                      <p className="text-sm">{cert.title}</p>
                      <p className="text-xs mt-1 text-[#00ffccaa] italic">
                        {cert.skills}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Page Controls */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#00FFCC44" }}
          whileTap={{ scale: 0.95, backgroundColor: "#00FFCC66" }}
          className="px-3 py-1 rounded bg-[#00FFCC22] text-[#00FFCC] disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          ◀
        </motion.button>
        <div className="flex items-center gap-1">
          {Array.from({ length: maxPages }).map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === page ? "bg-[#00FFCC]" : "bg-[#00FFCC44]"
              } transition-all`}
            />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#00FFCC44" }}
          whileTap={{ scale: 0.95, backgroundColor: "#00FFCC66" }}
          className="px-3 py-1 rounded bg-[#00FFCC22] text-[#00FFCC] disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === maxPages - 1}
        >
          ▶
        </motion.button>
      </div>

      {/* Footer */}
      <div className="border-t border-[#00FFCC55] pt-4 text-xs text-pretty text-[#FF4444] flex items-center gap-2">
        <AlertCircleIcon size={16} />
        <span>
          Certificates prove knowledge. Building and breaking things prove mastery.
        </span>
      </div>
    </div>
  );
}
