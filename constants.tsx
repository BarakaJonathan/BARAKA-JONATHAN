import React from 'react';
import { Code, Database, Globe, Layers, Briefcase, Cpu, Server, Settings } from 'lucide-react';
import { Project, Experience, SkillCategory } from './types';
import erpImage from './media/Nyumbani-ERP.png';
import udomImage from './media/UDOM-Attendance.jpeg';
import magazineImage from './media/Nyumbani-Magazine.png';
import wavuviImage from './media/Wavuvi Lounge.png';
import matheostechsShopImage from './media/matheostechs shop.png';
import matheostechsWebsiteImage from './media/matheostechswebsite.png';
import emjeyImage from './media/Emjey.png';

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
    linkedin: "https://www.linkedin.com/in/baraka-jonathan-67830432a/",
    github: "https://github.com/BarakaJonathan",
    twitter: "https://x.com/barakaJona50125"
  },
  phone: {
    whatsapp: "0692 888 994",
    normal: "0692 888 994"
  }
};

export const PROJECTS: Project[] = [
  {
    id: '5',
    title: 'Matheostechs Shop',
    role: 'Full Stack Developer',
    description: 'A modern e-commerce platform for Matheostechs, featuring product catalog, shopping cart, and secure payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: matheostechsShopImage,
    liveUrl: 'https://shop.matheostechs.com',
    category: 'live'
  },
  {
    id: '6',
    title: 'Matheostechs Website',
    role: 'Full Stack Developer',
    description: 'Corporate website for Matheostechs showcasing their services, portfolio, and company information with modern design.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
    imageUrl: matheostechsWebsiteImage,
    liveUrl: 'https://matheostechs.com',
    category: 'live'
  },
  {
    id: '7',
    title: 'Emjey',
    role: 'Full Stack Developer',
    description: 'Professional business website for Emjey, featuring company services, team information, and client testimonials.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    imageUrl: emjeyImage,
    liveUrl: 'https://emjey.co.tz/',
    category: 'live'
  },
  {
    id: '4',
    title: 'Wavuvi Lounge POS & Inventory',
    role: 'Full Stack Developer',
    description: 'A comprehensive Point of Sale (POS) and Inventory Management System for Wavuvi Lounge. Includes product management, real-time sales tracking, and robust profit calculations.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    imageUrl: wavuviImage,
    liveUrl: 'https://wavuvi-lounge.vercel.app/',
    category: 'live'
  },
  {
    id: '1',
    title: 'Nyumbani Company ERP',
    role: 'Lead Full Stack Developer',
    description: 'A comprehensive management system for Nyumbani Company LTD. Features include Financial Management, CRM, HR Management for diverse departments (Graphics, Animation, Studio, Maintenance).',
    tech: ['Django', 'PostgreSQL', 'React', 'Tailwind'],
    imageUrl: erpImage,
    category: 'internal'
  },
  {
    id: '2',
    title: 'UDOM Student Attendance App',
    role: 'Sole Developer',
    description: 'A native Android application developed for UDOM to automate and track student attendance using biometric and QR integration.',
    tech: ['Java', 'Android SDK', 'SQLite', 'Firebase'],
    imageUrl: udomImage,
    githubUrl: 'https://github.com/BarakaJonathan/my-udomAttendance',
    category: 'internal'
  },
  {
    id: '3',
    title: 'Nyumbani Magazine',
    role: 'Lead Developer',
    description: 'A dedicated digital publication platform for Nyumbani Company, featuring news, showcases, and interactive content.',
    tech: ['TypeScript', 'WordPress', 'PHP', 'React'],
    imageUrl: magazineImage,
    liveUrl: 'https://nyumbani-magazine1.vercel.app',
    githubUrl: 'https://github.com/BarakaJonathan/nyumbani-magazine',
    category: 'internal'
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
