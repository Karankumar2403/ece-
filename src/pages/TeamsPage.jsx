import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import Tag from '../components/ui/Tag';
import { team } from '../data/team';

const TeamsPage = () => {
  const [activeBatch, setActiveBatch] = useState('2K22');
  const [filter, setFilter] = useState('All');
  const batches = ['2K22', '2K23'];
  const categories = ['All', 'Leadership', 'Technical', 'Finance', 'Creative']; // Mapped to the actual values

  // Map filters to match our team object categories
  const categoryMap = {
    'All': 'All',
    'Leadership': 'Leadership',
    'Technical': 'Technical',
    'Finance': 'Treasurer',
    'Creative': 'Design / Graphics',
  };

  const currentCategory = categoryMap[filter] || 'All';
  
  const currentBatchTeam = team.filter(m => m.batch === activeBatch);
  const topLeaders = activeBatch === '2K22' ? currentBatchTeam.slice(0, 3) : [];
  
  const filteredTeam = currentCategory === 'All' 
    ? (activeBatch === '2K22' ? currentBatchTeam.slice(3) : currentBatchTeam)
    : currentBatchTeam.filter(m => m.category === currentCategory || m.role.includes(filter));



  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      <PageHeader 
        title="Our Team" 
        subtitle="The minds shaping ECE Society"
        breadcrumbs={['Home', 'Team']}
      />

      <section className="py-24 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6 relative z-10">
          
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

          {/* Top Leaders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
            {topLeaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0, y: index === 1 ? -30 : 0 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={index === 1 ? 'md:-translate-y-8' : ''}
              >
                <GlassCard hover className="p-0 flex flex-col h-full rounded-3xl group overflow-hidden relative aspect-[3/4] bg-black border border-gold/30 hover:border-gold">
                  
                  {/* Image taking entire card */}
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="absolute inset-0 w-full h-full object-cover filter grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://ecesociety.bitsindri.ac.in/assets/logo.png"; }}
                  />

                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Content positioned at bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col items-center">
                    <h3 className="text-3xl font-display font-bold text-cyan-400 mb-3 z-10 leading-tight drop-shadow-lg">{leader.name}</h3>
                    <div className="z-10 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-gold/50 text-gold font-bold text-sm shadow-xl mb-3">
                      {leader.role} • Batch {leader.batch}
                    </div>
                    {/* Socials */}
                    {leader.socials && (
                      <div className="flex space-x-3 z-10">
                        {leader.socials.github && <a href={`https://github.com/${leader.socials.github.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><FaGithub size={18} /></a>}
                        {leader.socials.linkedin && <a href={leader.socials.linkedin.startsWith('http') ? leader.socials.linkedin : `https://linkedin.com/in/${leader.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors"><FaLinkedin size={18} /></a>}
                        {leader.socials.insta && <a href={`https://instagram.com/${leader.socials.insta}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors"><FaInstagram size={18} /></a>}
                        {leader.socials.email && <a href={`mailto:${leader.socials.email}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors"><FaEnvelope size={18} /></a>}
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-cyan-500/10 pt-16">
            
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-white text-black font-bold shadow-lg'
                      : 'bg-transparent border border-white/20 text-muted hover:text-white hover:border-white/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Rest of the team Grid */}
            <AnimatePresence mode="popLayout">
              {filteredTeam.length > 0 ? (
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {filteredTeam.map((member) => (
                    <motion.div
                      layout
                      key={member.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <GlassCard className="p-0 text-center group cursor-pointer h-full border border-white/10 hover:border-white/30 rounded-2xl overflow-hidden relative aspect-[3/4]">
                        
                        {/* Image takes full card */}
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="absolute inset-0 w-full h-full object-cover filter grayscale md:grayscale-0 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://ecesociety.bitsindri.ac.in/assets/logo.png"; }}
                        />
                        
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                        {/* Text placed at the bottom */}
                        <div className="absolute top-0 inset-x-0 p-4 flex justify-end">
                          {member.socials && (
                            <div className="flex flex-col space-y-2 z-10 bg-black/40 p-2 rounded-xl backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {member.socials.github && <a href={`https://github.com/${member.socials.github.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors"><FaGithub size={16} /></a>}
                              {member.socials.linkedin && <a href={member.socials.linkedin.startsWith('http') ? member.socials.linkedin : `https://linkedin.com/in/${member.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors"><FaLinkedin size={16} /></a>}
                              {member.socials.insta && <a href={`https://instagram.com/${member.socials.insta}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors"><FaInstagram size={16} /></a>}
                              {member.socials.email && <a href={`mailto:${member.socials.email}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors"><FaEnvelope size={16} /></a>}
                            </div>
                          )}
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col justify-end items-start text-left">
                          <h4 className="font-display font-semibold text-lg md:text-xl text-cyan-400 mb-1 drop-shadow-md">
                            {member.name}
                          </h4>
                          <div className="flex flex-wrap gap-2 items-center">
                            <p className="font-mono text-xs text-gold font-bold drop-shadow-md">
                              {member.role}
                            </p>
                            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/80">
                              Batch {member.batch}
                            </span>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-20 flex flex-col items-center text-center w-full"
                >
                  <h3 className="text-2xl font-display text-white mb-2">No team members found</h3>
                  <p className="text-muted">Stay tuned for updates.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;
