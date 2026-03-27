import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import BackToTop from './components/ui/BackToTop';
import { useScrollProgress } from './lib/useScrollProgress';

// Lazy loaded pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const FacultyPage = lazy(() => import('./pages/FacultyPage'));
const TeamsPage = lazy(() => import('./pages/TeamsPage'));
const AlumniPage = lazy(() => import('./pages/AlumniPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout wrapper for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
             <HomePage />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
             <AboutPage />
          </motion.div>
        } />
        <Route path="/events" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
             <EventsPage />
          </motion.div>
        } />
        <Route path="/faculty" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
             <FacultyPage />
          </motion.div>
        } />
        <Route path="/teams" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
             <TeamsPage />
          </motion.div>
        } />
        <Route path="/alumni" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
             <AlumniPage />
          </motion.div>
        } />
        <Route path="*" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
             <NotFound />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Basic SEO Setup - can be expanded or replaced by React Helmet later
    document.title = "ECE Society — BIT Sindri | Electronics & Communication Engineering";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = "Official website of Electronics & Communication Engineering Society, BIT Sindri.";
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen />
      
      {/* Dynamic Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 z-[100] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-deep flex items-center justify-center"><div className="w-12 h-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin"></div></div>}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
