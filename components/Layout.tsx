import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
            className="md:hidden text-gold-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
           <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] border-b border-gold-400/10 bg-forest-950/98 backdrop-blur-xl">
             <div className="flex flex-col gap-6 p-8 items-center justify-center h-full">
               {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-serif tracking-wide text-gold-200 hover:text-gold-400"
                  >
                    {link.name}
                  </a>
               ))}
             </div>
           </div>
        )}
      </nav>

      {children}
    </div>
  );
};