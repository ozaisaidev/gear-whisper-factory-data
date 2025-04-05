
import AppLayout from '@/components/AppLayout';
import { Mic, AudioWaveform, Volume2, Radio } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const AudioAnalysis = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const waveformVariants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const waveBarVariants: Variants = {
    initial: { height: 10 },
    animate: { 
      height: [10, 30, 10],
      transition: {
        repeat: Infinity,
        duration: 0.8,
        ease: "easeInOut",
        repeatType: "mirror"  // Using "mirror" which is a valid value
      }
    }
  };

  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-8"
        >
          <Mic size={32} className="mr-3 text-industrial-blue" />
          <div>
            <h1 className="text-2xl font-bold text-industrial-blue">Audio Analysis</h1>
            <p className="text-sm text-industrial-gray">Analyze and visualize motor audio recordings</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6 lg:col-span-2"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AudioWaveform className="text-industrial-blue" size={20} />
              <span>Waveform Analysis</span>
            </h2>
            <div className="bg-industrial-light/50 rounded-lg h-64 flex items-center justify-center">
              <motion.div 
                className="flex items-end space-x-1 h-40"
                variants={waveformVariants}
                initial="initial"
                animate="animate"
              >
                {Array.from({ length: 30 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-industrial-accent rounded-t-sm"
                    variants={waveBarVariants}
                    style={{ 
                      animationDelay: `${i * 0.05}s`,
                      height: `${Math.sin(i * 0.2) * 20 + 20}px` 
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Volume2 className="text-industrial-blue" size={20} />
              <span>Audio Recordings</span>
            </h2>
            <div className="space-y-4">
              {['500 RPM', '1500 RPM', '3000 RPM', '4500 RPM'].map((rpm, index) => (
                <motion.div 
                  key={rpm}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-3 bg-industrial-light/50 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Radio className="text-industrial-accent mr-2" size={16} />
                    <span>{rpm}</span>
                  </div>
                  <button className="p-2 rounded-full bg-industrial-blue/10 hover:bg-industrial-blue/20 transition-colors">
                    <Volume2 size={16} className="text-industrial-blue" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6 lg:col-span-3"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Mic className="text-industrial-blue" size={20} />
              <span>Frequency Analysis</span>
            </h2>
            <div className="bg-industrial-light/50 rounded-lg h-64 flex items-center justify-center">
              <p className="text-industrial-gray">Frequency analysis will appear here</p>
            </div>
          </motion.div>
        </div>
      </main>
    </AppLayout>
  );
};

export default AudioAnalysis;
