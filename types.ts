import React from 'react';

export type Theme = 'dark' | 'space';

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}