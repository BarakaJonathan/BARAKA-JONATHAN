import React from 'react';
import { ArrowDown, Download, Terminal, ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';
import { Theme } from '../types';
import { PERSONAL_INFO } from '../constants';
import resumePdf from '../media/BARAKA_JONATHAN_PHINIAS Resume.pdf';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import matheostechsShopImage from '../media/matheostechs shop.png';
import matheostechsWebsiteImage from '../media/matheostechswebsite.png';
import emjeyImage from '../media/Emjey.png';
import wavuviImage from '../media/Wavuvi Lounge.png';

interface HeroProps {
  theme: Theme;
}

import { Reveal, FadeIn } from './Reveal';

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const isSpace = theme === 'space';

  // Live Projects Data
  const LIVE_PROJECTS = [
    {
      id: 'matheostechs-shop',
      title: 'Matheostechs Shop',
      image: matheostechsShopImage,
      url: 'https://shop.matheostechs.com',
    },
    {
      id: 'matheostechs-website',
      title: 'Matheostechs Website',
      image: matheostechsWebsiteImage,
      url: 'https://matheostechs.com',
    },
    {
      id: 'emjey',
      title: 'Emjey',
      image: emjeyImage,
      url: 'https://emjey.co.tz/',
    },
    {
      id: 'wavuvi',
      title: 'Wavuvi Lounge',
      image: wavuviImage,
      url: 'https://wavuvi-lounge.vercel.app/',
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  // Motion values for drag interactions
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-150, 150], [-15, 15]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % LIVE_PROJECTS.length);
    dragX.set(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + LIVE_PROJECTS.length) % LIVE_PROJECTS.length);
    dragX.set(0);
  };

  // Autoplay Logic
  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const getGlowColor = () => {
    if (isSpace) {
      switch (activeIndex) {
        case 0: return 'from-cyan-500/25 to-blue-500/5';
        case 1: return 'from-blue-500/25 to-indigo-500/5';
        case 2: return 'from-violet-500/25 to-purple-500/5';
        case 3: return 'from-fuchsia-500/25 to-pink-500/5';
        default: return 'from-cyan-500/25 to-blue-500/5';
      }
    } else {
      switch (activeIndex) {
        case 0: return 'from-emerald-500/25 to-teal-500/5';
        case 1: return 'from-teal-500/25 to-green-500/5';
        case 2: return 'from-green-500/25 to-emerald-500/5';
        case 3: return 'from-cyan-500/25 to-teal-500/5';
        default: return 'from-emerald-500/25 to-teal-500/5';
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className={`absolute inset-0 z-0 ${isSpace ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {/* Stars are handled by parent css class, adding extra glow here */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 md:flex-[0.6] lg:flex-[0.5] text-center md:text-left space-y-6 relative z-20 mt-8 md:mt-0">
          <Reveal>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${isSpace ? 'bg-blue-900/30 border-cyan-500/50 text-cyan-300' : 'bg-slate-800 border-slate-700 text-emerald-400'}`}>
              <Terminal size={14} />
              <span className="text-xs sm:text-sm font-medium tracking-wide">Professional Software Development</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              {PERSONAL_INFO.name.split(' ')[0]} <br />
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
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${isSpace
                  ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-900/20'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20'
                  }`}
              >
                View Projects
              </a>
              <a
                href={resumePdf}
                download="BARAKA_JONATHAN_PHINIAS_Resume.pdf"
                className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 flex items-center gap-2 ${isSpace
                  ? 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/50'
                  : 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  }`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>

        {/* Visual Element / Live Projects 3D Showcase */}
        <div className="flex-1 md:flex-[1.4] lg:flex-[1.5] w-full flex flex-col items-center justify-center mb-8 md:mb-0 relative z-10 md:-ml-20 lg:-ml-32 xl:-ml-40">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[500px] md:max-w-[640px] lg:max-w-[780px] xl:max-w-[920px] flex flex-col items-center justify-center"
          >
            {/* 3D Perspective Wrapper */}
            <div 
              className="relative w-full aspect-[16/10] flex items-center justify-center"
              style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
            >
              {/* Dynamic Aura Glow in background */}
              <div className={`absolute -inset-4 sm:-inset-8 rounded-2xl blur-[40px] sm:blur-[60px] opacity-40 transition-all duration-1000 bg-gradient-to-tr ${getGlowColor()}`} />

              {/* Cards Stack */}
              <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                {LIVE_PROJECTS.map((project, idx) => {
                  let depth = idx - activeIndex;
                  if (depth < 0) depth += LIVE_PROJECTS.length;

                  const isActive = idx === activeIndex;

                  // CSS animations for back cards (larger stable offsets to show domain names)
                  const scaleVal = 1 - depth * 0.04;
                  const yVal = -depth * 32;
                  const xVal = depth * 40;
                  const opacityVal = depth >= 3 ? 0 : 1 - depth * 0.35;
                  const zIndexVal = LIVE_PROJECTS.length - depth;

                  return (
                    <motion.div
                      key={project.id}
                      drag={isActive ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.8}
                      onDragEnd={(e, info) => {
                        if (!isActive) return;
                        const swipeThreshold = 100;
                        if (info.offset.x > swipeThreshold) {
                          handlePrev();
                        } else if (info.offset.x < -swipeThreshold) {
                          handleNext();
                        }
                      }}
                      whileTap={{ scale: isActive ? 0.98 : scaleVal }}
                      animate={{
                        scale: scaleVal,
                        y: yVal,
                        x: isActive ? undefined : xVal,
                        opacity: opacityVal,
                        zIndex: zIndexVal,
                        z: -depth * 25,
                        rotateX: 10,
                        rotateY: -14,
                        rotateZ: isActive ? undefined : 2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 24,
                      }}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        transformStyle: 'preserve-3d',
                        x: isActive ? dragX : undefined,
                        rotateZ: isActive ? dragRotate : undefined,
                        cursor: isActive ? 'grab' : 'default',
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                      className={`rounded-2xl border ${
                        isActive
                          ? (isSpace ? 'border-cyan-500/40 shadow-[0_20px_50px_rgba(6,182,212,0.25)]' : 'border-emerald-500/40 shadow-[0_20px_50px_rgba(16,185,129,0.25)]')
                          : 'border-slate-800/80 shadow-md'
                      } bg-slate-950 overflow-hidden flex flex-col`}
                    >
                      {/* Browser Title Bar Mockup */}
                      <div className="h-7 sm:h-9 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-3 select-none">
                        {/* Traffic light dots */}
                        <div className="flex gap-1.5 items-center">
                          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        {/* Mock Address Bar */}
                        <div className="w-36 sm:w-48 md:w-56 h-4 sm:h-5 bg-slate-950/60 rounded border border-slate-800/60 text-[8px] sm:text-[9px] text-slate-500 flex items-center justify-center font-mono truncate px-2">
                          {project.url.replace('https://', '')}
                        </div>
                        {/* Empty spacing for symmetry */}
                        <div className="w-10 sm:w-14" />
                      </div>

                      {/* Web Project Screenshot */}
                      <div className="flex-1 w-full overflow-hidden relative bg-slate-900">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top select-none pointer-events-none"
                        />

                        {/* Hover Overlay with Live Demo Link */}
                        {isActive && (
                          <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`absolute bottom-3 right-3 z-20 p-2 sm:p-2.5 rounded-full shadow-lg backdrop-blur-md border ${
                              isSpace
                                ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500 hover:text-white shadow-cyan-500/10'
                                : 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 hover:bg-emerald-500 hover:text-white shadow-emerald-500/10'
                            } transition-all duration-200`}
                          >
                            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Controls panel: Left/Right arrows, active dots, autoplay control */}
            <div className="flex items-center justify-center gap-4 mt-6 z-20">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className={`p-1.5 sm:p-2 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                  isSpace
                    ? 'bg-slate-900/50 border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-500'
                    : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-emerald-500 hover:text-emerald-400'
                }`}
                aria-label="Previous Project"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {LIVE_PROJECTS.map((_, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? (isSpace ? 'w-5 sm:w-6 bg-cyan-400' : 'w-5 sm:w-6 bg-emerald-500')
                          : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className={`p-1.5 sm:p-2 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
                  isSpace
                    ? 'bg-slate-900/50 border-cyan-500/30 text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-500'
                    : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-emerald-500 hover:text-emerald-400'
                }`}
                aria-label="Next Project"
              >
                <ChevronRight size={18} />
              </button>

              {/* Play / Pause Autoplay */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-1.5 sm:p-2 rounded-lg border backdrop-blur-sm transition-all duration-300 ml-1 ${
                  isSpace
                    ? 'bg-slate-900/50 border-cyan-500/30 text-cyan-400/80 hover:text-cyan-300'
                    : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:text-emerald-400'
                }`}
                title={isPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};