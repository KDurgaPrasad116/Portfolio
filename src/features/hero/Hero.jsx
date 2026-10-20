import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ArrowDownRight, Terminal, Sparkles, Code2, Cpu } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  const { profile, stats } = portfolioData;
  const [frontierIndex, setFrontierIndex] = useState(0);

  const frontierWords = [
    "intelligent architectures",
    "deep learning systems",
    "autonomous AI agents",
    "production-grade full-stack",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFrontierIndex((prev) => (prev + 1) % frontierWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background radial glow */}
      <div className="hero-glow"></div>
      <div className="hero-grid-overlay"></div>

      <div className="container hero-container">
        {/* Top Tag & Status */}
        <motion.div 
          className="hero-top-bar"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="affiliation-badge">
            <span className="affiliation-dot"></span>
            <span>{profile.affiliation}</span>
          </div>

          <div className="status-badge-outline live-pulse-badge">
            <span className="live-beacon"></span>
            <Terminal size={12} />
            <span>{profile.statusBadge}</span>
          </div>
        </motion.div>

        {/* Massive Editorial Headline with Interactive Dynamic Word */}
        <div className="hero-main-title">
          <motion.h1 
            className="headline-row headline-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Build at the frontier
          </motion.h1>

          <div className="headline-rotator-line">
            <span className="rotator-prefix">of&nbsp;</span>
            <div className="rotator-window">
              <AnimatePresence mode="wait">
                <motion.span
                  key={frontierIndex}
                  initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="rotator-text"
                >
                  {frontierWords[frontierIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Editorial Subtitle & CTAs */}
        <motion.div 
          className="hero-sub-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="hero-description">
            {profile.subheadline}
          </p>

          <div className="hero-cta-group">
            <button 
              className="cta-primary-btn"
              onClick={() => scrollToSection('projects')}
            >
              <span>VIEW WORK</span>
              <ArrowDownRight size={14} />
            </button>
            <button 
              className="cta-secondary-btn"
              onClick={() => scrollToSection('journey')}
            >
              READ JOURNEY
            </button>
          </div>
        </motion.div>

        {/* Bottom Ticker / Stats Bar */}
        <motion.div 
          className="hero-stats-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-label">[ {stat.label} ]</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
