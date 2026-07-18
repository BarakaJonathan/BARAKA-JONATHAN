import React from 'react';
import { Project } from '../types';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Reveal, FadeIn } from './Reveal';

export const Projects: React.FC = () => {
  const liveProjects = PROJECTS.filter(p => p.category === 'live');
  const internalProjects = PROJECTS.filter(p => p.category === 'internal');

  const renderProjectCard = (project: Project, idx: number) => (
    <FadeIn key={project.id} delay={idx * 0.1} direction="up" className="h-full">
      <div 
        className="group relative overflow-hidden rounded-2xl transition-all duration-500 h-full flex flex-col bg-forest-900 border border-gold-400/10 hover:border-gold-400/35 hover:shadow-[0_12px_40px_rgba(197,168,128,0.06)]"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden shrink-0">
          <div className="absolute inset-0 z-10 opacity-20 group-hover:opacity-0 transition-opacity bg-forest-950"></div>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-serif font-semibold text-gold-50 mb-1">{project.title}</h3>
          <p className="text-[10px] font-bold font-sans uppercase tracking-widest mb-4 text-gold-400">
            {project.role}
          </p>
          <p className="text-gold-100/70 text-sm mb-6 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 rounded bg-forest-800 text-gold-200 border border-gold-400/10 text-[9px] font-medium font-sans uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-5 border-t pt-4 border-gold-400/10 mt-auto">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-300 hover:text-gold-400 transition-colors flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wider uppercase"
              >
                <FaGithub size={15} /> Code
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5 text-xs font-sans font-semibold tracking-wider uppercase"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-gold-400/10 pb-6">
          <div className="w-full md:w-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-2 text-gold-50 tracking-wide">
                Featured <span className="text-gold-400 italic">Projects</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gold-200/60 font-serif italic text-sm">A selection of my recent work and academic contributions.</p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a 
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold font-sans tracking-widest uppercase text-gold-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
            >
              View GitHub Profile &rarr;
            </a>
          </Reveal>
        </div>

        {/* Live Projects Section */}
        {liveProjects.length > 0 && (
          <div className="mb-20">
            <Reveal>
              <h3 className="text-xl font-serif font-semibold mb-8 text-gold-400/90 tracking-wider">
                Live Platforms
              </h3>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveProjects.map((project, idx) => renderProjectCard(project, idx))}
            </div>
          </div>
        )}

        {/* Internal Projects Section */}
        {internalProjects.length > 0 && (
          <div>
            <Reveal>
              <h3 className="text-xl font-serif font-semibold mb-8 text-gold-400/90 tracking-wider">
                Internal Systems
              </h3>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internalProjects.map((project, idx) => renderProjectCard(project, idx))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};