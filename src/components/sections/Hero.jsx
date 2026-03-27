import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Brain, Cpu, RadioTower, ChevronDown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';
import { staggerContainer } from '../../lib/animations';

const Hero = () => {
  const cards = [
    { title: "Next-Gen Communication", body: "Exploring wireless, IoT and signal processing shaping the connected world.", icon: RadioTower, position: "top-[10%] left-[5%] md:left-[10%]" },
    { title: "AI & Machine Learning", body: "Intelligence engineered in silicon.", icon: Brain, position: "top-[15%] right-[5%] md:right-[10%]" },
    { title: "Embedded Innovation", body: "Hardware meets intelligence.", icon: Cpu, position: "bottom-[20%] left-[5%] md:left-[15%]" },
    { title: "Robotics & Hardware", body: "Designing autonomous systems powered by embedded control and real-time processing.", icon: Zap, position: "bottom-[25%] right-[5%] md:right-[10%]" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-center items-center font-body pt-24 pb-12 lg:pt-20 lg:pb-0">
      
      {/* Background Grid - Circuit Style */}
      <div className="absolute inset-0 z-0 bg-black bg-[linear-gradient(rgba(0,180,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]">
        {/* Glowing Center Ambient Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-cyan-500 opacity-10 blur-[150px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 z-10 h-full flex flex-col justify-center relative">
        
        {/* Top Titles */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center z-20 absolute top-[10%] md:top-[12%] inset-x-0 mx-auto"
        >
          <motion.h1 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-2 tracking-tighter uppercase relative inline-block leading-tight"
          >
            Electronics &
            <div className="relative inline-block ml-4">
               Communication
               <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-accent hidden sm:block" preserveAspectRatio="none" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </div>
          </motion.h1>
          <motion.h1 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } } }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-muted leading-tight pb-2 uppercase tracking-wide mt-4 md:mt-6"
          >
            Engineering Society
          </motion.h1>
          <motion.p 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.4 } } }}
            className="font-mono text-muted text-sm tracking-[0.3em] uppercase mt-2 hidden md:block"
          >
            BIT Sindri — Est. 1957
          </motion.p>
        </motion.div>

        {/* Center Animated Microchip - Electronics Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-[400px] h-[400px]">
          
          {/* Animated Traces (Glowing Rings that expand) */}
          <motion.div 
            animate={{ scale: [1, 1.4, 2], opacity: [0.3, 0.1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-[1.5px] border-cyan-400"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1.7], opacity: [0.3, 0.1, 0] }}
            transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-[1.5px] border-gold"
          />

          {/* Central Processor */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-48 h-48 bg-black/60 backdrop-blur-xl border-2 border-cyan-500/80 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_80px_rgba(0,255,255,0.2)]"
          >
            {/* Processor Pins (Top/Bottom) */}
            <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-32 flex justify-between">
              {[...Array(6)].map((_, i) => <div key={`t-${i}`} className="w-[6px] h-3.5 bg-gold rounded-t shadow-[0_0_10px_rgba(255,215,0,0.5)]" />)}
            </div>
            <div className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-32 flex justify-between">
              {[...Array(6)].map((_, i) => <div key={`b-${i}`} className="w-[6px] h-3.5 bg-gold rounded-b shadow-[0_0_10px_rgba(255,215,0,0.5)]" />)}
            </div>
            {/* Processor Pins (Left/Right) */}
            <div className="absolute -left-[14px] top-1/2 -translate-y-1/2 h-32 flex flex-col justify-between">
              {[...Array(6)].map((_, i) => <div key={`l-${i}`} className="h-[6px] w-3.5 bg-gold rounded-l shadow-[0_0_10px_rgba(255,215,0,0.5)]" />)}
            </div>
            <div className="absolute -right-[14px] top-1/2 -translate-y-1/2 h-32 flex flex-col justify-between">
              {[...Array(6)].map((_, i) => <div key={`r-${i}`} className="h-[6px] w-3.5 bg-gold rounded-r shadow-[0_0_10px_rgba(255,215,0,0.5)]" />)}
            </div>
            
            {/* Inner Core Icon & Text */}
            <motion.div 
              animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <Cpu size={56} className="text-cyan-400 mb-2 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
              <span className="font-mono font-bold text-white tracking-widest text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]">SYS_CORE</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Cards - Desktop */}
        <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.2), type: "spring" }}
              className={`absolute ${card.position} w-[280px] pointer-events-auto`}
            >
              <GlassCard hover className="p-5 flex flex-col h-full bg-black/80 backdrop-blur-xl border border-gold border-opacity-30 hover:border-accent hover:border-opacity-100 transition-colors shadow-2xl">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display font-semibold text-white leading-tight pr-2">{card.title}</h3>
                  <card.icon size={24} className="text-white flex-shrink-0" />
                </div>
                <p className="font-body text-xs text-muted leading-relaxed">{card.body}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Stacked Cards */}
        <div className="lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 mb-8 z-20 relative px-4">
          {cards.map((card, i) => (
            <GlassCard key={i} className="p-4 bg-black/80 border border-gold/30">
              <div className="flex items-center space-x-3 mb-2">
                <card.icon size={20} className="text-white" />
                <h3 className="font-display font-semibold text-white text-sm">{card.title}</h3>
              </div>
              <p className="font-body text-xs text-muted">{card.body}</p>
            </GlassCard>
          ))}
        </div>

        {/* CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="relative lg:absolute bottom-auto lg:bottom-12 inset-x-0 mx-auto w-full flex flex-col items-center justify-center space-y-6 z-30 mt-auto"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/about" className="btn-primary w-full sm:w-auto text-lg px-8">Explor Society</Link>
            <Link to="/events" className="btn-ghost w-full sm:w-auto text-lg px-8">View Events</Link>
          </div>
          <motion.div 
             animate={{ y: [0, 5, 0] }} 
             transition={{ duration: 2, repeat: Infinity }}
             className="flex flex-col items-center space-y-2 text-muted"
          >
             <span className="font-mono text-xs tracking-widest uppercase">Scroll to explore</span>
             <ChevronDown size={20} className="text-white bg-black/50 rounded-full p-1" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
