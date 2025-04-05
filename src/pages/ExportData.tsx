
import AppLayout from '@/components/AppLayout';
import { FileText, Download, Database, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ExportData = () => {
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
          <FileText size={32} className="mr-3 text-industrial-blue" />
          <div>
            <h1 className="text-2xl font-bold text-industrial-blue">Export Data</h1>
            <p className="text-sm text-industrial-gray">Export and backup your motor data</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Export to Excel */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-lg font-semibold mb-4 text-industrial-blue">Export to Excel</h2>
            <p className="text-industrial-gray mb-6">Export all motor data to Microsoft Excel format (.xlsx)</p>
            <Button className="w-full bg-teal-600 hover:bg-teal-700 gap-2">
              <Download size={18} />
              Download Excel File
            </Button>
          </motion.div>
          
          {/* Export to CSV */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-lg font-semibold mb-4 text-industrial-blue">Export to CSV</h2>
            <p className="text-industrial-gray mb-6">Export all motor data to CSV format for compatibility with various applications</p>
            <Button variant="outline" className="w-full gap-2">
              <Download size={18} />
              Download CSV File
            </Button>
          </motion.div>
          
          {/* Export to S3 */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6 col-span-1 md:col-span-2"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-lg font-semibold mb-4 text-industrial-blue flex items-center gap-2">
              <Database className="text-green-500" size={20} />
              Export to S3
            </h2>
            <p className="text-industrial-gray mb-6">Upload your motor data to cloud storage for secure backup and sharing</p>
            <Button className="w-full bg-green-500 hover:bg-green-600 gap-2">
              <Upload size={18} />
              Upload to S3
            </Button>
          </motion.div>
        </div>
      </main>
    </AppLayout>
  );
};

export default ExportData;
