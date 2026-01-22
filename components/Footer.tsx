import React from 'react';
import { Theme } from '../types';

export const Footer: React.FC<{ theme: Theme }> = ({ theme }) => {
  const isSpace = theme === 'space';
  
  return (
    <footer className={`py-8 text-center border-t ${
      isSpace ? 'bg-slate-950 border-blue-900/30' : 'bg-slate-950 border-slate-800'
    }`}>
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Baraka Jonathan Phinias. All rights reserved.
      </p>
    </footer>
  );
};