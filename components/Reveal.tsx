import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  className?: string; // Allow passing standard classNames
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25, 
  duration = 0.5,
  className = "" 
}) => {
  return (
    <div className={className} style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration, delay, type: "spring", stiffness: 50, damping: 15 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const FadeIn: React.FC<RevealProps & { direction?: 'left' | 'right' | 'up' | 'down' }> = ({ 
  children, 
  width = "100%", 
  delay = 0.25, 
  duration = 0.5,
  direction = 'up',
  className = ""
}) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0 
    }
  };

  return (
    <div className={className} style={{ width }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Changed standard to re-animate as requested
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
