"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { links } from "@/lib/data";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 px-4 w-auto max-w-[95vw] w-fit sm:px-0 sm:top-6">
        <motion.div
          className="absolute inset-0 h-full w-full sm:h-[3.25rem] sm:rounded-full border border-white/30 bg-white/50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />

        <nav className="relative py-2 hidden sm:flex">
          <ul className="flex items-center justify-center gap-x-5 text-[0.9rem] px-6 font-sans font-medium text-stone-500">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx("flex text-slate-800 items-center relative justify-center px-3 py-2 hover:text-white rounded-full hover:bg-[#959c92]/60 transition", {
                    "bg-[#959c92]/60 text-white": activeSection === link.name,
                  })}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name)
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

      <div className="fixed top-3 left-3 flex items-center sm:hidden z-[1000]">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-stone-600 hover:text-[#243522] text-2xl transition"
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
              className="absolute top-full mt-2 left-0 w-48 rounded-xl bg-white/90 backdrop-blur-md shadow-md p-4 flex flex-col items-start gap-3 text-base text-stone-600 z-[998]"
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
