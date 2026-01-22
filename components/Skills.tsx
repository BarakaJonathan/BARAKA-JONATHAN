import React from 'react';
import { Theme } from '../types';
import { SKILL_CATEGORIES } from '../constants';

export const Skills: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isSpace = theme === 'space';

  return (
    <section id="skills" className={`py-20 ${isSpace ? 'bg-blue-950/20' : 'bg-slate-900/50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Technical <span className={isSpace ? 'text-cyan-400' : 'text-emerald-500'}>Skills</span>
           </h2>
           <p className="text-slate-400">Tools and technologies I use to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-2xl transition-all duration-300 group ${
                isSpace 
                  ? 'bg-slate-900/60 border border-blue-800 hover:border-cyan-400' 
                  : 'bg-slate-800 border border-slate-700 hover:border-emerald-500'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                isSpace 
                  ? 'bg-blue-900/50 text-cyan-400 group-hover:bg-cyan-900/30' 
                  : 'bg-slate-700 text-emerald-400 group-hover:bg-emerald-900/20'
              }`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full ${isSpace ? 'bg-cyan-500' : 'bg-emerald-500'}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};