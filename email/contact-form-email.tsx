import React from 'react'
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from '@react-email/components';

type ContactFormEmailProps = {
    message: string
    email: string
}

export default function ContactFormEmail({
    message, email
}: ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Tailwind>
            <Body className='bg-[#959c92] text-white'>
                <Container>
                    <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
                        <Heading className="leading-tight text-[#434741]">You recieved the following message from the contact form!</Heading>
                        <Text className='text-black'>{message}</Text>
                        <Hr />
                        <Text>The sender's email is: {email} </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
