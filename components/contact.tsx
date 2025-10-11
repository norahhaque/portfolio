"use client";

import React from 'react';
import SectionHeader from './section-header';
import { motion } from "motion/react";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-16 sm:mb-24 mt-[16rem] w-[min(100%,26rem)] mx-auto px-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <SectionHeader eyebrow="Contact" title="Contact Me" />

      <p className="text-center text-sm font-light mt-3 max-w-[36rem] mx-auto text-stone-700 leading-snug">
        Get in touch with me directly at{" "}
        <a className="underline" href="mailto:norah.haque@gmail.com">
          norah.haque@gmail.com
        </a>{" "}
        or through this form!
      </p>

      <form
        className="mt-8 flex flex-col items-center w-full"
        action={async formData => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-12 px-3 w-full rounded-md border border-black/10 outline-[#a94e43] text-sm"
          type="email"
          name="email"
          placeholder="Your email"
          required
          maxLength={254}
        />
        <textarea
          className="h-40 w-full my-2.5 rounded-md border border-black/10 p-3 outline-[#a94e43] text-sm"
          placeholder="Your message..."
          name="message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}