import Image from "next/image";
import Hero from "@/components/hero";
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import "./globals.css";
import Experience from "@/components/experience";


export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
