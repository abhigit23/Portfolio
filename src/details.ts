import { AiFillGithub } from "react-icons/ai";
import {
  FaAddressCard,
  FaBlog,
  FaCss3,
  FaFileInvoice,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaUser,
} from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

export const links = [
  { name: "About Me", icon: FaUser },
  { name: "Portfolio", icon: FaLaptopCode },
  {
    name: "Resume",
    icon: FaFileInvoice,
    link: "https://docs.google.com/document/d/1M9gpn6ibBa0IhDza7ccbVBCMKJ6riPmv_GeqE_Jg8HE",
  },
  { name: "Blog", icon: FaBlog },
  { name: "Contact", icon: FaAddressCard },
];

export const socialLinks = [
  { social: AiFillGithub, link: "https://github.com/abhigit23" },
  { social: TbBrandLeetcode, link: "https://leetcode.com/abhijeetbhandari84" },
  {
    social: RiLinkedinBoxFill,
    link: "https://linkedin.com/in/abhijeet-bhandari",
  },
];

export const skills = [
  {
    skill: "JavaScript",
    icon: FaJs,
    description:
      "Extensive knowledge on topics like JavaScript Modules, ES6+ syntax, promises, AJAX, Object-Oriented Programming, DOM manipulation and more.",
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
    description:
      "Build robust and scalable RESTful APIs using technologies like express.js, secure authorization and authentication using JWT tokens.",
  },
  {
    skill: "ReactJs",
    icon: FaReact,
    description:
      "Experience on buliding web app on react using hooks, conditional rendering, resuable components, libraries like react router, axios and more. ",
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    description:
      "Knowledge on saving RESTful APIs data in a No SQL database using mongoose library with express router. Fetching data in JSON and use on projects.",
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    FaCss3,
    description:
      "Build react projects type safe so that we find errors in development phase using interface, Types, Generics, type narrowing, classes, union, intersection etc.",
  },
  {
    skill: "HTML",
    icon: FaHtml5,
    description:
      "The skeleton of web. Keen knowledge from the basics to advance, know about HTML tags, classes, id, attributes. Worked with HTML forms, tables.",
  },
  {
    skill: "CSS",
    icon: FaCss3,
    description:
      "The build block of web. Proficient in responsive design using flexbox and grid, keframes animations, using variables to make css selectors resuable.",
  },
  {
    skill: "Npm",
    icon: FaNpm,
    description:
      "Manage project dependencies using npm, package.json to add info of projects, npm scripts, npm commands to manage packages, dependencies etc.",
  },
];

export const profileDetails = [
  {
    name: "Abhijeet Bhandari",
    role: "MERN Stack Developer",
    about:
      "Hi, my name is Abhijeet Bhandari and I'm a MERN Stack developer. Welcome to my personal website!",
    description:
      "Self motivated MERN Stack Developer with a passion for creating efficient and scalable solutions. Proficient in JavaScript, Node.js, React.js and MongoDB. Strong understanding of RESTful API design principles.",
    myJob:
      "I design, develop, and deploy web applications using the MERN Stack, which is a collection of JavaScript technologies that includes React, Node.js, Express, and MongoDB. Engaging user interfaces that drive user adoption and retention. Successfully delivered numerous MERN Stack projects, resulting in significant performance improvements, increased user engagement, and enhanced business outcomes.",
  },
];
