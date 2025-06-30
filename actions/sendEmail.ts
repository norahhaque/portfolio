"use server"


import { getErrorMessage } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get('message') as string;
    const email = formData.get('email') as string;
    let data;

    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'norah.haque@gmail.com',
            subject: 'Message from contact form',
            replyTo: email,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                email: email as string,
            }),
        });
    } catch (error: unknown) {
        return { error: getErrorMessage(error) };
    }
    return {
        data
    };
    
}
