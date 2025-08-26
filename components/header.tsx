"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { links } from "@/lib/data";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 px-3 max-w-[92vw] sm:px-0 sm:top-4">
        <motion.div
          className="absolute inset-0 h-full w-full sm:h-[2.9rem] sm:rounded-full border border-white/30 bg-white/50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />

        <nav className="relative py-1.5 hidden sm:flex">
          <ul className="flex items-center justify-center gap-x-4 text-[0.82rem] px-5 font-sans font-medium text-stone-500">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex text-slate-800 items-center relative justify-center px-2.5 py-1.5 hover:text-white rounded-full hover:bg-[#959c92]/60 transition",
                    {
                      "bg-[#959c92]/60 text-white": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="fixed top-2.5 left-2.5 flex items-center sm:hidden z-[1000]">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-stone-600 hover:text-[#243522] text-[1.35rem] transition"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              key="mobile-menu"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-1.5 left-0 w-44 max-w-[calc(100vw-1rem)] rounded-lg bg-white/90 backdrop-blur-md shadow-md p-3 flex flex-col items-start gap-2.5 text-[0.95rem] text-stone-600 z-[998]"
            >
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    href={link.hash}
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-left hover:text-[#243522] transition font-light font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
