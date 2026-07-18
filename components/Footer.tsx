import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center border-t border-gold-400/10 bg-forest-950">
      <p className="text-gold-400/40 text-xs font-sans tracking-wide">
        &copy; {new Date().getFullYear()} Baraka Jonathan Phinias. All rights reserved.
      </p>
    </footer>
  );
};