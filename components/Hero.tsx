import React from 'react';
import { ArrowDown, Download, ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import resumePdf from '../media/BARAKA_JONATHAN_PHINIAS Resume.pdf';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import matheostechsShopImage from '../media/matheostechs shop.png';
import matheostechsWebsiteImage from '../media/matheostechswebsite.png';
import emjeyImage from '../media/Emjey.png';
import wavuviImage from '../media/Wavuvi Lounge.png';

import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
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
  const [lastActiveIndex, setLastActiveIndex] = React.useState<number | null>(null);
  const [direction, setDirection] = React.useState<'next' | 'prev' | null>(null);

  // Motion values for drag interactions
  const dragX = useMotionValue(0);
  const dragRotate = useTransform(dragX, [-150, 150], [-15, 15]);

  const handleNext = () => {
    setLastActiveIndex(activeIndex);
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % LIVE_PROJECTS.length);
    dragX.set(0);
  };

  const handlePrev = () => {
    setLastActiveIndex(activeIndex);
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + LIVE_PROJECTS.length) % LIVE_PROJECTS.length);
    dragX.set(0);
  };

  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  // Determine transition animations (card flying out, going to back, and restacking)
  const getAnimateValues = (idx: number) => {
    let depth = idx - activeIndex;
    if (depth < 0) depth += LIVE_PROJECTS.length;

    const isActive = idx === activeIndex;
    const scaleVal = 1 - depth * 0.04;
    const yVal = -depth * 32;
    const xVal = depth * 40;
    const opacityVal = depth >= 3 ? 0 : 1 - depth * 0.35;
    const zIndexVal = LIVE_PROJECTS.length - depth;

    const defaultValues = {
      scale: scaleVal,
      y: yVal,
      x: isActive ? undefined : xVal,
      opacity: opacityVal,
      zIndex: zIndexVal,
      z: -depth * 25,
      rotateX: 10,
      rotateY: -14,
      rotateZ: isActive ? undefined : 2,
    };

    // Card deal next: active card flies to the left out of the stack, and drops into the back of the deck
    if (direction === 'next' && idx === lastActiveIndex && depth === LIVE_PROJECTS.length - 1) {
      return {
        ...defaultValues,
        x: [0, -340, xVal],
        y: [0, -40, yVal],
        z: [20, 80, -75],
        scale: [1, 1.05, scaleVal],
        rotateZ: [2, -22, 2],
        rotateX: [10, 5, 10],
        rotateY: [-14, -5, -14],
        opacity: [1, 0.9, opacityVal],
        transition: {
          duration: 0.65,
          ease: "easeInOut",
        }
      };
    }

    // Card deal prev: back card flies out to the right and lands on top of the deck
    if (direction === 'prev' && isActive && lastActiveIndex !== null) {
      const prevX = 3 * 40;
      const prevY = -3 * 32;
      const prevScale = 1 - 3 * 0.04;

      return {
        ...defaultValues,
        x: [prevX, prevX + 220, 0],
        y: [prevY, prevY - 30, 0],
        z: [-75, 80, 0],
        scale: [prevScale, 1.05, 1],
        rotateZ: [2, 22, 2],
        rotateX: [10, 5, 10],
        rotateY: [-14, -5, -14],
        opacity: [0.3, 0.9, 1],
        transition: {
          duration: 0.65,
          ease: "easeInOut",
        }
      };
    }

    return defaultValues;
  };

  const getGlowColor = () => {
    return 'from-gold-400/10 to-transparent';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Skyline Silhouette and Subtle Radial Gradient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        
        {/* City Skyline Silhouette (matching the reference image) */}
        <svg className="absolute bottom-0 left-0 w-full h-[35vh] opacity-[0.06] text-gold-400 pointer-events-none z-0" viewBox="0 0 1440 300" preserveAspectRatio="none" fill="currentColor">
          <path d="M 0 300 
                   L 0 250 L 30 250 L 30 300 
                   L 50 300 L 50 180 L 100 180 L 100 120 L 105 120 L 105 180 L 110 180 L 110 300 
                   L 140 300 L 140 220 L 190 220 L 190 300 
                   L 220 300 L 220 140 L 230 110 L 240 140 L 250 140 L 250 300 
                   L 280 300 L 280 80 L 290 80 L 290 50 L 295 10 L 300 50 L 300 80 L 310 80 L 310 300 
                   L 350 300 L 350 190 L 390 190 L 390 300 
                   L 420 300 L 420 230 L 460 230 L 460 300 
                   L 480 300 L 480 90 L 510 50 L 540 90 L 540 300 
                   L 570 300 L 570 200 L 610 200 L 610 300 
                   L 640 300 L 640 150 L 690 150 L 690 300 
                   L 710 300 L 710 70 L 715 70 L 715 30 L 717 10 L 720 30 L 720 70 L 730 70 L 730 300 
                   L 760 300 L 760 210 L 810 210 L 810 300 
                   L 840 300 L 840 130 L 850 100 L 860 130 L 880 130 L 880 300 
                   L 910 300 L 910 170 L 960 170 L 960 300 
                   L 990 300 L 990 80 L 1000 80 L 1005 30 L 1010 80 L 1020 80 L 1020 300 
                   L 1050 300 L 1050 220 L 1100 220 L 1100 300 
                   L 1130 300 L 1130 140 L 1170 140 L 1170 300 
                   L 1200 300 L 1200 60 L 1205 60 L 1205 10 L 1210 60 L 1220 60 L 1220 300 
                   L 1250 300 L 1250 180 L 1290 180 L 1290 300 
                   L 1320 300 L 1320 240 L 1370 240 L 1370 300 
                   L 1400 300 L 1400 110 L 1440 110 L 1440 300 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 md:flex-[0.6] lg:flex-[0.5] text-center md:text-left space-y-6 relative z-20 mt-8 md:mt-0">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/20 bg-forest-900/40 text-gold-300 font-sans backdrop-blur-sm select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest font-semibold font-sans">Professional Software Development</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-light text-gold-50 leading-none tracking-tight">
              Baraka <br />
              <span className="font-serif font-normal italic text-gold-400 block mt-3">
                Jonathan Phinias
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-gold-200 max-w-2xl font-light font-serif italic">
              {PERSONAL_INFO.title}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-gold-100/70 max-w-lg leading-relaxed text-sm sm:text-base font-light">
              {PERSONAL_INFO.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 font-sans">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-lg font-bold tracking-wider uppercase text-xs bg-gold-400 text-forest-950 hover:bg-gold-300 transition-all duration-300 shadow-[0_4px_20px_rgba(197,168,128,0.15)] hover:shadow-[0_4px_25px_rgba(197,168,128,0.25)]"
              >
                View Projects
              </a>
              <a
                href={resumePdf}
                download="BARAKA_JONATHAN_PHINIAS_Resume.pdf"
                className="px-8 py-3.5 rounded-lg font-bold tracking-wider uppercase text-xs border border-gold-400/40 text-gold-400 hover:text-gold-200 hover:bg-gold-400/10 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={16} />
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
                      animate={getAnimateValues(idx)}
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
                          ? 'border-gold-400/40 shadow-[0_20px_50px_rgba(197,168,128,0.12)]'
                          : 'border-gold-400/10 shadow-md'
                      } bg-forest-900 overflow-hidden flex flex-col`}
                    >
                      {/* Browser Title Bar Mockup */}
                      <div className="h-7 sm:h-9 bg-forest-950 border-b border-gold-400/10 flex items-center justify-between px-3 select-none">
                        {/* Traffic light dots */}
                        <div className="flex gap-1.5 items-center">
                          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold-400/20" />
                          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold-400/40" />
                          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold-400/60" />
                        </div>
                        {/* Mock Address Bar */}
                        <div className="w-36 sm:w-48 md:w-56 h-4 sm:h-5 bg-forest-900/60 rounded border border-gold-400/15 text-[8px] sm:text-[9px] text-gold-300/60 flex items-center justify-center font-mono truncate px-2">
                          {project.url.replace('https://', '')}
                        </div>
                        {/* Empty spacing for symmetry */}
                        <div className="w-10 sm:w-14" />
                      </div>

                      {/* Web Project Screenshot */}
                      <div className="flex-1 w-full overflow-hidden relative bg-forest-950">
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
                            className="absolute bottom-3 right-3 z-20 p-2 sm:p-2.5 rounded-full shadow-lg backdrop-blur-md border bg-forest-950/90 border-gold-400/30 text-gold-300 hover:bg-gold-400 hover:text-forest-950 shadow-gold-500/10 transition-all duration-200"
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
                className="p-1.5 sm:p-2 rounded-lg border border-gold-400/20 backdrop-blur-sm transition-all duration-300 bg-forest-900/50 text-gold-300 hover:bg-gold-400/15 hover:border-gold-400 hover:text-gold-200"
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
                          ? 'w-5 sm:w-6 bg-gold-400'
                          : 'w-1.5 bg-gold-400/30 hover:bg-gold-400/60'
                      }`}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="p-1.5 sm:p-2 rounded-lg border border-gold-400/20 backdrop-blur-sm transition-all duration-300 bg-forest-900/50 text-gold-300 hover:bg-gold-400/15 hover:border-gold-400 hover:text-gold-200"
                aria-label="Next Project"
              >
                <ChevronRight size={18} />
              </button>

              {/* Play / Pause Autoplay */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 sm:p-2 rounded-lg border border-gold-400/20 backdrop-blur-sm transition-all duration-300 ml-1 bg-forest-900/50 text-gold-400 hover:text-gold-200"
                title={isPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold-400/40">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};