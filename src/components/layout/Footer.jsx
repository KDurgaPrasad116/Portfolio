import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUp, Terminal } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Giant brand callout */}
        <div className="footer-hero-brand">
          <span className="footer-massive-text headline-gradient">
            {profile.handle}
          </span>
        </div>

        {/* Bottom meta row */}
        <div className="footer-bottom-row">
          <div className="footer-left">
            <span className="footer-copy font-mono">
              {profile.year} {profile.name} — All systems operational.
            </span>
            <span className="footer-subcopy font-mono">
              Designed with dark editorial aesthetics.
            </span>
          </div>

          <div className="footer-links">
            <a 
              href={profile.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link font-mono"
            >
              GITHUB
            </a>
            {profile.linkedInUrl && (
              <a 
                href={profile.linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link font-mono"
              >
                LINKEDIN
              </a>
            )}
            {profile.resumeUrl && (
              <a 
                href={profile.resumeUrl} 
                download="K_Durga_Prasad_Resume.pdf"
                className="footer-link font-mono"
                title="Download Resume PDF"
              >
                RESUME
              </a>
            )}
            <a 
              href={`mailto:${profile.email}`} 
              className="footer-link font-mono"
            >
              EMAIL
            </a>
            <button onClick={scrollToTop} className="back-to-top font-mono">
              <span>TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
