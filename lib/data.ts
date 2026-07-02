"use client";

import React from "react";
import { TbBrain } from "react-icons/tb";
import { GoTelescope } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { TiDeviceLaptop } from "react-icons/ti";
import { FaUniversity } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

// Navigation links
export const links = [
  { name: "Home", hash: "#home" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

// Experiences
export const experiencesData = [
  {
    title: "Intern @ Ecolab",
    description: "On Ecolab's Master Data Management team for Summer 2026.",
    icon: React.createElement(FaCode),
    date: "Summer 2026",
  },
  {
    title: "Machine Learning Fellow @ Cornell Tech",
    description:
      "Selected from 3,000+ applicants for the year-long Break Through Tech AI Program in machine learning engineering and applied AI, featuring an industry-partnered project and mentorship from ML engineers.",
    icon: React.createElement(BsStars),
    date: "June 2026 - June 2027",
  },
  {
    title: "SWE and UX Intern @ Bideshi",
    description:
      "Contributed to a platform migration from Shopify Liquid to a modern backend stack, including API integrations, core feature reconstruction, transactional email workflows, and redesigned user interfaces.",
    icon: React.createElement(TiDeviceLaptop),
    date: "Jan 2026 - May 2026",
  },
  {
    title: "Undergraduate Research Assistant",
    description:
      "Developed Python ETL pipelines using Pandas and SQLAlchemy to load telescope data into PostgreSQL. Worked on debugging and optimizing data workflows, integrating the SkyPortal API, and managing collaborative development with Git.",
    icon: React.createElement(GoTelescope),
    date: "Oct 2024 - Oct 2025",
  },
  {
    title: "Machine Learning TA",
    description:
      "Supported PhD-led instruction for 90+ high school students at UMN's AI Hub summer course, demonstrating deep neural networks, CNNs, generative models, transformers, and reinforcement learning using PyTorch, TensorFlow, and scikit-learn.",
    icon: React.createElement(TbBrain),
    date: "May 2025 - Aug 2025",
  },
  {
    title: "B.S. Computer Science @ University of Minnesota",
    description:
      "Studying Computer Science with coursework in machine learning, data structures, operating systems, and software engineering. I also direct DEI efforts within CSE student government and manage the website for UMN ACM-W.",
    icon: React.createElement(FaUniversity),
    date: "Sep 2024 - Dec 2026",
  },
] as const;

// Projects
export const projectsData = [
  {
    title: "Muakhah",
    description:
      "Working in collaboration with American activist Shaun King, charity partner Humaniti, Gould Studios, and an international dev team. More details to come!",
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
      "A web application helping University of Minnesota students discover prayer and reflection spaces on campus as part of Student Government's broader Wellbeing Project. Built with structured location data, a CMS-backed content model, and an interactive map experience.",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "GROQ", "Google Maps API"],
    imageUrl: "/umnpray.png",
    width: 400,
    height: 400,
    link: "https://umnpray.org/",
  },
  {
    title: "Bideshi Site",
    description:
      "A platform migration project for Bideshi, a social media and apparel brand rooted in Bengali heritage. Work includes backend restructuring, API integrations, feature reconstruction, and redesigned user interfaces.",
    tags: [
      "Next.js",
      "Supabase",
      "Vercel",
      "Resend",
      "AWS SES",
      "Shopify API",
      "GitHub Actions",
    ],
    imageUrl: "/bideshi.png",
    width: 400,
    height: 400,
    link: "https://bideshi.co/",
  },
  {
    title: "ACMW Chapter Website",
    description:
      "A web platform for the UMN ACM-W chapter, built to support chapter information, community-facing content, responsive layouts, and maintainable site updates.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript", "Framer Motion"],
    imageUrl: "/acmWebsite.png",
    width: 400,
    height: 300,
    link: "https://acmw.umn.edu/",
  },
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

  "Frontend / Frameworks": [
    "React",
    "Next.js",
    "React Native",
    "Framer Motion",
  ],

  "Backend / APIs": ["Node.js", "Express", "FastAPI", "Firebase", "REST APIs"],

  "Databases / Data Engineering": [
    "Snowflake",
    "PostgreSQL",
    "SQLAlchemy",
    "Database Schema Design",
    "ETL Pipelines",
  ],

  "Data Science / ML": [
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
  ],

  "DevOps / Tools": [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Conda",
    "GitHub Actions",
  ],

  "Design / Prototyping": [
    "Figma",
    "Canva",
    "Wireframing",
    "UI/UX Design Principles",
  ],
} as const;
