import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AppLayout from '@/components/AppLayout';
import LoadingWave from '@/components/LoadingWave';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <AppLayout>
        <div className="h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Loading Dashboard</h2>
            <LoadingWave size="lg" color="#5B63FE" barCount={7} />
            <p className="mt-4 text-gray-500">Preparing your motor data...</p>
          </motion.div>
        </div>
      </AppLayout>
    );
  }
  
  return (
    <AppLayout>
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Motor Analytics Dashboard</h1>
          <p className="text-gray-500 mt-2">Welcome to your factory data dashboard</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="modern-card"
          >
            <h3 className="text-lg font-semibold mb-2">Total Motors</h3>
            <p className="text-3xl font-bold text-modern-primary">247</p>
            <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="modern-card"
          >
            <h3 className="text-lg font-semibold mb-2">Issue Rate</h3>
            <p className="text-3xl font-bold text-modern-primary">2.4%</p>
            <p className="text-sm text-gray-500 mt-2">-0.5% from last month</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="modern-card"
          >
            <h3 className="text-lg font-semibold mb-2">Pending Inspection</h3>
            <p className="text-3xl font-bold text-modern-primary">12</p>
            <p className="text-sm text-gray-500 mt-2">Updated just now</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="modern-card"
          >
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start pb-4 border-b border-gray-100">
                  <div className="bg-modern-primary/10 p-2 rounded-full mr-3">
                    <div className="w-2 h-2 bg-modern-primary rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium">Motor M1029{item} processed</p>
                    <p className="text-sm text-gray-500">April {item + 1}, 2025 • 10:2{item} AM</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="modern-card"
          >
            <h3 className="text-lg font-semibold mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Database</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Operational
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>API Services</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Operational
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Audio Processing</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Operational
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Data Export</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Degraded
                </span>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">Last updated: April 5, 2025 • 18:32</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
