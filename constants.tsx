import React from 'react';
import { Code, Database, Globe, Layers, Briefcase, Cpu, Server, Settings } from 'lucide-react';
import { Project, Experience, SkillCategory, Education } from './types';
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
  dateOfBirth: "2nd March, 2003",
  nationality: "Tanzanian",
  languages: "English and Swahili",
  presentEmployer: "Matheos Techs Company Limited",
  email: "barakajonathan128@gmail.com",
  location: "Tanzania",
  portfolio: "https://my-portifolio-phinias.vercel.app/",
  social: {
    linkedin: "https://www.linkedin.com/in/baraka-jonathan-67830432a/",
    github: "https://github.com/BarakaJonathan",
    twitter: "https://x.com/barakaJona50125"
  },
  phone: {
    whatsapp: "+255(0)692 888 994",
    normal: "+255(0)712 282 566"
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
    company: 'Matheos Techs Company Limited',
    role: 'Full Stack Web Developer',
    period: 'March 2026 - Current',
    description: 'Corporate Internal Management System, E-commerce Platform, Inventory System, CRM, HRMS, Client websites and Web applications.',
    highlights: [
      'Architecting and developing the Internal Management System to streamline daily company operations and employee workflows.',
      'Building a full-featured E-commerce system, including shopping cart functionalities, secure payment gateway integration, and user authentication.',
      'Developing an automated Inventory System with real-time stock tracking, automated alerts, and detailed reporting capabilities.',
      'Designing responsive, user-friendly frontend interfaces using modern web frameworks.',
      'Creating and managing robust backend architectures and RESTful APIs to ensure seamless communication between all three systems.',
      'Optimizing database structures and queries to handle high traffic and ensure data integrity.',
      'Overseeing system deployments, cloud server maintenance, and ongoing technical support.',
      'Designing and Developing the Clients websites using web technologies like react, Vue, Django and Laravel.'
    ],
    achievements: [
      'Successfully launched the company\'s E-commerce platform, establishing a reliable digital sales channel.',
      'Centralized and automated core business operations, significantly reducing manual data entry through the Internal Management System.',
      'Eliminated stock discrepancies and improved supply chain tracking via the custom Inventory System.',
      'Enhanced overall software security, system scalability, and application load speeds.',
      'Successfully designed, developed and deployed clients\' websites and web applications example, UVIWADA and Emjey.'
    ]
  },
  {
    id: '2',
    company: 'Nyumbani Solutions Tanzania Limited',
    role: 'Software Developer and Systems Analyst',
    period: 'July 2025 - January 2026',
    description: 'Corporate Software Applications and Deployment.',
    highlights: [
      'Leading the collection and elicitation of user and stakeholder requirements.',
      'Analyzing systems and architecting the business workflow.',
      'Designing and developing custom web applications (managing frontend and back-end).',
      'Overseeing the deployment of the software.',
      'Providing ongoing technical refinements.',
      'Attending stakeholder and team correspondence meetings.'
    ],
    achievements: [
      'Successfully defined core functionalities and objectives of company software.',
      'Ensured the software aligns with operational goals and user needs.',
      'Deploying the Company Internal Management Software.',
      'Maintained highly scalable and efficient application platforms.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    institution: 'University of Dodoma (UDOM)',
    degree: 'Bachelor\'s Degree in Computer Science',
    period: 'October 2022 – July 2025',
    details: 'Second class Lower division'
  },
  {
    id: '2',
    institution: 'Galanos Secondary School',
    degree: 'Advanced Certificate of Secondary Education',
    period: 'July 2020 – May 2022',
    details: 'Division 2 points 10'
  },
  {
    id: '3',
    institution: 'Semkiwa Secondary School',
    degree: 'Ordinary Level Certificate of Secondary Education',
    period: 'January 2016 – November 2019',
    details: 'Division 1 points 12'
  },
  {
    id: '4',
    institution: 'Kilimani Primary School',
    degree: 'Primary School Education',
    period: 'January 2007 – November 2015',
    details: 'Grade B'
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
