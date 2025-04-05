
import AppLayout from '@/components/AppLayout';
import DataEntryForm from '@/components/DataEntryForm';
import { Gauge, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DataEntry = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <main className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-6"
        >
          <div className="bg-green-400/10 p-2 rounded-xl mr-4">
            <Gauge size={32} className="text-green-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Data Entry</h1>
            <p className="text-sm text-gray-500">Enter motor and gear assembly details</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="modern-card"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">New Entry</h2>
            <span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-md">Ready for input</span>
          </div>
          <DataEntryForm />
          <div className="mt-6 flex justify-end">
            <button 
              className="button-primary flex items-center"
              onClick={() => navigate('/view-data')}
            >
              <span>View Data</span>
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </motion.div>
      </main>
    </AppLayout>
  );
};

export default DataEntry;
