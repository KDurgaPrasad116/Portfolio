import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Flame, ShieldCheck, GitBranch } from 'lucide-react';
import './Craft.css';

export const Craft = () => {
  const { craftSection } = portfolioData;

  const pillarIcons = [
    <Flame size={20} className="craft-icon" key="flame" />,
    <ShieldCheck size={20} className="craft-icon" key="shield" />,
    <GitBranch size={20} className="craft-icon" key="branch" />
  ];

  return (
    <section id="craft" className="craft-section">
      <div className="container">
        {/* Section Pill: [ 05 / 09 ] AFTER CODE */}
        <div className="section-tag-wrapper">
          <span className="section-tag-number">{craftSection.tag}</span>
          <span className="section-tag-label">{craftSection.label}</span>
        </div>

        {/* Massive Headline and Ogilvy Quote */}
        <div className="craft-header">
          <motion.h2 
            className="craft-title headline-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {craftSection.title}
          </motion.h2>

          <p className="craft-quote font-mono">
            {craftSection.quote}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="craft-grid">
          {craftSection.pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              className="craft-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="craft-card-top">
                <span className="craft-code">{pillar.code}</span>
                {pillarIcons[idx]}
              </div>

              <h3 className="craft-pillar-title">{pillar.title}</h3>
              <p className="craft-pillar-desc">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
