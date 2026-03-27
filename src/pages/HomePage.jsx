import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
