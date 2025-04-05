
import AppLayout from '@/components/AppLayout';
import { BarChart2, TrendingUp, BarChart, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const Analytics = () => {
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

  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-8"
        >
          <BarChart2 size={32} className="mr-3 text-industrial-blue" />
          <div>
            <h1 className="text-2xl font-bold text-industrial-blue">Analytics</h1>
            <p className="text-sm text-industrial-gray">Visualize and analyze motor data</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6 col-span-2"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="text-industrial-blue" size={20} />
              <span>Performance Trends</span>
            </h2>
            <div className="bg-industrial-light/50 rounded-lg h-64 flex items-center justify-center">
              <p className="text-industrial-gray">Performance trend chart will appear here</p>
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
              <BarChart className="text-industrial-blue" size={20} />
              <span>Noise Levels by RPM</span>
            </h2>
            <div className="bg-industrial-light/50 rounded-lg h-64 flex items-center justify-center">
              <p className="text-industrial-gray">Bar chart will appear here</p>
            </div>
          </motion.div>
          
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6"
          >
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <PieChart className="text-industrial-blue" size={20} />
              <span>Motor Status Distribution</span>
            </h2>
            <div className="bg-industrial-light/50 rounded-lg h-64 flex items-center justify-center">
              <p className="text-industrial-gray">Pie chart will appear here</p>
            </div>
          </motion.div>
        </div>
      </main>
    </AppLayout>
  );
};

export default Analytics;
