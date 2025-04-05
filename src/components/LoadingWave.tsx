
import { motion } from 'framer-motion';

const LoadingWave = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex space-x-1">
        {[0, 1, 2, 3, 4].map((index) => (
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
            className="w-2 h-12 bg-modern-primary rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingWave;
