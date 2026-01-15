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
  width,
  height,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-2 sm:mb-6 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="bg-[#e3d8cf] sm:max-w-[36rem] max-w-[20rem] border border-black/5 rounded-lg overflow-hidden sm:pr-6 relative transition sm:group-odd:pl-6 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="w-full bg-[#e3d8cf] pt-3 pb-6 px-4 sm:pl-8 sm:pr-2 sm:pt-8 sm:max-w-[45%] flex flex-col h-full sm:group-odd:ml-[15rem]">
          <h3 className="text-xl font-semibold text-[#4d3729]">{title}</h3>
          <p className="mt-1.5 mb-3 text-sm leading-relaxed text-[#4d3729]">
            {description}
          </p>
          <ul className="flex flex-wrap mt-3 gap-1.5 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-[#8d7863] px-2.5 py-0.5 text-[0.55rem] uppercase tracking-wide text-white rounded-full dark:text-white/70"
                key={index}
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

          <a href={link} target="_blank">
            <button className="bg-[#a94e43] text-white h-7 w-full rounded-lg font-medium text-sm inline-flex items-center justify-center gap-2 mt-6 hover:bg-[#8d3d34] transition-colors">
              <span>Check Out Here</span>
              <GoArrowUpRight />
            </button>
          </a>
        </div>

        <Image
          src={imageUrl}
          width={width}
          height={height}
          alt="Project I built"
          quality={95}
          className="
    block mx-auto h-[14rem] w-full object-cover sm:h-auto sm:w-[22rem]
    sm:absolute sm:block sm:top-14 sm:-right-36 sm:rounded-t-lg sm:shadow-2xl transition
    sm:group-hover:scale-[1.04] sm:group-hover:-translate-x-2.5 sm:group-hover:translate-y-2.5 sm:group-hover:-rotate-2
    sm:group-odd:group-hover:translate-x-2.5 sm:group-odd:group-hover:translate-y-2.5 sm:group-odd:group-hover:rotate-2
    sm:group-odd:right-[initial] sm:group-odd:-left-36
  "
        />
      </section>
    </motion.div>
  );
}