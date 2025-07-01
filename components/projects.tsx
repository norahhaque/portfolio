"use client";

import React from "react";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project-card";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  return (
    <section ref={ref} id="projects" className="mt-[18rem] scroll-mt-10">
      <SectionHeader
        eyebrow="Ideas in Action"
        title="My Projects"
        description="These projects helped me grow by transforming ideas into practical solutions through code, ML, and design."
      />
      <div>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-8 mt-8 group"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
