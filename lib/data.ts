import React from "react";
import lungDetection from "@/public/lung-classification.jpg";
import fakeNewsClassifier from "@/public/fake_news_detection.png";
import spamMessageDetection from "@/public/spam_detection.png";
import acmWebsite from "@/public/acmWebsite.png";
import { TbBrain } from "react-icons/tb";
import { GoTelescope } from "react-icons/go";
import { FaUniversity } from "react-icons/fa"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Hobbies",
    hash: "#hobbies",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Machine Learning TA",
    description:
      "Assisted instruction for UMN's AI Hub summer course by teaching ML fundamentals including supervised learning, LLMs, and neural nets. Led coding sessions using NumPy, scikit-learn, and PyTorch.",
    icon: React.createElement(TbBrain),
    date: "May 2025 - Sep 2025",
  },
  {
    title: "Undergraduate Research Assistant",
    description:
      "Built Python and SQL scripts for telescope data pipelines. Worked on image processing, automated ingestion, and Git-based version control.",
    icon: React.createElement(GoTelescope),
    date: "Oct 2024 - Present",
  },
  {
    title: "Began Education",
    description:
      "Studying CS & Management at UMN, with coursework done in machine learning and data structures. I also lead DEI effort with the CSE student board and manage the ACMW website.",
    icon: React.createElement(FaUniversity),
    date: "Sep 2024 - Dec 2026",
  },
] as const;

export const projectsData = [
  {
    title: "ACMW Chapter Website [Ongoing]",
    description:
      "A full-stack web platform for the UMN ACMW chapter. Features interactive community features with modern animations and responsive design.",
    tags: ["Next.js", "React", "MongoDB", "Tailwind", "Prisma", "TypeScript", "Framer Motion"],
    imageUrl: acmWebsite,
    link: "https://acmw.umn.edu/",
  },
  {
    title: "Lung Disease Detection",
    description:
      "Lung X-ray classifier using PyTorch and scikit-learn with logistic regression, KNN, and a custom neural net for binary and multi-class diagnosis.",
    tags: ["PyTorch", "Python", "scikit-learn", "NumPy", "MatplotLib"],
    imageUrl: lungDetection,
    link: "https://github.com/norahhaque/lung-disease-detection-ml",
  },
  {
    title: "Spam Message Detection",
    description:
      "Built an AI-powered SMS spam classifier using TF-IDF, PCA, and KNN, deployed with a full-stack FastAPI + React interface.",
    tags: ["Python", "FastAPI", "scikit-learn", "NLTK", "React", "Tailwind CSS"],
    imageUrl: spamMessageDetection,
    link: "https://spam-detection-iv7tq0who-norahs-projects-f56f9c6f.vercel.app/",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C",
  "Git",
  "Docker",
  "Linux",
  "Bash",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "REST APIs",
  "PyTorch",
  "scikit-learn",
  "Pandas",
  "NumPy",
] as const;
