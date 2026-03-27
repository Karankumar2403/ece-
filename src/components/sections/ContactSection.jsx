import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../layout/SectionTitle';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Grid dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          eyebrow="Reach Out"
          title="Get In Touch"
          subtitle="Have a question or want to work with us? Leave us a message."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <GlassCard className="p-6 border-l-4 border-l-white bg-black/80">
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-3 rounded-full bg-white/10 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-lg mb-1">Office Location</h4>
                  <p className="text-muted leading-relaxed">
                    Room No.: S-13, ECE Department,
                    <br />
                    ECE Building, BIT Sindri
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-l-4 border-l-gold bg-black/80">
              <div className="flex items-start space-x-4">
                <div className="mt-1 p-3 rounded-full bg-gold/10 text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-lg mb-1">Email Address</h4>
                  <a href="mailto:ecesociety@bitsindri.ac.in" className="text-muted hover:text-white transition-colors">
                    ecesociety@bitsindri.ac.in
                  </a>
                </div>
              </div>
            </GlassCard>

            <div className="pt-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {[FaLinkedinIn, FaInstagram, FaGithub, FaYoutube].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 rounded-full glass hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-muted group">
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <GlassCard className="p-6 md:p-8 bg-black/80 mt-8 md:mt-0">
            <form action="mailto:ecesociety@bitsindri.ac.in" method="GET" encType="text/plain" className="space-y-6">
              <div className="space-y-1">
                <label className="font-mono text-xs text-muted uppercase tracking-wider block">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-cyan-500/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-muted/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-mono text-xs text-muted uppercase tracking-wider block">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210" 
                    className="w-full bg-white/5 border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted/50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs text-muted uppercase tracking-wider block">Message</label>
                <textarea 
                  rows="4"
                  name="body"
                  required
                  placeholder="How can we help you?" 
                  className="w-full bg-white/5 border border-white/20 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted/50 resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-white hover:bg-neutral-200 hover:scale-[1.02] text-black font-semibold py-3 rounded-lg transition-all">
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
