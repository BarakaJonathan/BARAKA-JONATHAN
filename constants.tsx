import React from 'react';
import { Code, Database, Globe, Layers, Briefcase, Cpu, Server, Settings } from 'lucide-react';
import { Project, Experience, SkillCategory } from './types';
import erpImage from './media/Nyumbani-ERP.png';
import udomImage from './media/UDOM-Attendance.jpeg';
import magazineImage from './media/Nyumbani-Magazine.png';

export const PERSONAL_INFO = {
  name: "Baraka Jonathan Phinias",
  title: "Full Stack & DevOps Specialist",
  tagline: "Building robust systems with Python, React, and Modern Web Technologies.",
  education: {
    degree: "BSc in Computer Science",
    university: "University of Dodoma",
    year: "2025",
  },
  email: "barakajonathan128@gmail.com",
  location: "Tanzania",
  social: {
    linkedin: "#",
    github: "https://github.com/BarakaJonathan",
    twitter: "#"
  },
  phone: {
    whatsapp: "0692 888 994",
    normal: "0712 282 566"
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nyumbani Company ERP',
    role: 'Lead Full Stack Developer',
    description: 'A comprehensive management system for Nyumbani Company LTD. Features include Financial Management, CRM, HR Management for diverse departments (Graphics, Animation, Studio, Maintenance).',
    tech: ['Django', 'PostgreSQL', 'React', 'Tailwind'],
    imageUrl: erpImage
  },
  {
    id: '2',
    title: 'UDOM Student Attendance App',
    role: 'Sole Developer',
    description: 'A native Android application developed for UDOM to automate and track student attendance using biometric and QR integration.',
    tech: ['Java', 'Android SDK', 'SQLite', 'Firebase'],
    imageUrl: udomImage,
    githubUrl: 'https://github.com/BarakaJonathan/my-udomAttendance'
  },
  {
    id: '3',
    title: 'Nyumbani Magazine',
    role: 'Lead Developer',
    description: 'A dedicated digital publication platform for Nyumbani Company, featuring news, showcases, and interactive content.',
    tech: ['TypeScript', 'WordPress', 'PHP', 'React'],
    imageUrl: magazineImage,
    liveUrl: 'https://nyumbani-magazine1.vercel.app',
    githubUrl: 'https://github.com/BarakaJonathan/nyumbani-magazine'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Nyumbani Company Tanzania Ltd',
    role: 'Full Stack Developer',
    period: '2023 - Present',
    description: 'Working with a dynamic startup environment to build internal tools and client-facing products.',
    highlights: [
      'Developed the Full Management System (ERP) from scratch.',
      'Collaborated with Graphics and Animation departments for web assets.',
      'Managed requirement analysis for system development projects.',
      'Implemented Networking solutions for the Maintenance department.'
    ]
  },
  {
    id: '2',
    company: 'Startup Incubation',
    role: 'Junior Developer Intern',
    period: '2022 - 2023',
    description: 'Assisted in developing MVPs for local startups.',
    highlights: [
      'Worked on backend logic using Node.js.',
      'Assisted in database schema design with MongoDB.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: ["Python", "Django", "Node.js", "Express.js", "REST APIs"],
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Frontend Development",
    skills: ["TypeScript", "React", "Tailwind CSS", "HTML5/CSS3"],
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: "Database Management",
    skills: ["PostgreSQL", "MongoDB", "Database Design", "ORM"],
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "DevOps & Infrastructure",
    skills: ["Docker", "CI/CD Pipelines", "Linux Servers", "Cloud Hosting", "Network Security"],
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "Management & Soft Skills",
    skills: ["Project Management", "Requirements Analysis", "Documentation", "Org. Management"],
    icon: <Briefcase className="w-6 h-6" />
  }
];
