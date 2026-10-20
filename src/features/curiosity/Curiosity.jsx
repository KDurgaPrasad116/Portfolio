import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Sparkles, Terminal } from 'lucide-react';
import './Curiosity.css';

export const Curiosity = () => {
  const { curiositySection } = portfolioData;

  return (
    <section id="curiosity" className="curiosity-section">
      <div className="container">
        {/* Section Pill: [ 08 / 09 ] THE CURIOSITY */}
        <div className="section-tag-wrapper">
          <span className="section-tag-number">{curiositySection.tag}</span>
          <span className="section-tag-label">{curiositySection.label}</span>
        </div>

        {/* Narrative layout with large typography */}
        <div className="curiosity-content-box">
          <motion.h2 
            className="curiosity-title headline-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {curiositySection.title}
          </motion.h2>

          <p className="curiosity-quote font-mono">
            {curiositySection.quote}
          </p>

          <div className="curiosity-story">
            {curiositySection.paragraphs.map((para, idx) => (
              <motion.p 
                key={idx}
                className="story-para"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="curiosity-stack-summary font-mono">
            <Terminal size={14} className="terminal-icon" />
            <span>{curiositySection.techStackSummary}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
