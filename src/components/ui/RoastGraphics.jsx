import React from 'react';

export const RoastGraphics = ({ index }) => {
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 100 100" className="timeline-svg green-bean">
          <path d="M50 20 C30 20, 20 40, 20 50 C20 65, 30 80, 50 80 C70 80, 80 65, 80 50 C80 40, 70 20, 50 20 Z" fill="#758A67" />
          <path d="M48 20 Q53 45 48 80" stroke="#556848" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 100 100" className="timeline-svg light-roast">
          <path d="M50 20 C30 20, 20 40, 20 50 C20 65, 30 80, 50 80 C70 80, 80 65, 80 50 C80 40, 70 20, 50 20 Z" fill="#C59B7C" />
          <path d="M49 20 Q54 45 49 80" stroke="#8E6A4F" strokeWidth="2.5" fill="none" />
          <path d="M30 45 L25 42M70 55 L75 58" stroke="#8E6A4F" strokeWidth="2" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 100 100" className="timeline-svg medium-roast">
          <path d="M50 20 C30 20, 20 40, 20 50 C20 65, 30 80, 50 80 C70 80, 80 65, 80 50 C80 40, 70 20, 50 20 Z" fill="#6F4E37" />
          <path d="M50 20 Q55 45 50 80" stroke="#4B3222" strokeWidth="2.5" fill="none" />
          <ellipse cx="40" cy="38" rx="4" ry="10" transform="rotate(-30 40 38)" fill="rgba(255,255,255,0.12)" />
        </svg>
      );
    case 3:
    default:
      return (
        <svg viewBox="0 0 100 100" className="timeline-svg espresso-cup">
          <path d="M70 45 H78 C82 45 84 48 84 52 C84 57 82 60 78 60 H70" fill="none" stroke="var(--accent)" strokeWidth="3" />
          <path d="M25 35 H75 V55 C75 66 64 75 50 75 C36 75 25 66 25 55 V35 Z" fill="var(--text-primary)" />
          <ellipse cx="50" cy="35" rx="25" ry="6" fill="var(--accent)" />
          <ellipse cx="50" cy="35" rx="16" ry="3" fill="var(--bg-primary)" opacity="0.3" />
          <path d="M40 20 Q43 12 40 5" fill="none" stroke="var(--text-muted)" strokeWidth="2" className="steam-line" />
          <path d="M50 18 Q53 10 50 3" fill="none" stroke="var(--text-muted)" strokeWidth="2" className="steam-line" />
        </svg>
      );
  }
};

export default RoastGraphics;
