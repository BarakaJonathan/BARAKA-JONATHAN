import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Height of fixed navbar (h-20)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping
      window.history.pushState(null, "", href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen forest-bg text-gold-50 font-sans selection:bg-gold-400 selection:text-forest-950">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-forest-950/90 backdrop-blur-md border-b border-gold-400/10'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            {/* Elegant Golden Calligraphic Emblem */}
            <svg className="w-7 h-9 text-gold-400 fill-current" viewBox="0 0 100 120">
              <path d="M50 5 Q50 35 68 38 Q58 50 62 68 Q52 75 52 82 H60 V55 L65 52 V82 H72 V48 L76 45 V82 H82 V35 L86 32 V85 Q65 88 50 115 Q35 88 14 85 V32 L18 35 V82 H24 V45 L28 48 V82 H35 V52 L40 55 V82 H48 V5 Z" />
              <path d="M46 30 L50 24 L54 30 L50 36 Z" />
              <path d="M46 45 L50 39 L54 45 L50 51 Z" />
            </svg>
            <span className="text-lg font-serif tracking-widest text-gold-400 font-semibold">
              BARAKA
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative text-sm font-medium transition-colors text-gold-200 hover:text-gold-400"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-gold-400"></span>
              </a>
            ))}
          </div>

        {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gold-400 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay (Full-screen Containerized Drawer outside nav stacking context) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
           <motion.div 
             initial={{ opacity: 0, y: -30 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -30 }}
             transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
             className="md:hidden fixed inset-0 z-[9999] bg-forest-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto"
           >
             {/* Mobile Menu Header */}
             <div className="flex items-center justify-between h-20 select-none border-b border-gold-400/5">
               <div className="flex items-center gap-3">
                 <svg className="w-7 h-9 text-gold-400 fill-current" viewBox="0 0 100 120">
                   <path d="M50 5 Q50 35 68 38 Q58 50 62 68 Q52 75 52 82 H60 V55 L65 52 V82 H72 V48 L76 45 V82 H82 V35 L86 32 V85 Q65 88 50 115 Q35 88 14 85 V32 L18 35 V82 H24 V45 L28 48 V82 H35 V52 L40 55 V82 H48 V5 Z" />
                   <path d="M46 30 L50 24 L54 30 L50 36 Z" />
                   <path d="M46 45 L50 39 L54 45 L50 51 Z" />
                 </svg>
                 <span className="text-lg font-serif tracking-widest text-gold-400 font-semibold">
                   BARAKA
                 </span>
               </div>
               
               <button 
                 className="text-gold-400 hover:text-gold-300 transition-colors p-2"
                 onClick={() => setIsMobileMenuOpen(false)}
                 aria-label="Close menu"
               >
                 <X size={26} />
               </button>
             </div>

             {/* Links in Center */}
             <div className="flex flex-col gap-6 items-center justify-center my-auto py-8">
               {navLinks.map((link, idx) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + idx * 0.04, duration: 0.35 }}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-serif tracking-widest text-gold-200 hover:text-gold-400 transition-all duration-300 py-3 w-full text-center border-b border-gold-400/5 last:border-0"
                  >
                    {link.name}
                  </motion.a>
               ))}
             </div>

             {/* Mobile Menu Footer Details */}
             <div className="border-t border-gold-400/10 pt-6 text-center space-y-3 mt-auto">
               <p className="text-xs text-gold-200/60 font-serif italic">
                 {PERSONAL_INFO.title}
               </p>
               <p className="text-[10px] text-gold-400/30 font-sans tracking-widest uppercase">
                 Tanzania &bull; {PERSONAL_INFO.email}
               </p>
             </div>
           </motion.div>
        )}
      </AnimatePresence>

      {children}
    </div>
  );
};