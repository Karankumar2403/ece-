import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-deep flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-circuit opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[80px]"></div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-48 mx-auto mb-8 text-cyan-500 opacity-80"
        >
          {/* Robot SVG Illustration */}
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="70" width="100" height="100" rx="20" className="fill-[#0a192f] stroke-cyan-400 stroke-[4]"/>
            <rect x="75" y="90" width="15" height="15" rx="7.5" className="fill-cyan-400"/>
            <rect x="110" y="90" width="15" height="15" rx="7.5" className="fill-cyan-400"/>
            <path d="M70 130 Q100 150 130 130" className="stroke-cyan-400 stroke-[4] stroke-linecap-round"/>
            <rect x="90" y="30" width="20" height="40" className="fill-[#0a192f] stroke-cyan-400 stroke-[4]"/>
            <circle cx="100" cy="20" r="10" className="fill-cyan-400 animate-pulse"/>
            <path d="M20 100 L50 120" className="stroke-cyan-400 stroke-[4] stroke-linecap-round"/>
            <path d="M180 100 L150 120" className="stroke-cyan-400 stroke-[4] stroke-linecap-round"/>
          </svg>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">404</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-4 tracking-wide">
          Signal Lost
        </h2>
        <p className="text-muted text-lg max-w-md mx-auto mb-10">
          Looks like this frequency doesn't exist. The page you're looking for has drifted into the void.
        </p>
        
        <Link to="/" className="btn-primary text-lg px-8 py-3">
          Return to Base Station
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
