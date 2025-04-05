
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingWaveProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  barCount?: number;
}

const LoadingWave: React.FC<LoadingWaveProps> = ({
  color = "#5B63FE",
  size = "md",
  barCount = 5
}) => {
  // Size mapping
  const sizeMap = {
    sm: {
      height: 16,
      barWidth: 4,
      gap: 2,
    },
    md: {
      height: 30,
      barWidth: 6,
      gap: 3,
    },
    lg: {
      height: 40,
      barWidth: 8,
      gap: 4,
    }
  };

  const { height, barWidth, gap } = sizeMap[size];
  
  // Create array for the bars
  const bars = Array.from({ length: barCount });
  
  // Custom animation variants for wave effect
  const waveVariants = {
    initial: { height: height * 0.3 },
    animate: (i: number) => ({
      height: [height * 0.3, height * 0.8, height * 0.3],
      transition: {
        repeat: Infinity,
        repeatType: "mirror" as "mirror",
        duration: 1,
        delay: i * 0.1,
        ease: "easeInOut",
      }
    })
  };

  return (
    <div className="inline-flex items-end justify-center" style={{ height }}>
      {bars.map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="initial"
          animate="animate"
          variants={waveVariants}
          style={{
            width: barWidth,
            backgroundColor: color,
            marginLeft: i === 0 ? 0 : gap,
            borderRadius: barWidth / 2,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingWave;
