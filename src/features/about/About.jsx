import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Cpu, Terminal, Layers, ArrowUpRight, FileDown } from 'lucide-react';
import './About.css';

export const About = () => {
  const { skillsSection } = portfolioData;

  const categoryIcons = [
    <Cpu size={18} className="cat-icon" key="cpu" />,
    <Layers size={18} className="cat-icon" key="layers" />,
    <Terminal size={18} className="cat-icon" key="terminal" />
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Pill: [ 02 / 09 ] SKILLS */}
        <div className="section-tag-wrapper">
          <span className="section-tag-number">{skillsSection.tag}</span>
          <span className="section-tag-label">{skillsSection.label}</span>
        </div>

        {/* Section Header */}
        <div className="skills-header">
          <motion.h2 
            className="skills-title headline-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skillsSection.title}
          </motion.h2>

          <p className="skills-intro">
            {skillsSection.description}
          </p>

          <div className="skills-action">
            <a 
              href={portfolioData.profile.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-github-btn"
            >
              <span>VIEW GITHUB</span>
              <ArrowUpRight size={14} />
            </a>
            {portfolioData.profile.linkedInUrl && (
              <a 
                href={portfolioData.profile.linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-linkedin-btn"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight size={14} />
              </a>
            )}
            {portfolioData.profile.resumeUrl && (
              <a 
                href={portfolioData.profile.resumeUrl} 
                download="K_Durga_Prasad_Resume.pdf"
                className="download-resume-btn"
                title="Download Resume PDF"
              >
                <FileDown size={14} />
                <span>RESUME</span>
              </a>
            )}
          </div>
        </div>

        {/* Interactive Infinite Pill Cloud */}
        <div className="skills-pills-row">
          {skillsSection.pills.map((pill, i) => (
            <span key={i} className="skill-pill">
              <span className="pill-dot"></span>
              {pill}
            </span>
          ))}
        </div>

        {/* 3 Structured Columns */}
        <div className="skills-grid">
          {skillsSection.categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="card-top">
                <span className="card-index">[0{idx + 1}]</span>
                {categoryIcons[idx]}
              </div>

              <h3 className="card-title">{cat.name}</h3>

              <ul className="card-items-list">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="card-item">
                    <span className="item-tick">//</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
