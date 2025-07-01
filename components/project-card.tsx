"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { GoArrowUpRight } from "react-icons/go";
import BlurText from "./ui/BlurText";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "motion/react";

type ProjectProps = typeof projectsData[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="w-full"
    >
      <section className="bg-[#dbddd3] border border-black/5 rounded-xl overflow-hidden w-full max-w-4xl mx-auto flex flex-col sm:flex-row relative transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Image */}
        <div className="w-full sm:w-[45%] relative">
          <Image
            src={imageUrl}
            alt="Project screenshot"
            width={800}
            height={600}
            quality={95}
            className="w-full h-full object-cover sm:absolute sm:top-10 sm:right-[-9rem] sm:w-[22rem] sm:rounded-lg sm:shadow-2xl 
            group-hover:scale-[1.04] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2
            sm:transition sm:duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 px-5 py-6 sm:px-8 sm:py-10 sm:w-[55%]">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-700 dark:text-white/70 leading-relaxed">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-[#243522]/90 px-2.5 py-1 text-[0.6rem] uppercase tracking-wide text-white rounded-full"
              >
                <BlurText
                  text={tag}
                  delay={100}
                  animateBy="letters"
                  direction="top"
                />
              </li>
            ))}
          </ul>

          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-slate-900 h-8 px-4 rounded-lg font-medium text-sm inline-flex items-center justify-center gap-2 mt-4 hover:bg-slate-100 transition">
              <span>Check Out Here</span>
              <GoArrowUpRight />
            </button>
          </a>
        </div>
      </section>
    </motion.div>
  );
}
