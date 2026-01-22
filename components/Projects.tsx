import React from 'react';
import { Theme } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isSpace = theme === 'space';

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white">
              Featured <span className={isSpace ? 'text-cyan-400' : 'text-emerald-500'}>Projects</span>
            </h2>
            <p className="text-slate-400">A selection of my recent work and academic contributions.</p>
          </div>
          <button className={`text-sm font-semibold hover:underline ${isSpace ? 'text-cyan-400' : 'text-emerald-500'}`}>
            View GitHub Profile &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                isSpace 
                  ? 'bg-slate-900/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] border border-blue-900/30' 
                  : 'bg-slate-800 hover:shadow-xl hover:shadow-emerald-900/10 border border-slate-700'
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 z-10 opacity-30 group-hover:opacity-0 transition-opacity ${isSpace ? 'bg-blue-900' : 'bg-slate-900'}`}></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${isSpace ? 'text-cyan-500' : 'text-emerald-500'}`}>
                  {project.role}
                </p>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className={`px-3 py-1 rounded-full text-[10px] font-medium ${
                        isSpace 
                          ? 'bg-blue-950 text-cyan-300 border border-blue-800' 
                          : 'bg-slate-700 text-slate-300 border border-slate-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t pt-4 border-slate-700/50">
                  <a 
                    href={project.githubUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.liveUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm transition-colors ${isSpace ? 'text-cyan-400 hover:text-cyan-300' : 'text-emerald-500 hover:text-emerald-400'}`}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};