'use client';

import Image from 'next/image';
import { motion } from "motion/react";
import { Typewriter } from 'react-simple-typewriter';
import BlurText from "@/components/ui/BlurText";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaGoodreadsG } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';

export default function Hero() {
    const { ref } = useSectionInView('Home', 0.5);

    return (
        <section ref={ref} id="home" className="relative mt-40 px-6 sm:px-12 max-w-6xl mx-auto scroll-mt-60">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                
                <motion.div
                    className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"
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
                <div className="w-full max-w-xl text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-stone-700 font-poppins leading-tight mb-4">
                            <Typewriter
                                words={['Norah Haque']}
                                loop={1}
                                typeSpeed={100}
                            />
                        </h1>
                        <BlurText
                            text="I'm a junior at the University of Minnesota studying Computer Science & Management! I develop full-stack solutions with a focus on real-world impact and responsible AI. Outside of code, you'll find me running through nature trails, creating music, or deep in a book!"
                            delay={40}
                            animateBy="words"
                            direction="top"
                            className="text-lg text-slate-600 font-poppins"
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.1 }}
                    >
                        <Link
                            href="#contact"
                            className='group bg-[#f2998f] text-white text-md px-7 py-3 flex hover:bg-[#fcb1a9] items-center gap-2 rounded-full shadow-sm hover:shadow-md transition outline-none focus:scale-110 hover:scale-110 active:scale-105'>
                            Contact <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                        </Link>

                        <a
                            href="/resume.pdf"
                            className='group bg-white text-[#243522] border border-[#243522]/30 hover:border-[#243522]/60 text-md px-7 py-3 flex items-center gap-2 rounded-full transition-all duration-200 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105'
                            download>
                            Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/norahhaque/"
                            target="_blank"
                            className='bg-white text-[#243522] border border-[#243522]/30 hover:border-[#243522]/60 text-lg p-4 flex items-center gap-2 rounded-full transition-all duration-200 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105'>
                            <BsLinkedin />
                        </a>

                        <a
                            href="https://github.com/norahhaque"
                            target="_blank"
                            className='bg-white text-[#243522] border border-[#243522]/30 hover:border-[#243522]/60 text-lg p-4 flex items-center rounded-full transition-all duration-200 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105'>
                            <FaGithubSquare />
                        </a>

                        <a
                            href="https://www.goodreads.com/norahhaque"
                            target="_blank"
                            className='bg-white text-[#243522] border border-[#243522]/30 hover:border-[#243522]/60 text-lg p-4 flex items-center rounded-full transition-all duration-200 shadow-sm outline-none focus:scale-110 hover:scale-110 active:scale-105'>
                            <FaGoodreadsG />
                        </a>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
