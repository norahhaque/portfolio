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
        <motion.section ref={ref} id="contact" className="scroll-mt-28 mb-20 sm:mb-28 mt-[20rem] w-[min(100%,30rem)] mx-auto"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, ease: "easeOut" }} viewport={{ once: true, }}>
            <SectionHeader eyebrow="Contact" title="Contact Me" />
            <p className="text-center text-lg font-light mt-4 max-w-[40rem] mx-auto text-stone-700 leading-relaxed">
                Get in touch with me directly at{" "}
                <a className="underline" href="mailto:norah.haque@gmail.com">
                    norah.haque@gmail.com
                </a>{" "}
                or through this form!
            </p>

            <form className="mt-10 flex flex-col items-center" action={async formData => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                    toast.error(error);
                    return;
                }
                toast.success("Email sent successfully!")
            }}>
                <input
                    className="h-14 px-4 w-full rounded-lg border border-black/10 px-4 outline-[#344434]"
                    type="email"
                    name='email'
                    placeholder='Your email'
                    required
                    maxLength={254}
                />
                <textarea
                    className="h-52 w-full my-3 rounded-lg border border-black/10 p-4 outline-[#344434]"
                    placeholder="Your message..."
                    name='message'
                    required
                    maxLength={5000}
                ></textarea>
                <SubmitButton />
            </form>
        </motion.section>
    )
}
