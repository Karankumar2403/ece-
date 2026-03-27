import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import Tag from '../components/ui/Tag';
import { events } from '../data/events';

const EventsPage = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Competition', 'Webinar', 'Workshop', 'Seminar', 'Exhibition'];

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(e => e.tag === filter);

  const getTagColor = (tag) => {
    switch (tag) {
      case 'Webinar': return 'cyan';
      case 'Competition': return 'blue';
      case 'Workshop': return 'purple';
      case 'Exhibition': return 'amber';
      case 'Seminar': return 'emerald';
      default: return 'cyan';
    }
  };

  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      <PageHeader 
        title="Our Events" 
        subtitle="Seminars, Workshops, Competitions & Webinars"
        breadcrumbs={['Home', 'Events']}
      />

      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-white text-black shadow-lg font-bold'
                    : 'bg-transparent border border-white/20 text-muted hover:text-white hover:border-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <GlassCard hover className="h-full flex flex-col group overflow-hidden p-0 relative aspect-[4/5] border border-white/10 rounded-3xl">
                        <img 
                          src={event.image} 
                          alt={event.name} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "https://ecesociety.bitsindri.ac.in/assets/logo.png";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                        <div className="absolute top-4 right-4 z-10">
                          <Tag label={event.tag} color={getTagColor(event.tag)} />
                        </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 leading-tight">
                          {event.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-accent mb-3 font-mono text-xs">
                          <Calendar size={14} />
                          <span>{event.date}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {event.description}
                        </p>
                        
                        <a 
                          href={event.pdf} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full text-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black py-2.5 rounded-xl transition-all duration-300 font-medium tracking-wide"
                        >
                          Know More
                        </a>
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
                <div className="w-24 h-24 mb-6 text-cyan-500/20">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-white mb-2">No events found</h3>
                <p className="text-muted">Stay tuned for upcoming events in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
