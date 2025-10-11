import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from 'react-hot-toast';
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],

})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Norah | Personal Portfolio",
  description: "Norah is a computer science student at the University of Minnesota with interests in ML and Full Stack Development.",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} ${poppins.variable} bg-white text-gray-950`}>
        <div className="bg-[#8d7863]/80 absolute top-[-4vh] right-[-4vw] h-[60vh] w-[60vw] rounded-full blur-[16rem] -z-10" />
        <div className="bg-white absolute top-[-4vh] left-[-4vw] h-[60vh] w-[60vw] rounded-full blur-[12rem] -z-10" />
        <ActiveSectionContextProvider>
          <div className="overflow-x-hidden">
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </div>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}