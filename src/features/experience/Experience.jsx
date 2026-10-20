import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Calendar, Compass } from 'lucide-react';
import './Experience.css';

export const Experience = () => {
  const { journeySection } = portfolioData;

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        {/* Section Tag: [ 03 / 09 ] MY JOURNEY */}
        <div className="section-tag-wrapper">
          <span className="section-tag-number">{journeySection.tag}</span>
          <span className="section-tag-label">{journeySection.label}</span>
        </div>

        {/* Section Header */}
        <div className="journey-header">
          <motion.h2 
            className="journey-title headline-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {journeySection.title}
          </motion.h2>
          <span className="journey-subtitle">{journeySection.subtitle}</span>
        </div>

        {/* Timeline Stack */}
        <div className="milestones-stack">
          {journeySection.milestones.map((item, index) => (
            <motion.div 
              key={index}
              className="milestone-row"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="milestone-left">
                <span className="milestone-num">[{item.number}]</span>
                <span className="milestone-tag">{item.tag}</span>
              </div>

              <div className="milestone-center">
                <h3 className="milestone-heading">{item.title}</h3>
                <p className="milestone-body">{item.description}</p>
              </div>

              <div className="milestone-right">
                <div className="milestone-period">
                  <Calendar size={13} className="period-icon" />
                  <span>{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
