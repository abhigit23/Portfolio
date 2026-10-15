import { AiFillGithub } from "react-icons/ai";
import {
  FaAddressCard,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaFileInvoice,
  FaLaptopCode,
  FaServer,
  FaUser,
} from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { TbBrandLeetcode } from "react-icons/tb";

export const resumeUrl =
  "https://docs.google.com/document/d/1CO4uzWt1nSPyb4p5abW2i-4567ytX-OCJGvoUTM6kDc";

export const profile = {
  name: "Abhijeet Bhandari",
  role: "Full Stack Developer — Node.js / React / TypeScript",
  location: "Delhi, India",
  email: "abhijeetbhandari84@gmail.com",
  about:
    "Hi, I'm Abhijeet, a full stack developer building Node.js and React applications for banks, fintech and public-sector clients.",
  summary:
    "Full stack developer with 3+ years building production Node.js and React applications for banks, fintech, and public-sector clients. I own features end-to-end — from database schema and secure REST APIs through to responsive React/Next.js interfaces. Delivered ~30% faster database queries, 15% faster API response times, and 25% less frontend build time via reusable component libraries. Comfortable working with RBAC, JWT/JOSE auth, background job processing (BullMQ/Redis), and PostgreSQL/MySQL/MongoDB.",
};

export const links = [
  { name: "About Me", icon: FaUser, link: "#about" },
  { name: "Experience", icon: FaBriefcase, link: "#experience" },
  { name: "Projects", icon: FaLaptopCode, link: "#projects" },
  { name: "Skills", icon: FaCode, link: "#skills" },
  { name: "Resume", icon: FaFileInvoice, link: resumeUrl },
  { name: "Contact", icon: FaAddressCard, link: `mailto:${profile.email}` },
];

export const socialLinks = [
  { social: AiFillGithub, link: "https://github.com/abhigit23" },
  {
    social: RiLinkedinBoxFill,
    link: "https://linkedin.com/in/abhijeet-bhandari",
  },
  { social: TbBrandLeetcode, link: "https://leetcode.com/u/abhijeet-bhandari" },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Intileo Technologies LLP",
    location: "Gurugram, Haryana",
    period: "Feb 2024 – Present",
    points: [
      "Own end-to-end delivery of full-stack modules across four enterprise/public-sector platforms (banking, fintech, government workflow systems) using React, Next.js, Node.js, Express, and TypeScript.",
      "Designed and built a modern SaaS platform (Instantgpu.ai) from scratch using PostgreSQL, Payload CMS, Drizzle ORM, and a Redis-based worker architecture for on-demand GPU pod provisioning and usage-based billing.",
      "Built background job processing with BullMQ and Redis for reliable asynchronous workflows and scheduled tasks at scale.",
      "Owned backend API development for high-traffic modules, improving response times by 15%; optimized PostgreSQL/MySQL schemas and queries, achieving ~30% performance improvement.",
      "Implemented secure authentication and authorization (JWT/JOSE, bcrypt, RBAC) across client projects, including RBI-compliant systems requiring MFA.",
      "Engineered reusable, responsive UI component libraries, cutting frontend development time by 25% across projects.",
      "Integrated third-party APIs and internal microservices to streamline cross-system data flow; introduced ESLint/Prettier/Husky standards adopted team-wide.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Tech Synergia",
    location: "Delhi, India",
    period: "Jul 2023 – Jan 2024",
    points: [
      "Built and maintained scalable Node.js/Express backend services and RESTful APIs for user management, reporting, and workflow automation used across multiple internal teams.",
      "Implemented JWT-based authentication and role-based authorization; built reusable middleware and validation layers to standardize backend practices.",
      "Collaborated with frontend and QA teams in an agile environment to ship end-to-end features and resolve production issues.",
    ],
  },
];

export const projects = [
  {
    name: "s.at — Short, Self-Destructing Pastes",
    client: "Personal project",
    period: "Sep 2026 – Present",
    description:
      "A short-URL pastebin for text and files with AES-256-GCM encryption at rest, optional in-browser PBKDF2 password protection, expiry timers, and burn-after-reading with atomic one-time reads. Supports encrypted attachments up to 100 MB via resumable multipart uploads, Redis rate limiting, and hardened security headers with a strict CSP.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Upstash Redis",
      "Vercel Blob",
    ],
    link: "https://sdotat.vercel.app",
    repo: "https://github.com/abhigit23/sdotat",
  },
  {
    name: "Cyber Fraud Reporting & Management Platform",
    client: "India Post Payments Bank",
    period: "Aug 2026 – Present",
    description:
      "Developing a scalable Fraud Reporting & Transaction Monitoring platform with concurrent worker processing, automated cron-based workflows, RBAC, real-time status management, and interactive MIS dashboards.",
  },
  {
    name: "Instantgpu.ai — GPU Cloud Platform for AI Workloads",
    period: "Mar 2026 – Sep 2026",
    description:
      "Built a full-stack SaaS platform for on-demand GPU rental (pods, serverless endpoints, fine-tuning) with real-time provisioning, usage-based billing, credit system, and an admin console.",
    link: "https://instantgpu.ai",
  },
  {
    name: "Contract Management System (CMS)",
    client: "India Post Payments Bank",
    period: "Jan 2026 – Apr 2026",
    description:
      "Built an end-to-end vendor onboarding, contract management, and PO tracking platform with RBI-compliant outsourcing reviews, secure MFA auth, and approval workflows.",
  },
  {
    name: "Stock Audit Management System (SAMS)",
    client: "South Indian Bank",
    period: "Jan 2025 – Jan 2026",
    description:
      "Digitized the bank's full stock-audit lifecycle — auditor empanelment and allocation, report submission, and closure/deviation letters — with role-based workflows spanning auditors, RMs, and reviewers.",
    link: "https://sams.southindianbank.bank.in",
  },
  {
    name: "Project Monitoring Platform (ProMPT)",
    client: "REC Limited, Public-Sector Lender",
    period: "Aug 2024 – Mar 2025",
    description:
      "Built a role-based, production-grade platform covering project capture, site visits, MIS/exception reports, dashboards, and PDF/Excel export with role-wise access control.",
    link: "https://pmgrecindia.com",
  },
];

export const skillGroups = [
  {
    group: "Languages",
    icon: FaCode,
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    group: "Frontend",
    icon: FaLaptopCode,
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Context API",
      "React Query",
      "Tailwind CSS",
      "HTML5",
      "CSS3/SCSS",
    ],
  },
  {
    group: "Backend",
    icon: FaServer,
    items: [
      "Node.js",
      "Express.js",
      "Payload CMS",
      "RESTful API design",
      "JWT/JOSE",
      "bcrypt",
      "RBAC",
      "BullMQ",
      "Redis",
    ],
  },
  {
    group: "Data & DevOps",
    icon: FaDatabase,
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Drizzle ORM",
      "Docker",
      "Git/GitHub",
      "ESLint",
      "Prettier",
      "Husky",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology, Computer Science & Engineering",
  institution: "DCRUST University, Haryana, India",
  period: "2016 – 2020",
  grade: "CGPA: 7.15",
};
