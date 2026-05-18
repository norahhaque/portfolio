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
  { name: "About", hash: "#about" },
  { name: "Contact", hash: "#contact" },
] as const;

// Experiences
export const experiencesData = [
  {
    title: "Incoming Data & AI Engineering Intern @ Ecolab",
    description:
      "Joining Ecolab's Data and AI Engineering team for Summer 2026, with a focus on growing in data engineering, backend systems, and enterprise-scale technical workflows.",
    icon: React.createElement(FaCode),
    date: "Summer 2026",
  },
  {
    title: "Undergraduate Research Assistant",
    description:
      "Developed Python ETL pipelines using Pandas and SQLAlchemy to load telescope data into PostgreSQL. Worked on debugging and optimizing data workflows, integrating the SkyPortal API, and managing collaborative development with Git.",
    icon: React.createElement(GoTelescope),
    date: "Oct 2024 - Present",
  },
  {
    title: "SWE and UX Intern @ Bideshi",
    description:
      "Contributed to a platform migration from Shopify Liquid to a modern backend stack, including API integrations, core feature reconstruction, transactional email workflows, and redesigned user interfaces.",
    icon: React.createElement(TiDeviceLaptop),
    date: "Jan 2026 - May 2026",
  },
  {
    title: "Machine Learning TA",
    description:
      "Assisted instruction for UMN's AI Hub summer course by teaching machine learning fundamentals, including supervised learning, LLMs, and neural networks. Led coding sessions using NumPy, scikit-learn, and PyTorch.",
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
    "TypeScript",
    "JavaScript",
    "C/C++",
    "SQL",
    "Bash",
    "HTML",
    "CSS",
  ],

  "Data & Backend": [
    "Pandas",
    "SQLAlchemy",
    "PostgreSQL",
    "FastAPI",
    "Node.js",
    "Express",
    "REST APIs",
    "Database Schema Design",
  ],

  "Web Development": [
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Supabase",
    "Firebase",
  ],

  "Machine Learning": [
    "scikit-learn",
    "PyTorch",
    "TensorFlow",
    "NumPy",
    "Matplotlib",
    "Seaborn",
  ],

  "Infrastructure & Tools": ["Git", "GitHub Actions", "Vercel"],

  "Design & Prototyping": [
    "Figma",
    "Canva",
    "Wireframing",
    "UI/UX Design Principles",
  ],
} as const;
