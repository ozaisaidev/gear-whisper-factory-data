
import React from 'react';
import Header from './Header';
import DataEntryForm from './DataEntryForm';
import DataTable from './DataTable';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileUp } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-end mb-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/export-data')}
            className="flex items-center px-4 py-2 bg-modern-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors shadow-sm"
          >
            <FileUp size={18} className="mr-2" />
            <span>Export Data</span>
          </motion.button>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 gap-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div 
            className="modern-card"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Data Entry</h2>
            <DataEntryForm />
          </motion.div>
          
          <motion.div 
            className="modern-card"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Records</h2>
            <DataTable />
          </motion.div>
        </motion.div>
      </main>
      <footer className="bg-modern-dark text-white py-4 mt-8">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© 2025 Motor Analytics Factory Data Entry Dashboard</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Dashboard;
