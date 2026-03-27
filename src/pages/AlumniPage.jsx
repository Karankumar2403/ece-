import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/layout/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { alumni } from '../data/alumni';

const AlumniPage = () => {
  const [activeBatch, setActiveBatch] = useState('2K18');
  
  const batches = ['2K18', '2K19', '2K20'];

  const filteredAlumni = alumni.filter(a => a.batch === activeBatch);
  const spotlightAlumni = alumni.filter(a => ['Shailesh Aanand', 'Abhishek Ranjan', 'Nandani Kumari'].includes(a.name));

  const getCompanyBadgeClass = (company) => {
    switch (company.toLowerCase()) {
      case 'google': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'samsung': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'iit': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'tata steel': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'ericsson': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'jpmorgan': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      default: return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
    }
  };

  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      <PageHeader 
        title="Our Alumni" 
        subtitle="ECE BIT Sindri graduates making an impact"
        breadcrumbs={['Home', 'Alumni']}
      />

      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent z-0 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <span className="inline-block border border-cyan-500/30 text-cyan-400 font-mono text-sm uppercase tracking-wider px-6 py-2 rounded-full bg-cyan-500/5">
              Alumni across Google, Samsung, IIT, Tata Steel & more
            </span>
          </div>

          <SectionTitle 
            eyebrow="Notable Alumni"
            title="Leading the Industry"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
            {spotlightAlumni.map((alum, index) => (
              <ScrollReveal delay={index * 0.2} key={alum.id}>
                <GlassCard hover className="p-0 h-full flex flex-row items-end border border-gold/30 hover:border-gold bg-black rounded-3xl overflow-hidden relative aspect-video">
                  
                  <img 
                    src={alum.image} 
                    alt={alum.name} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://ecesociety.bitsindri.ac.in/assets/logo.png"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  
                  <div className="relative z-10 p-6 w-full pb-8">
                    <h3 className="font-display font-bold text-2xl text-cyan-400 mb-1 leading-tight drop-shadow-lg">{alum.name}</h3>
                    <p className="font-mono text-sm text-gray-300 mb-3 line-clamp-2">{alum.role}</p>
                    <div className="flex justify-between items-center w-full">
                      <span className={`inline-block px-3 py-1 rounded-sm text-[10px] sm:text-xs font-bold tracking-wider uppercase border shadow-lg ${alum.company ? getCompanyBadgeClass(alum.company) : 'border-gold/50 bg-black/50 text-gold'}`}>
                        {alum.company || "Alumni"}
                      </span>
                      {alum.socials && (
                        <div className="flex space-x-2 z-10 bg-black/50 p-2 rounded-lg backdrop-blur-md border border-white/10">
                          {alum.socials.github && <a href={`https://github.com/${alum.socials.github.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><FaGithub size={16} /></a>}
                          {alum.socials.linkedin && <a href={alum.socials.linkedin.startsWith('http') ? alum.socials.linkedin : `https://linkedin.com/in/${alum.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors"><FaLinkedin size={16} /></a>}
                          {alum.socials.insta && <a href={`https://instagram.com/${alum.socials.insta}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors"><FaInstagram size={16} /></a>}
                          {alum.socials.email && <a href={`mailto:${alum.socials.email}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors"><FaEnvelope size={16} /></a>}
                        </div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="border-t border-cyan-500/10 pt-16">
            
            {/* Batch Tabs */}
            <div className="flex justify-center mb-16 overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex space-x-2 bg-white/5 p-1 rounded-full border border-cyan-500/20 backdrop-blur-md w-max">
                {batches.map((batch) => (
                  <button
                    key={batch}
                    onClick={() => setActiveBatch(batch)}
                    className={`px-8 py-2.5 rounded-full font-display font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                      activeBatch === batch 
                        ? 'bg-white text-black font-bold shadow-lg'
                        : 'text-muted hover:text-white border border-white/20 hover:border-white/50'
                    }`}
                  >
                    Batch {batch}
                  </button>
                ))}
              </div>
            </div>

            {/* Alumni Grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeBatch}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
              >
                {filteredAlumni.map((alum) => (
                  <GlassCard hover key={alum.id} className="p-0 text-left flex flex-col h-full bg-black border border-white/10 group overflow-hidden relative aspect-[3/4] rounded-3xl">
                    <img 
                      src={alum.image} 
                      alt={alum.name}
                      className="absolute inset-0 w-full h-full object-cover filter grayscale md:grayscale-0 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://ecesociety.bitsindri.ac.in/assets/logo.png"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    <div className="absolute top-0 inset-x-0 p-4 flex justify-end">
                      {alum.socials && (
                        <div className="flex flex-col space-y-2 z-10 bg-black/40 p-2 rounded-xl backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {alum.socials.github && <a href={`https://github.com/${alum.socials.github.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><FaGithub size={16} /></a>}
                          {alum.socials.linkedin && <a href={alum.socials.linkedin.startsWith('http') ? alum.socials.linkedin : `https://linkedin.com/in/${alum.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors"><FaLinkedin size={16} /></a>}
                          {alum.socials.insta && <a href={`https://instagram.com/${alum.socials.insta}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors"><FaInstagram size={16} /></a>}
                          {alum.socials.email && <a href={`mailto:${alum.socials.email}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors"><FaEnvelope size={16} /></a>}
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col z-10 w-full bg-gradient-to-t from-black to-transparent">
                      <h4 className="font-display font-bold text-lg text-cyan-400 mb-1 leading-tight drop-shadow-md">
                        {alum.name}
                      </h4>
                      <p className="font-body text-xs text-gray-300 mb-3 h-8 line-clamp-2">
                        {alum.role}
                      </p>
                      
                      {alum.company && alum.company.trim() !== "" ? (
                        <span className={`self-start px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase border shadow-md ${getCompanyBadgeClass(alum.company)}`}>
                          {alum.company}
                        </span>
                      ) : (
                        <span className="self-start px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase border border-white/20 text-white/80 bg-black/40 shadow-md">
                          ECE Society Alumni
                        </span>
                      )}
                    </div>
                  </GlassCard>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;
