import React from 'react';
import { Moon, Rocket } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
        ${theme === 'space' ? 'bg-cyan-900 ring-cyan-500' : 'bg-slate-700 ring-emerald-500'}
      `}
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        className={`
          inline-block h-8 w-8 transform rounded-full bg-white transition duration-300 ease-in-out shadow-lg flex items-center justify-center
          ${theme === 'space' ? 'translate-x-11' : 'translate-x-1'}
        `}
      >
        {theme === 'space' ? (
          <Rocket className="w-5 h-5 text-cyan-600" />
        ) : (
          <Moon className="w-5 h-5 text-slate-800" />
        )}
      </span>
      
      <span className={`absolute left-3 text-[10px] font-bold text-white transition-opacity ${theme === 'space' ? 'opacity-0' : 'opacity-100'}`}>
        DARK
      </span>
      <span className={`absolute right-3 text-[10px] font-bold text-white transition-opacity ${theme === 'space' ? 'opacity-100' : 'opacity-0'}`}>
        SPACE
      </span>
    </button>
  );
};