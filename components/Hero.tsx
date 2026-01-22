import React from 'react';
import { ArrowDown, Download, Terminal } from 'lucide-react';
import { Theme } from '../types';
import { PERSONAL_INFO } from '../constants';
import profileImage from '../media/baraka_profile.jpeg';

interface HeroProps {
  theme: Theme;
}

import { Reveal, FadeIn } from './Reveal';

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const isSpace = theme === 'space';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className={`absolute inset-0 z-0 ${isSpace ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
         {/* Stars are handled by parent css class, adding extra glow here */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <Reveal>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${isSpace ? 'bg-blue-900/30 border-cyan-500/50 text-cyan-300' : 'bg-slate-800 border-slate-700 text-emerald-400'}`}>
              <Terminal size={14} />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Professional Software Development</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              {PERSONAL_INFO.name.split(' ')[0]} <br/>
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${isSpace ? 'from-cyan-400 to-blue-600' : 'from-emerald-400 to-teal-600'}`}>
                {PERSONAL_INFO.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-light">
              {PERSONAL_INFO.title}
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-slate-400 max-w-lg leading-relaxed text-sm sm:text-base">
              {PERSONAL_INFO.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a 
                href="#projects"
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSpace 
                    ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-900/20' 
                    : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20'
                }`}
              >
                View Projects
              </a>
              <button 
                className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 flex items-center gap-2 ${
                  isSpace 
                    ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/50' 
                    : 'border-slate-600 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
          </Reveal>
        </div>

        {/* Visual Element / Profile Image Placeholder */}
        <div className="flex-1 relative flex justify-center w-full max-w-[320px] md:max-w-none">
            <FadeIn delay={0.2} direction="right">
              <div className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center ${isSpace ? 'animate-float' : ''}`}>
                 {/* Decorative Circles */}
                 <div className={`absolute inset-0 rounded-full border-2 border-dashed ${isSpace ? 'border-cyan-500/20' : 'border-emerald-500/20'} animate-spin-slow`}></div>
                 <div className={`absolute inset-4 rounded-full border border-solid ${isSpace ? 'border-blue-500/30' : 'border-slate-600/30'}`}></div>
                 
                 {/* Image */}
                 <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative z-10 bg-slate-900 flex items-center justify-center">
                     <img 
                        src={profileImage}
                        alt="Baraka Jonathan Phinias" 
                        className="absolute inset-0 w-full h-full object-cover"
                     />
                 </div>
              </div>
            </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};