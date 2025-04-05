
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-industrial-light to-white">
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
          <h1 className="text-4xl font-bold text-industrial-blue mb-4">Gear Whisper</h1>
          <p className="text-xl text-industrial-gray mb-8">Factory Data Entry Dashboard</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-10 h-10 relative">
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
              className="absolute inset-0 rounded-full bg-industrial-accent/30"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-full border-t-2 border-r-2 border-industrial-blue rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
