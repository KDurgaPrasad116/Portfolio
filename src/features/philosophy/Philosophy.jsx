import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Compass, Hammer, Rocket, RefreshCw } from 'lucide-react';
import './Philosophy.css';

export const Philosophy = () => {
  const { philosophySection } = portfolioData;
  const [activePhase, setActivePhase] = useState(0);

  const phaseIcons = [
    <Compass size={18} key="explore" />,
    <Hammer size={18} key="build" />,
    <Rocket size={18} key="ship" />,
    <RefreshCw size={18} key="iterate" />
  ];

  return (
    <section id="philosophy" className="philosophy-section">
      <div className="container">
        {/* Section Pill: [ 06 / 09 ] PHILOSOPHY */}
        <div className="section-tag-wrapper">
          <span className="section-tag-number">{philosophySection.tag}</span>
          <span className="section-tag-label">{philosophySection.label}</span>
        </div>

        {/* Section Header */}
        <div className="philosophy-header">
          <motion.h2 
            className="philosophy-title headline-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {philosophySection.title}
          </motion.h2>
          <p className="philosophy-subtitle">{philosophySection.subtitle}</p>
        </div>

        {/* 4 Phases Navigation / Tabs */}
        <div className="phases-tabs-container">
          <div className="phases-nav">
            {philosophySection.phases.map((phase, idx) => (
              <button
                key={phase.num}
                onClick={() => setActivePhase(idx)}
                className={`phase-tab-btn ${activePhase === idx ? 'is-active' : ''}`}
              >
                <span className="tab-num">Phase {phase.num}</span>
                <span className="tab-name">{phase.name}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Showcase */}
          <div className="phase-card-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                className="phase-active-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <div className="phase-display-header">
                  <div className="phase-badge">
                    {phaseIcons[activePhase]}
                    <span>Phase {philosophySection.phases[activePhase].num}</span>
                  </div>
                  <span className="phase-big-number">{philosophySection.phases[activePhase].num}</span>
                </div>

                <h3 className="phase-active-name">
                  {philosophySection.phases[activePhase].num}. {philosophySection.phases[activePhase].name}
                </h3>

                <p className="phase-active-description">
                  {philosophySection.phases[activePhase].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
