import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const { profile } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner container">
        {/* Brand Handle */}
        <div className="header-left">
          <a href="#hero" className="brand-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <span className="brand-handle">{profile.handle}</span>
            <span className="brand-year">{profile.year}</span>
          </a>
        </div>

        {/* Center / Navigation Links */}
        <nav className="header-nav">
          <button onClick={() => scrollToSection('skills')} className="nav-item">
            <span className="nav-num">02</span>
            <span>SKILLS</span>
          </button>
          <button onClick={() => scrollToSection('journey')} className="nav-item">
            <span className="nav-num">03</span>
            <span>JOURNEY</span>
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-item">
            <span className="nav-num">04</span>
            <span>PROJECTS</span>
          </button>
          <button onClick={() => scrollToSection('philosophy')} className="nav-item">
            <span className="nav-num">06</span>
            <span>METHOD</span>
          </button>
          <button onClick={() => scrollToSection('principles')} className="nav-item">
            <span className="nav-num">07</span>
            <span>PRINCIPLES</span>
          </button>
        </nav>

        {/* Right Action: Email pill + GitHub + Contact button */}
        <div className="header-right">
          <button 
            className="email-pill"
            onClick={handleCopyEmail}
            title="Click to copy email"
          >
            <span className="email-dot"></span>
            <span className="email-text">{profile.email}</span>
            {copied ? <Check size={12} className="copy-icon text-success" /> : <Copy size={12} className="copy-icon" />}
          </button>

          <a 
            href={profile.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-link"
          >
            <span>GITHUB</span>
            <ArrowUpRight size={13} />
          </a>

          {profile.linkedInUrl && (
            <a 
              href={profile.linkedInUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="header-link header-link-linkedin"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight size={13} />
            </a>
          )}

          {profile.resumeUrl && (
            <a 
              href={profile.resumeUrl} 
              download="K_Durga_Prasad_Resume.pdf"
              className="header-link header-link-resume"
              title="Download Resume PDF"
            >
              <span>RESUME</span>
              <ArrowUpRight size={13} />
            </a>
          )}

          <button 
            className="contact-btn"
            onClick={() => scrollToSection('contact')}
          >
            CONTACT
          </button>
        </div>
      </div>
    </header>
  );
};
