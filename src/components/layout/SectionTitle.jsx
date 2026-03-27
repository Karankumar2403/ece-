import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  const marginClass = align === 'left' ? 'mr-auto' : align === 'center' ? 'mx-auto' : 'ml-auto';

  // Extract the first word or specific words to highlight
  const words = title.split(' ');
  const highlightedWord = words.find(w => w.toLowerCase() === 'ece') || words[0];
  const restTitle = words.filter(w => w !== highlightedWord).join(' ');

  return (
    <div className={`mb-16 ${alignClass}`}>
      <ScrollReveal>
        {eyebrow && (
          <div className="font-mono text-xs md:text-sm text-cyan-400 uppercase tracking-[0.2em] mb-3">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">
            {highlightedWord}
          </span>{' '}
          {restTitle}
        </h2>
        {subtitle && (
          <p className={`text-base md:text-lg text-muted max-w-2xl ${marginClass}`}>
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  );
};

export default SectionTitle;
