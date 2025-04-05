
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to data entry page after animation
    const timer = setTimeout(() => {
      navigate('/data-entry');
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="bg-modern-primary/10 p-4 rounded-full">
              <div className="text-modern-primary text-4xl">⚡</div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Gear Whisper</h1>
          <p className="text-xl text-gray-500 mb-8">Factory Data Entry Dashboard</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-12 h-12 relative">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-modern-primary/30"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-full border-t-2 border-r-2 border-modern-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
