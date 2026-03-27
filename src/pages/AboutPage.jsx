import React from 'react';
import PageHeader from '../components/layout/PageHeader';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/layout/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import { team } from '../data/team';

const AboutPage = () => {
  // Only get the post bearers for this section
  const leaders = team.filter(member => 
    member.role.toLowerCase().includes('president') || 
    member.role.toLowerCase().includes('secretary') || 
    member.role.toLowerCase().includes('head') ||
    member.category === 'Leadership'
  ).slice(0, 15); // Show top members

  return (
    <div className="pt-20 md:pt-24 bg-deep min-h-screen">
      <PageHeader 
        title="About ECE Society" 
        subtitle="Discover our vision, mission, and the people behind the society."
        breadcrumbs={['Home', 'About Us']}
      />
      
      <AboutSection />
      
      <TestimonialsSection />

      <section className="py-24 relative overflow-hidden bg-[#010a14]">
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle 
            eyebrow="Our Leadership"
            title="Post Bearers"
            subtitle="The dedicated individuals steering the society towards excellence."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {leaders.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.1} className="w-full">
                <GlassCard hover className="p-6 text-center group cursor-pointer h-full flex flex-col items-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://ecesociety.bitsindri.ac.in/assets/logo.png";
                      }}
                    />
                  </div>
                  <h4 className="font-display font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors uppercase tracking-wide">
                    {member.name}
                  </h4>
                  <p className="font-mono text-cyan-500 text-xs">
                    {member.role}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
