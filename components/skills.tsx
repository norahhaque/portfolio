"use client"

import React from 'react'
import SectionHeader from './section-header'
import { skillsData } from '@/lib/data'
import { motion } from "motion/react"
import { useSectionInView } from '@/lib/hooks'

const fadeInVariants = {
    initial: {
        opacity: 0,
        y: 100
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
    const { ref } = useSectionInView('Skills', 0.75);
    return (
        <section ref={ref} id="skills" className="my-[8rem] scroll-mt-15 sm:mb-40 w-full">
            <div className="max-w-[53rem] mx-auto flex flex-col items-center text-center">
                <SectionHeader eyebrow="My Toolbox" title="Skills" />
                <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800 mt-8">
                    {skillsData.map((skill, index) => (
                        <motion.li
                            key={index}
                            variants={fadeInVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 hover:scale-110"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>

    )
}
