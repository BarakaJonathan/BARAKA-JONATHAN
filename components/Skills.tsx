import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Reveal, FadeIn } from './Reveal';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-forest-950/40 border-y border-gold-400/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
           <Reveal>
             <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-gold-50 tracking-wide">
              Technical <span className="text-gold-400 italic">Skills</span>
             </h2>
             <div className="h-0.5 w-16 mx-auto rounded-full bg-gold-400/40 mb-3"></div>
             <p className="text-gold-200/60 font-serif italic text-sm">Tools and technologies I use to bring ideas to life</p>
           </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up" className="h-full">
              <div 
                className="p-6 rounded-2xl bg-forest-900 border border-gold-400/10 hover:border-gold-400/35 transition-all duration-500 group h-full hover:shadow-[0_12px_40px_rgba(197,168,128,0.06)] flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-forest-800 text-gold-400 group-hover:bg-gold-400 group-hover:text-forest-950 transition-all duration-300 shadow-inner">
                  {category.icon}
                </div>
                
                <h3 className="text-lg font-serif font-semibold text-gold-50 mb-4">{category.title}</h3>
                
                <ul className="space-y-2 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2.5 text-gold-100/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};