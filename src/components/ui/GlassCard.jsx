import React from 'react';
import './GlassCard.css';

/**
 * Premium Glassmorphism Card with blur backing, fine borders, and scale highlights on hover.
 */
export const GlassCard = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <div 
      className={`glass-card glass ${hoverEffect ? 'glass-card-hover' : ''} ${className}`}
      {...props}
    >
      <div className="glass-card-border-glow"></div>
      <div className="glass-card-content">{children}</div>
    </div>
  );
};

export default GlassCard;
