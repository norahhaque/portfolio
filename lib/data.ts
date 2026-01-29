"use client";

import React from "react";
import { TbBrain } from "react-icons/tb";
import { GoTelescope } from "react-icons/go";
import { FaUniversity } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { TiDeviceLaptop } from "react-icons/ti";



// Navigation links
export const links = [
  { name: "Home", hash: "#home" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Hobbies", hash: "#hobbies" },
  { name: "Contact", hash: "#contact" },
] as const;

// Experiences
export const experiencesData = [
  {
    title: "Incoming Intern @ Ecolab",
    description:
    "Incoming at Ecolab Digital and Technology for Summer 2026, where I will be contributing to data-driven product, automation, and technology initiatives across the enterprise.",
    icon: React.createElement(FaCode),
    date: "May 2026 - Aug 2026",
  },
  {
    title: "SWE Intern @ Bideshi",
    description:
    "Contributing to migrating a Shopify Liquid-based platform to a new backend stack, building core functionality, integrating APIs, and reconstructing existing features. Also working with the UX team to implement redesigned interfaces.",
    icon: React.createElement(TiDeviceLaptop),
    date: "May 2026 - Aug 2026",
  },
  {
    title: "Machine Learning TA",
    description:
    "Assisted instruction for UMN's AI Hub summer course by teaching ML fundamentals including supervised learning, LLMs, and neural nets. Led coding sessions using NumPy, scikit-learn, and PyTorch.",
    icon: React.createElement(TbBrain),
    date: "May 2025 - Aug 2025",
  },
  {
    title: "Undergraduate Research Assistant",
    description:
    "Developed Python ETL pipelines using Pandas and SQLAlchemy to load telescope data into PostgreSQL. Worked on debugging and optimizing data workflows, integrating the SkyPortal API, and managing collaborative development with Git.",
    icon: React.createElement(GoTelescope),
    date: "Oct 2024 - Present",
  },
  {
    title: "Began Education",
    description:
    "Studying CS & Management at UMN, with coursework done in machine learning, data structures, and operating systems. I also direct DEI efforts with my college's student government and manage the website for my school's chapter of ACM-W.",
    icon: React.createElement(FaUniversity),
    date: "Sep 2024 - Dec 2026",
  },
] as const;

// Projects
export const projectsData = [
  {
    title: "Muakhah",
    description:
    "Releasing 2.17.2026. Working in collaboration with American activist Shaun King, Gould Studios, and an international dev team. More details to come!",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Neon Postgres",
      "Drizzle ORM",
      "GitHub Actions",
      "Jest + React Testing Library",
    ],
    imageUrl: "/muakhah.png",
    width: 400,
    height: 400,
    link: "https://muakhah.org/",
  },
  {
    title: "UMNPray",
    description:
    "A web application helping University of Minnesota students discover prayer and reflection spaces on campus as part of the Student Government's broader Wellbeing Project.",
    tags: [
      "Next.js",
      "TypeScript",
      "Sanity CMS",
      "GROQ",
      "Google Maps API",
    ],
    imageUrl: "/umnpray.png",
    width: 400,
    height: 400,
    link: "https://umnpray.org/",
  },
  {
    title: "Bideshi Site",
    description:
    "Working as a SWE intern on the site migration for Bideshi, a social media and apparel brand rooted in Bengali heritage.",
    tags: [
      "Next.js",
      "Supabase",
      "Vercel",
      "Resend",
      "AWS SES",
      "Shopify API",
      "Github Actions"
    ],
    imageUrl: "/bideshi.png",
    width: 400,
    height: 400,
    link: "https://bideshi.co/",
  },
  // {
  //   title: "SMIC Mobile App [Ongoing]",
  //   description:
  //     "Cross-platform app delivering real-time community events and prayer times, built with React Native, Expo, NativeWind, and Firebase.",
  //   tags: [
  //     "React Native",
  //     "Expo",
  //     "TypeScript",
  //     "NativeWind",
  //     "Firebase Authentication",
  //     "Firestore",
  //   ],
  //   imageUrl: "/smicApp.png",
  //   width: 400,
  //   height: 400,
  //   link: "https://github.com/norahhaque/smic-app",
  // },
  {
    title: "ACMW Chapter Website",
    description:
    "A full-stack web platform for the UMN ACMW chapter. Features interactive community features with modern animations and responsive design.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript", "Framer Motion"],
    imageUrl: "/acmWebsite.png",
    width: 400,
    height: 300,
    link: "https://acmw.umn.edu/",
  }
] as const;

// Skills
export const skillsData = {
  Languages: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "C/C++",
    "HTML",
    "CSS",
    "SQL",
    "Bash",
  ],
  
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Framer Motion",
  ],
  
  Backend: [
    "Node.js",
    "Express",
    "FastAPI",
    "APIs",
    "Firebase",
    "Database Schema Design",
    "Supabase",
    "AWS SES",
  ],
  
  Databases: [
    "PostgreSQL", 
    "Vercel",
  ],
  
  Infrastructure: [
    "Github Actions",    
  ],
  
  "Data Science": [
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
  ],
  
  "Design & Prototyping": [
    "Figma",
    "Canva",
    "Wireframing",
    "UI/UX Design Principles",
  ],
} as const;
