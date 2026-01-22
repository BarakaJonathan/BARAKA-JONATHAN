import React from 'react';
import { Theme } from '../types';
import { PERSONAL_INFO } from '../constants';
import { Award, BookOpen, User } from 'lucide-react';

import { Reveal, FadeIn } from './Reveal';

export const About: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isSpace = theme === 'space';
  
  const cards = [
    { 
      icon: <BookOpen className={isSpace ? 'text-cyan-400' : 'text-emerald-500'} />, 
      title: 'Education', 
      desc: `${PERSONAL_INFO.education.degree} from ${PERSONAL_INFO.education.university} (${PERSONAL_INFO.education.year}).` 
    },
    { 
      icon: <Award className={isSpace ? 'text-purple-400' : 'text-amber-500'} />, 
      title: 'Excellence', 
      desc: 'Known for Professional Documentation in Management, Programming, and Requirements Analysis.' 
    },
    { 
      icon: <User className={isSpace ? 'text-blue-400' : 'text-teal-500'} />, 
      title: 'Leadership', 
      desc: 'Proficient in Organizational and Project Management.' 
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
           <Reveal>
             <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isSpace ? 'text-white' : 'text-slate-100'}`}>
              About <span className={isSpace ? 'text-cyan-400' : 'text-emerald-500'}>Me</span>
             </h2>
             <div className={`h-1 w-20 mx-auto rounded-full ${isSpace ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gradient-to-r from-emerald-500 to-teal-600'}`}></div>
           </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Reveal delay={0.2}>
              <h3 className="text-2xl font-semibold text-white">
                A journey from <span className={isSpace ? 'text-cyan-400' : 'text-emerald-400'}>Dodoma</span> to the Digital World.
              </h3>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-slate-400 leading-relaxed">
                I am {PERSONAL_INFO.name}, a passionate Computer Science graduate from the University of Dodoma ({PERSONAL_INFO.education.year}). 
                My journey in tech is driven by a desire to build efficient systems that solve real-world problems.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-slate-400 leading-relaxed">
                From developing the <strong>Student Attendance Management System</strong> for my university to architecting the 
                full internal ERP for <strong>Nyumbani Company</strong>, I strive to merge technical proficiency in Python and JavaScript 
                with solid project management principles.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className={`p-4 rounded-lg border-l-4 ${isSpace ? 'bg-blue-900/20 border-cyan-500' : 'bg-slate-800 border-emerald-500'}`}>
                <p className="italic text-slate-300">"Technology is best when it brings people together and organizes the chaos."</p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6">
            {cards.map((card, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)} direction="left">
                <div 
                  className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                    isSpace 
                      ? 'bg-slate-900/50 border border-blue-900/50 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                      : 'bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-emerald-500/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isSpace ? 'bg-blue-950' : 'bg-slate-900'}`}>
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-100 mb-1">{card.title}</h4>
                      <p className="text-sm text-slate-400">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};