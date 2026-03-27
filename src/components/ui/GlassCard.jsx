import React from 'react';

const GlassCard = ({ children, className = '', hover = false, glow = false, onClick }) => {
  const baseClasses = 'glass relative z-10 overflow-hidden';
  const hoverClasses = hover ? 'glass-hover hover:-translate-y-1' : '';
  const glowClasses = glow ? 'shadow-[0_0_15px_rgba(0,212,255,0.15)] ring-1 ring-cyan-500/20' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
