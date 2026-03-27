import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-hidden border-b border-cyan-500/10">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent opacity-[0.15] blur-[100px] rounded-full point-events-none"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {breadcrumbs && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-mono text-muted uppercase tracking-wider"
          >
            {breadcrumbs.map((bc, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2 text-muted/50">{'>'}</span>}
                <span className={i === breadcrumbs.length - 1 ? "text-white" : "hover:text-white transition-colors"}>
                  {bc}
                </span>
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 tracking-tight uppercase"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
