import React from 'react';
import { Mail, Phone } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SectionTitle from '../components/layout/SectionTitle';
import GlassCard from '../components/ui/GlassCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import Tag from '../components/ui/Tag';
import { faculty } from '../data/faculty';

const FacultyPage = () => {
  const getRoleColor = (role) => {
    if (role.includes('Head')) return 'gold';
    if (role.includes('Associate')) return 'blue';
    if (role.includes('Adjunct')) return 'purple';
    return 'cyan';
  };

  return (
    <div className="pt-20 md:pt-24 bg-deep min-h-screen">
      <PageHeader 
        title="Department of ECE" 
        subtitle="Electronics & Communication Engineering — BIT Sindri"
        breadcrumbs={['Home', 'Department']}
      />

      <section className="py-24 relative overflow-hidden bg-[#020b18]">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <SectionTitle 
                align="left"
                eyebrow="Department History"
                title="About ECE Department"
              />
              <p className="text-muted leading-relaxed text-lg">
                The Electronics and Communication Engineering department commenced its journey in 1957, eight years after the establishment of BIT Sindri. Since then, BIT Sindri became an institution that led the way in India's rapid expansion of the telecom industry.
              </p>
              <p className="text-muted leading-relaxed text-lg">
                The department offers a four-year B.Tech course for undergraduates ingraining challenges and innovation across many fields, alongside postgraduate paradigms driving research.
              </p>
            </div>

            <div className="relative border-l-2 border-cyan-500/20 pl-8 space-y-12 py-8">
              {[
                { year: '1957', title: 'Department Founded' },
                { year: '1980s', title: 'Expansion & Growth' },
                { year: '2000s', title: 'Research Advancements' },
                { year: 'Today', title: 'Innovation Ecosystem' }
              ].map((timeline, index) => (
                <ScrollReveal key={index} delay={index * 0.2}>
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-[#020b18] bg-cyan-400 shadow-[0_0_10px_#00d4ff]"></div>
                    <h3 className="text-2xl font-display font-bold text-white tracking-wide">{timeline.year}</h3>
                    <p className="text-cyan-400 font-mono text-sm mt-1">{timeline.title}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#010a14] relative">
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle 
            align="center"
            eyebrow="Purpose"
            title="Vision & Mission"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <GlassCard hover className="p-8 border-t-2 border-t-cyan-400">
              <h3 className="text-3xl font-display font-bold text-white mb-6">Vision</h3>
              <p className="text-lg text-muted italic leading-relaxed border-l-4 border-l-cyan-500/30 pl-6 py-2">
                "To be recognized as a center of academic excellence for globally competent, professionally, and socially responsible electronics & Communication engineers and entrepreneurs."
              </p>
            </GlassCard>

            <GlassCard hover className="p-8 border-t-2 border-t-blue-500">
              <h3 className="text-3xl font-display font-bold text-white mb-6">Mission</h3>
              <ul className="space-y-4">
                {[
                  "To prepare students for a successful career by blending theoretical knowledge and practical skills with employability and entrepreneurial traits.",
                  "To establish a state-of-the-art laboratory and research facilities for academic excellence and promotion of quality teaching.",
                  "To inculcate team spirit and leadership qualities and produce socially acceptable engineers with ethical and human values.",
                  "To contribute to the country and society at large by enhancing interaction between academia and industries."
                ].map((mission, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-3 text-lg leading-none mt-1">◈</span>
                    <span className="text-muted leading-relaxed">{mission}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-deep">
        <div className="absolute inset-0 bg-circuit opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle 
            eyebrow="Academic Leaders"
            title="Our Faculty"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((prof, index) => (
              <ScrollReveal delay={(index % 3) * 0.1} key={prof.id} className="w-full">
                <GlassCard hover className={`p-6 flex flex-col h-full items-center text-center border-l-4 border-l-${getRoleColor(prof.role)}-500 transition-transform`}>
                  
                  <div className="w-full h-72 rounded-xl overflow-hidden border-2 border-cyan-500/20 mb-6 bg-cyan-950/10 relative group cursor-pointer hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all">
                    <img 
                      src={prof.image} 
                      alt={prof.name} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 p-2" 
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://ecesociety.bitsindri.ac.in/assets/logo.png"; }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-2">{prof.name}</h3>
                  <div className="mb-6 h-6 flex items-center justify-center">
                    <Tag label={prof.role} color={getRoleColor(prof.role)} />
                  </div>

                  <div className="mt-auto space-y-3 w-full border-t border-cyan-500/10 pt-6">
                    <a href={`mailto:${prof.email}`} className="flex items-center justify-center space-x-2 text-sm text-muted hover:text-cyan-400 transition-colors group px-4 py-2 rounded-lg hover:bg-white/5">
                      <Mail size={16} className="text-cyan-500" />
                      <span className="truncate">{prof.email}</span>
                    </a>
                    
                    <a href={`tel:${prof.phone}`} className="flex items-center justify-center space-x-2 text-sm text-muted hover:text-cyan-400 transition-colors group px-4 py-2 rounded-lg hover:bg-white/5">
                      <Phone size={16} className="text-cyan-500" />
                      <span>{prof.phone}</span>
                    </a>

                    <a 
                      href={prof.biodata} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="block w-full mt-4 text-sm uppercase tracking-widest bg-cyan-500/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-cyan-500/30 hover:border-transparent text-cyan-400 hover:text-white py-3 rounded text-center transition-all duration-300 pointer-events-auto"
                    >
                      View Biodata
                    </a>
                  </div>

                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;
