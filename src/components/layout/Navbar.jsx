import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Department', path: '/faculty' },
    { name: 'Team', path: '/teams' },
    { name: 'Alumni', path: '/alumni' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-md border-b gap-y-0 border-white/10 h-16 md:h-20 shadow-lg' 
            : 'bg-transparent h-20 md:h-24'
        }`}
      >
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        {scrolled && (
          <div className="absolute inset-x-0 bottom-[-1px] h-[1px] bg-accent/50 overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "200%"] }} 
              transition={{ duration: 3, ease: "linear", repeat: Infinity }}
              className="w-1/2 h-full bg-accent shadow-[0_0_10px_#3B82F6]"
            />
          </div>
        )}

        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group relative z-50">
            <img 
              src="https://ecesociety.bitsindri.ac.in/assets/logo.png" 
              alt="Logo" 
              className="h-10 w-10 md:h-12 md:w-12 group-hover:scale-110 transition-transform duration-300"
              onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
            />
            <span className="font-display text-white tracking-wider font-bold text-xl hidden sm:block">
              ECE SOCIETY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  key={link.name}
                >
                  <Link 
                    to={link.path}
                    className={`relative font-body font-medium text-sm lg:text-base transition-colors duration-300 group ${
                      isActive ? 'text-white' : 'text-muted hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-accent transition-all duration-300 ${
                        isActive ? 'w-full shadow-[0_0_8px_#3B82F6]' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                to={location.pathname === '/' ? '#contact' : '/#contact'} 
                className="btn-primary"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white relative z-50 p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                key={link.name}
              >
                <Link 
                  to={link.path}
                  className={`text-2xl font-display font-bold ${
                    location.pathname === link.path ? 'text-white' : 'text-muted'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.max(0, navLinks.length * 0.1), duration: 0.4 }}
            >
              <Link 
                to={location.pathname === '/' ? '#contact' : '/#contact'} 
                className="btn-primary text-xl px-8 py-3 mt-4"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (location.pathname === '/') {
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }
                }}
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
