"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "<Home>" },
  { href: "/about", label: "<About>" },
  { href: "/skills", label: "<Skills>" },
  { href: "/certifications", label: "<Certs>" },
  { href: "/projects", label: "<Projects>" },
  { href: "/education", label: "<Education>" },
  { href: "/contact", label: "<Contact>" },
  { href: "/misc", label: "<Misc>" },
];
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden fixed top-5 right-7 z-50 text-[#00FFCC] text-4xl bg-[#00ffcc07] "
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#0d0d0dd4] z-40 transform transition-transform duration-300 ease-in-out 
          ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col items-center justify-center gap-6 h-full">
          {links.map((link) => {
            const isActive =
              link.href === "/projects"
                ? pathname && pathname.toLowerCase().startsWith("/projects")
                : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-2xl transition-colors duration-300 ${
                  isActive
                    ? "text-[#FF4444] flicker"
                    : "text-[#00FFCC] group-hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop Nav */}
      <div>
        <nav className="hidden md:flex flex-col gap-2 fixed top-1/2 left-4 -translate-y-1/2 z-10">
          {links.map((link) => {
            const isActive =
              link.href === "/projects"
                ? pathname.toLowerCase().startsWith("/projects")
                : pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className="group w-full relative px-2 py-1 transition-transform hover:scale-110 text-center"
              >
                <span
                  className={`flex flex-col items-center text-sm md:text-xl transition-colors duration-300 ${
                    isActive
                      ? "text-[#FF4444] flicker"
                      : "text-[#00FFCC] group-hover:text-white"
                  }`}
                >
                  {link.label}
                  <div
                    className={`
            h-0.5 min-w-1/2 max-w-full bg-[#00FFCC] rounded transition-all duration-300
            ${
              isActive
                ? "scale-x-100 bg-[#FF4444]"
                : "scale-x-0 group-hover:scale-x-100"
            }
            origin-left
          `}
                  />
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
