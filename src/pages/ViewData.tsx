
import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { motion } from 'framer-motion';
import { Database, Search, Edit, Trash2, Eye, Download, Filter } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

interface MotorData {
  id: string;
  motorNumber: string;
  driveShaftNumber: string;
  driveGearNumber: string;
  drivenGearNumber: string;
  vehicleSerialNumber: string;
  vinNumber: string;
  timestamp: string;
  status: 'Good' | 'Not Good';
  remarks: string;
}

const mockData: MotorData[] = [
  {
    id: '1',
    motorNumber: 'M10293',
    driveShaftNumber: 'DS8372',
    driveGearNumber: 'DG9283',
    drivenGearNumber: 'DN7362',
    vehicleSerialNumber: 'VS2837465',
    vinNumber: 'WBA12345678901234',
    timestamp: '2025-04-05T10:23:45',
    status: 'Good',
    remarks: 'Assembly completed with no issues',
  },
  {
    id: '2',
    motorNumber: 'M10294',
    driveShaftNumber: 'DS8373',
    driveGearNumber: 'DG9284',
    drivenGearNumber: 'DN7363',
    vehicleSerialNumber: 'VS2837466',
    vinNumber: 'WBA12345678901235',
    timestamp: '2025-04-05T11:15:22',
    status: 'Not Good',
    remarks: 'Unusual noise detected at 3000 RPM',
  },
  {
    id: '3',
    motorNumber: 'M10295',
    driveShaftNumber: 'DS8374',
    driveGearNumber: 'DG9285',
    drivenGearNumber: 'DN7364',
    vehicleSerialNumber: 'VS2837467',
    vinNumber: 'WBA12345678901236',
    timestamp: '2025-04-05T13:42:18',
    status: 'Good',
    remarks: '',
  },
  {
    id: '4',
    motorNumber: 'M10296',
    driveShaftNumber: 'DS8375',
    driveGearNumber: 'DG9286',
    drivenGearNumber: 'DN7365',
    vehicleSerialNumber: 'VS2837468',
    vinNumber: 'WBA12345678901237',
    timestamp: '2025-04-05T14:30:05',
    status: 'Good',
    remarks: 'Regular maintenance completed',
  },
  {
    id: '5',
    motorNumber: 'M10297',
    driveShaftNumber: 'DS8376',
    driveGearNumber: 'DG9287',
    drivenGearNumber: 'DN7366',
    vehicleSerialNumber: 'VS2837469',
    vinNumber: 'WBA12345678901238',
    timestamp: '2025-04-05T15:17:33',
    status: 'Not Good',
    remarks: 'Vibration issues at high RPM',
  },
];

const ViewData = () => {
  const [data, setData] = useState<MotorData[]>(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<MotorData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [sortField, setSortField] = useState<keyof MotorData>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Good' | 'Not Good'>('All');

  const handleSort = (field: keyof MotorData) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleEdit = (item: MotorData) => {
    setSelectedItem(item);
    toast.info(`Edit functionality for Motor ${item.motorNumber} would be implemented here.`);
  };

  const confirmDelete = (item: MotorData) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (selectedItem) {
      const newData = data.filter(item => item.id !== selectedItem.id);
      setData(newData);
      toast.success(`Motor ${selectedItem.motorNumber} deleted successfully!`);
      setIsDeleteModalOpen(false);
      setSelectedItem(null);
    }
  };

  const handleView = (item: MotorData) => {
    setSelectedItem(item);
    toast.info(`View details for Motor ${item.motorNumber} would be implemented here.`);
  };

  const handleExport = () => {
    toast.success('Data exported successfully!');
  };

  const filteredData = data
    .filter(item => {
      // Status filter
      if (statusFilter !== 'All' && item.status !== statusFilter) {
        return false;
      }
      
      // Search term filter
      return (
        item.motorNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.vehicleSerialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.vinNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.remarks.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
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
          <Database size={32} className="mr-3 text-modern-primary" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">View Data</h1>
            <p className="text-sm text-gray-500">Manage and explore motor data records</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="modern-card mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Motor Data Records</h2>
            
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
              <div className="relative flex-1 md:flex-none">
                <input
                  type="text"
                  placeholder="Search by motor #, VIN..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10 w-full md:w-64"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <div className="flex-shrink-0">
                <select 
                  className="input-field"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as 'All' | 'Good' | 'Not Good')}
                >
                  <option value="All">All Status</option>
                  <option value="Good">Good</option>
                  <option value="Not Good">Not Good</option>
                </select>
              </div>
              
              <Button onClick={handleExport} className="bg-modern-primary hover:bg-modern-primary/90 gap-2">
                <Download size={18} />
                <span>Export</span>
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100" onClick={() => handleSort('motorNumber')}>
                    Motor #
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Gear Numbers
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100" onClick={() => handleSort('vehicleSerialNumber')}>
                    Vehicle Serial
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100" onClick={() => handleSort('timestamp')}>
                    Timestamp
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100" onClick={() => handleSort('status')}>
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Remarks
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">{item.motorNumber}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="block text-xs">Drive: {item.driveGearNumber}</span>
                      <span className="block text-xs">Driven: {item.drivenGearNumber}</span>
                    </td>
                    <td className="px-4 py-3 text-sm">{item.vehicleSerialNumber}</td>
                    <td className="px-4 py-3 text-sm">{formatDate(item.timestamp)}</td>
                    <td className="px-4 py-3 text-sm">
                      <span 
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Good' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{item.remarks || '-'}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex justify-center space-x-2">
                        <button 
                          className="p-1 text-gray-500 hover:text-blue-600 transition-colors"
                          onClick={() => handleView(item)}
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button 
                          className="p-1 text-gray-500 hover:text-modern-primary transition-colors"
                          onClick={() => handleEdit(item)}
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button 
                          className="p-1 text-gray-500 hover:text-red-600 transition-colors"
                          onClick={() => confirmDelete(item)}
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-gray-500">
                      No data records found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {isDeleteModalOpen && selectedItem && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 max-w-md mx-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Delete</h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete motor <span className="font-semibold">{selectedItem.motorNumber}</span>? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-3">
                  <Button 
                    variant="outline"
                    onClick={() => setIsDeleteModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </main>
    </AppLayout>
  );
};

export default ViewData;
