import React from 'react';

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <>
      <div className="flex justify-center mt-16">
        <p className="uppercase font-poppins font-semibold tracking-wider bg-gradient-to-r from-[#5b7d57] to-[#eba198] text-transparent bg-clip-text text-center text-[0.75rem]">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-poppins text-2xl text-center mt-5 text-stone-800 font-bold">
        {title}
      </h2>
      <p className="text-center text-sm mt-3 max-w-xl mx-auto text-stone-700 leading-snug">
        {description}
      </p>
    </>
  );
}
