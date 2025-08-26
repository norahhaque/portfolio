"use client";

import React from "react";
import SectionHeader from "./section-header";
import { skillsData } from "@/lib/data";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.75);

  return (
    <section
      ref={ref}
      id="skills"
      className="my-[6rem] scroll-mt-12 sm:mb-32 w-full"
    >
      <div className="max-w-[45rem] mx-auto flex flex-col items-center text-center px-3">
        <SectionHeader eyebrow="My Toolbox" title="Skills" />

        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="w-full mt-8">
            <p className="uppercase font-poppins font-semibold tracking-wider text-stone-600 text-[0.8rem] mb-2">
              {category}
            </p>
            <ul className="flex flex-wrap justify-center gap-1.5 text-base text-stone-800">
              {(skills as readonly string[]).map((skill, index) => (
                <motion.li
                  key={index}
                  variants={fadeInVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="bg-white border border-black/[0.1] rounded-lg px-4 py-2 hover:scale-110"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
