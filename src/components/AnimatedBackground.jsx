import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Generate multiple animated shapes
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    delay: Math.random() * 2,
    duration: Math.random() * 5 + 3,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    color: getRandomColor()
  }));

  function getRandomColor() {
    const colors = [
      'rgba(126, 34, 206, 0.1)', // Purple
      'rgba(126, 34, 206, 0.05)', // Light Purple
      'rgba(79, 70, 229, 0.1)', // Indigo
      'rgba(55, 48, 163, 0.05)' // Dark Indigo
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-2xl opacity-50"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color
          }}
          animate={{
            x: [shape.x, -shape.x, shape.x],
            y: [shape.y, -shape.y, shape.y],
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;