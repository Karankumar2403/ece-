import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';

const stats = [
  { value: '1957', label: 'Department Founded' },
  { value: '500', suffix: '+', label: 'Active Students' },
  { value: '14', label: 'Faculty Members' },
  { value: '9', suffix: '+', label: 'Annual Events' }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <ScrollReveal direction="right" className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tight">
              About <span className="text-white relative inline-block">ECE<svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" preserveAspectRatio="none" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></span> Society
            </h2>
            <div className="text-muted leading-relaxed space-y-4 text-base md:text-lg max-w-xl">
              <p>
                The Electronics and Communication Engineering Society is the official society of the Department of Electronics and Communication Engineering, BIT Sindri.
              </p>
              <p>
                Our mission is to promote scientific thinking and provide a holistic environment for students to explore cutting-edge technologies in electronics and software solutions to real-life problems.
              </p>
              <p>
                Since its inception, the society has been a cornerstone of academic and extracurricular excellence, bringing together visionaries and technologists.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10 mt-8 lg:mt-0">
            {stats.map((stat, i) => (
              <ScrollReveal delay={i * 0.1} key={i}>
                <GlassCard hover glow className="p-8 text-center flex flex-col items-center justify-center bg-black/50 border border-gold/30 hover:border-gold shadow-lg">
                  <AnimatedCounter end={stat.value} duration={2500} suffix={stat.suffix} />
                  <p className="font-mono text-muted text-xs mt-3 uppercase tracking-widest font-semibold">{stat.label}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
