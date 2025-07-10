'use client';

import Image from 'next/image';
import { motion } from "motion/react";
import { Typewriter } from 'react-simple-typewriter';
import BlurText from "@/components/ui/BlurText";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaGoodreadsG } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Hero() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const { ref } = useSectionInView('Home', 0.5);

    return (
        <section ref={ref} id="home" className="relative mt-32 px-4 sm:px-8 max-w-5xl mx-auto scroll-mt-60">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                
                <motion.div
                    className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image
                        src="/profile.jpeg"
                        alt="Norah Haque"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover rounded-full shadow-lg"
                        priority
                    />
                </motion.div>

                {/* Text + Buttons */}
                <div className="w-full max-w-lg text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-stone-700 font-poppins leading-snug mb-3">
                            <Typewriter
                                words={['Norah Haque']}
                                loop={1}
                                typeSpeed={100}
                            />
                        </h1>
                        <BlurText
                            text="I'm a junior at the University of Minnesota studying Computer Science & Management! I care about building tech that matters, with a focus on full-stack development and responsible AI. Outside of code, you'll find me involved in local politics, out on a run outside, or deep in a book!"
                            delay={40}
                            animateBy="words"
                            direction="top"
                            className="text-sm text-stone-600 font-poppins"
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center md:justify-start items-center gap-3.5 mt-5"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.1 }}
                    >
                        <Link
                            href="#contact"
                            className='group bg-[#f2998f] text-white text-sm px-6 py-2.5 flex hover:bg-[#fcb1a9] items-center gap-2 rounded-full shadow-sm hover:shadow-md transition outline-none focus:scale-110 hover:scale-110 active:scale-105'
                            onClick={() => {
                                setActiveSection("Contact");
                                setTimeOfLastClick(Date.now());
                            }}>
                            Contact <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                        </Link>

                        <a
                            href="/resume.pdf"
                            className='group bg-white text-[#243522] border border-[#243522]/30 hover:border-[#243522]/60 text-sm px-6 py-2.5 flex items-center gap-2 rounded-full transition-all duration-200 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105'
                            download>
                            Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/norahhaque/"
                            target="_blank"
                            className='bg-white text-[#243522] border border-[#243522]/30 hover:border-[#243522]/60 text-base p-3.5 flex items-center gap-2 rounded-full transition-all duration-200 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105'>
                            <BsLinkedin />
                        </a>

                        <a
                            href="https://github.com/norahhaque"
                            target="_blank"
                            className='bg-white text-[#243522] border border-[#243522]/30 hover:border-[#243522]/60 text-base p-3.5 flex items-center rounded-full transition-all duration-200 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105'>
                            <FaGithubSquare />
                        </a>

                        <a
                            href="https://www.goodreads.com/norahhaque"
                            target="_blank"
                            className='bg-white text-[#243522] border border-[#243522]/30 hover:border-[#243522]/60 text-base p-3.5 flex items-center rounded-full transition-all duration-200 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105'>
                            <FaGoodreadsG />
                        </a>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
