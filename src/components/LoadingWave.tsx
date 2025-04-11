
import { motion } from 'framer-motion';

interface LoadingWaveProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  barCount?: number;
}

const LoadingWave = ({ 
  size = 'md', 
  color = '#5B63FE',
  barCount = 5 
}: LoadingWaveProps = {}) => {
  // Define sizes
  const sizes = {
    sm: { width: '1.5px', height: '8px', gap: '1px' },
    md: { width: '2px', height: '12px', gap: '1px' },
    lg: { width: '3px', height: '16px', gap: '2px' }
  };
  
  const { width, height, gap } = sizes[size];
  
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex" style={{ gap }}>
        {[...Array(barCount)].map((_, index) => (
          <motion.div
            key={index}
            animate={{
              y: ["0%", "-50%", "0%"],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            style={{ 
              width,
              height,
              backgroundColor: color,
              borderRadius: '999px'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingWave;
