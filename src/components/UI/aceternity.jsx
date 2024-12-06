// src/components/ui/aceternity.jsx
import React from 'react';

export const SparklesCore = ({ 
  background = "transparent", 
  minSize = 0.4, 
  maxSize = 1, 
  particleDensity = 50, 
  particleColor = "#FFFFFF",
  className = ""
}) => {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ 
        background,
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    >
      {/* You can add more complex particle generation logic here */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
          background: `radial-gradient(circle, ${particleColor} 0%, transparent 70%)`
        }}
      />
    </div>
  );
};

export const BackgroundBeams = ({ className = "" }) => {
  return (
    <div 
      className={`absolute inset-0 opacity-20 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'
      }}
    />
  );
};

export const TextGenerateEffect = ({ words, className = "" }) => {
  return (
    <div className={`text-animate ${className}`}>
      {words}
    </div>
  );
};