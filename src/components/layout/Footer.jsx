import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaGithub, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden font-body border-t border-white/10">
      {/* Ambient Glow Effects */}
      <div className="absolute left-[-150px] top-0 h-full w-[300px] bg-accent/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute right-[-150px] top-0 h-full w-[300px] bg-accent/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">


        {/* Main Footer Grid */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-40 items-start">
          
          {/* Social Sidebar (Vertical on Desktop) */}
          <div className="flex md:flex-col gap-6 text-3xl md:text-4xl text-white">
            <a href="#" className="hover:text-accent transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaGithub /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaLinkedinIn /></a>
          </div>

          {/* Column 1: Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">Write</h3>
              <a href="mailto:ecesociety@bitsindri.ac.in" className="text-lg font-light text-muted hover:text-white transition-colors">
                ecesociety@bitsindri.ac.in
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">Meet</h3>
              <p className="text-lg font-light text-muted leading-relaxed">
                ECE Department, BIT Sindri<br/>
                Dhanbad-828123<br/>
                Jharkhand, India
              </p>
            </div>
          </div>

          {/* Column 2: Other Pages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-display">Other Pages</h3>
            <ul className="space-y-4">
              <li><Link to="/events" className="text-lg font-light text-muted hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/alumni" className="text-lg font-light text-muted hover:text-white transition-colors">Alumni</Link></li>
              <li><a href="https://www.bitsindri.ac.in" target="_blank" rel="noreferrer" className="text-lg font-light text-muted hover:text-white transition-colors">BIT Sindri</a></li>
            </ul>
          </div>

          {/* Column 3: Get Help */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-display">Get Help</h3>
            <ul className="space-y-4">
              <li><Link to="/teams" className="text-lg font-light text-muted hover:text-white transition-colors">Join Us</Link></li>
              <li><Link to="/about" className="text-lg font-light text-muted hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#contact" className="text-lg font-light text-muted hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-24 pt-8 md:pt-12 flex flex-col md:flex-row flex-wrap justify-between items-center text-sm md:text-base font-light text-muted">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} ECE Society. All rights reserved.</p>
          <p>Crafted with <span className="text-white text-xl mx-1">♥</span> by ECE Society.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
