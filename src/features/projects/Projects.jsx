import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUpRight, Code2, Sparkles, FolderGit2 } from 'lucide-react';
import './Projects.css';

export const Projects = () => {
  const { projectsSection } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Pill: [ 04 / 09 ] PROJECTS */}
        <div className="section-tag-wrapper">
          <span className="section-tag-number">{projectsSection.tag}</span>
          <span className="section-tag-label">{projectsSection.label}</span>
        </div>

        {/* Section Header */}
        <div className="projects-header">
          <motion.h2 
            className="projects-title headline-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {projectsSection.title}
          </motion.h2>

          <p className="projects-desc">
            {projectsSection.description}
          </p>
        </div>

        {/* Project Cards (Large, Editorial, Framer-inspired) */}
        <div className="projects-list">
          {projectsSection.items.map((project, idx) => (
            <motion.div 
              key={project.id}
              className="project-row-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Card Header: Code & Category */}
              <div className="project-top-meta">
                <div className="meta-left">
                  <span className="project-code">{project.code}</span>
                  <span className="project-status-pill">{project.status}</span>
                </div>
                <span className="project-category">{project.category}</span>
              </div>

              {/* Title & Tagline */}
              <div className="project-body">
                <div className="project-titles-block">
                  <h3 className="project-heading">{project.title}</h3>
                  {project.subtitle && <span className="project-sub">{project.subtitle}</span>}
                </div>

                <p className="project-tagline">{project.tagline}</p>
                <p className="project-long-desc">{project.description}</p>
              </div>

              {/* Tech stack & Actions */}
              <div className="project-bottom-meta">
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-icon-link"
                    title="View Source on GitHub"
                  >
                    <FolderGit2 size={15} />
                    <span>CODE</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="action-link-btn"
                  >
                    <span>VIEW LIVE</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote about experiments */}
        <div className="projects-footer-note">
          <div className="note-indicator"></div>
          <p>{projectsSection.note}</p>
        </div>
      </div>
    </section>
  );
};
