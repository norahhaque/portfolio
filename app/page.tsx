import "./globals.css";
import Hero from "@/components/hero";
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Experience from "@/components/experience";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
