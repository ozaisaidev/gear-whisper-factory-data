
import AppLayout from '@/components/AppLayout';
import DataEntryForm from '@/components/DataEntryForm';
import { Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

const DataEntry = () => {
  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-6"
        >
          <Gauge size={32} className="mr-3 text-industrial-blue" />
          <div>
            <h1 className="text-2xl font-bold text-industrial-blue">Data Entry</h1>
            <p className="text-sm text-industrial-gray">Enter motor and gear assembly details</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <DataEntryForm />
        </motion.div>
      </main>
    </AppLayout>
  );
};

export default DataEntry;
