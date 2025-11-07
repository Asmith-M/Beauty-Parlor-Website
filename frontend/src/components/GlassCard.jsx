import React from 'react';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div 
      className={`glass-card rounded-2xl p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;