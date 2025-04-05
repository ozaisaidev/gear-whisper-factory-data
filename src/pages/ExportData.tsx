
import AppLayout from '@/components/AppLayout';
import { FileText, Download, Cloud, Database, Upload } from 'lucide-react';
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
          
          {/* Export to OneDrive */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h2 className="text-lg font-semibold mb-4 text-industrial-blue flex items-center gap-2">
              <Cloud className="text-blue-500" size={20} />
              Export to OneDrive
            </h2>
            <p className="text-industrial-gray mb-6">Upload your motor data directly to Microsoft OneDrive</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="fileName" className="label-text">File Name</label>
                <input 
                  id="fileName" 
                  type="text" 
                  className="input-field w-full" 
                  placeholder="motor_data"
                  defaultValue="motor_data"
                />
              </div>
              
              <div>
                <label htmlFor="fileType" className="label-text">File Type</label>
                <select id="fileType" className="input-field w-full">
                  <option>Excel (.xlsx)</option>
                  <option>CSV (.csv)</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  <span className="ml-3 text-sm text-industrial-gray">Append to existing file</span>
                </label>
              </div>
            </div>
            
            <Button className="w-full bg-blue-500 hover:bg-blue-600 gap-2">
              <Upload size={18} />
              Upload to OneDrive
            </Button>
          </motion.div>
          
          {/* Export to S3 */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="industrial-card p-6"
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
