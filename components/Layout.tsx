import React, { useState, useEffect } from 'react';
import { Theme } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSpace = theme === 'space';

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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'space' : 'dark');
  };

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
    <div className={`min-h-screen transition-colors duration-500 ${
      isSpace 
        ? 'bg-slate-950 space-bg text-blue-50' 
        : 'bg-slate-950 text-slate-200'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? (isSpace ? 'bg-slate-950/80 backdrop-blur-md border-b border-blue-900/30' : 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800')
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-tighter">
            BARAKA<span className={isSpace ? 'text-cyan-400' : 'text-emerald-500'}>.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group relative text-sm font-medium transition-colors hover:text-white ${
                  isSpace ? 'text-slate-300' : 'text-slate-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isSpace ? 'bg-cyan-400' : 'bg-emerald-500'
                }`}></span>
              </a>
            ))}
            <div className="pl-4 border-l border-slate-700">
               <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
           <div className={`md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] border-b backdrop-blur-xl ${
             isSpace ? 'bg-slate-900/95 border-blue-900' : 'bg-slate-900/95 border-slate-800'
           }`}>
             <div className="flex flex-col gap-6 p-8 items-center justify-center h-full">
               {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-2xl font-medium text-slate-300 hover:text-white"
                  >
                    {link.name}
                  </a>
               ))}
               <div className="pt-8 border-t border-slate-800 w-full flex flex-col items-center gap-4">
                 <span className="text-sm text-slate-500">Switch Theme</span>
                 <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
               </div>
             </div>
           </div>
        )}
      </nav>

      {children}
    </div>
  );
};