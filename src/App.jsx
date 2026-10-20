import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './features/hero/Hero';
import { About } from './features/about/About';
import { Experience } from './features/experience/Experience';
import { Projects } from './features/projects/Projects';
import { Craft } from './features/craft/Craft';
import { Philosophy } from './features/philosophy/Philosophy';
import { Principles } from './features/principles/Principles';
import { Curiosity } from './features/curiosity/Curiosity';
import { Contact } from './features/contact/Contact';
import { Footer } from './components/layout/Footer';
import { InteractiveCanvas } from './components/ui/InteractiveCanvas';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import './App.css';

function App() {
  useSmoothScroll();

  return (
    <div className="portfolio-app">
      {/* Interactive Constellation & Mouse Light Canvas */}
      <InteractiveCanvas />

      {/* Editorial Sticky Header */}
      <Navbar />

      {/* 9 Complete Sections Replicating Aditya Raj's Portfolio Architecture */}
      <main>
        {/* [ 01 / 09 ] Hero & Frontier Headline */}
        <Hero />

        {/* [ 02 / 09 ] Skills & Technical Toolkit */}
        <About />

        {/* [ 03 / 09 ] My Journey & Milestones */}
        <Experience />

        {/* [ 04 / 09 ] Selected Projects & Work */}
        <Projects />

        {/* [ 05 / 09 ] After Code & Craft Philosophy */}
        <Craft />

        {/* [ 06 / 09 ] Philosophy & 4-Phase Method */}
        <Philosophy />

        {/* [ 07 / 09 ] Principles (17 Rules) */}
        <Principles />

        {/* [ 08 / 09 ] The Curiosity & Narrative */}
        <Curiosity />

        {/* [ 09 / 09 ] Contact & Transmission */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
