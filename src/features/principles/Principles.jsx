import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import './Principles.css';

export const Principles = () => {
  const { principlesSection } = portfolioData;

  return (
    <section id="principles" className="principles-section">
      <div className="container">
        {/* Section Pill: [ 07 / 09 ] PRINCIPLES */}
        <div className="section-tag-wrapper">
          <span className="section-tag-number">{principlesSection.tag}</span>
          <span className="section-tag-label">{principlesSection.label}</span>
        </div>

        {/* Section Header */}
        <div className="principles-header">
          <motion.h2 
            className="principles-title headline-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {principlesSection.title}
          </motion.h2>
          <p className="principles-subtitle">{principlesSection.subtitle}</p>
        </div>

        {/* 17 Rules List in Clean Editorial Layout */}
        <div className="principles-grid">
          {principlesSection.rules.map((rule, idx) => (
            <motion.div 
              key={rule.num}
              className="principle-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            >
              <div className="principle-num-wrap">
                <span className="principle-num">{rule.num}.</span>
              </div>
              <h4 className="principle-text font-display">{rule.text}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
