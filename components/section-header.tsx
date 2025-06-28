import { div } from 'framer-motion/client'
import React from 'react'



type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};


export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
    return (
        <>
            <div className='flex justify-center mt-20'>
                <p className='uppercase font-poppins font-semibold tracking-widest bg-gradient-to-r from-[#5b7d57] to-[#eba198] text-transparent bg-clip-text text-center'>
                    {eyebrow}
                </p>
            </div>
            <h2 className='font-poppins text-3xl text-center mt-6 text-stone-800 font-bold'>{title}</h2>
            <p className='text-center text-lg mt-4 max-w-2xl mx-auto text-stone-700 leading-relaxed'>{description}</p>
        </>
    )
}
