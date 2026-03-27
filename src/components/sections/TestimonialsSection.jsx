import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] opacity-30 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          eyebrow="Words from Leaders"
          title="Guided by the Best"
          subtitle="Insight and inspiration from our esteemed professors and leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, index) => (
            <ScrollReveal key={test.id} delay={index * 0.2} direction={index === 0 ? "right" : "left"}>
              <GlassCard hover glow className="p-8 h-full border-l-4 border-l-accent flex flex-col justify-between bg-black/80">
                <div>
                  <svg className="h-10 w-10 text-accent/20 mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v4h6v-2H6v-2c0-2.2 1.8-4 4-4V8zM24 8c-3.3 0-6 2.7-6 6v4h6v-2h-4v-2c0-2.2 1.8-4 4-4V8z"/>
                  </svg>
                  <p className="italic text-muted leading-relaxed mb-8">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-accent/40 p-1">
                    <img src={test.image} alt={test.name} className="h-full w-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white">{test.name}</h4>
                    <p className="font-mono text-muted text-xs mt-1 uppercase tracking-widest">{test.role}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
