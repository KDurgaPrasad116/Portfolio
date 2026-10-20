import React from 'react';
import './Button.css';

/**
 * Premium Button component styled with coffee accents and Apple-like physics.
 * 
 * @param {string} variant 'primary' | 'secondary' | 'text'
 */
export const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  disabled = false,
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`premium-btn btn-${variant} ${className}`}
      {...props}
    >
      <span className="btn-content">{children}</span>
      <span className="btn-glow-effect"></span>
    </button>
  );
};

export default Button;
