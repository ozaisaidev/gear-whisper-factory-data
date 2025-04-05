
import React, { useState } from 'react';
import { Edit, Trash2, FileDown, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

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
];

const DataTable = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<MotorData[]>(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof MotorData>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (field: keyof MotorData) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  const filteredData = sortedData.filter(item => 
    item.motorNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.vehicleSerialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.vinNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
    toast.success("Record deleted successfully");
  };

  const handleEdit = (record: MotorData) => {
    // Store the record data in sessionStorage to access it in the DataEntry page
    sessionStorage.setItem('editRecord', JSON.stringify(record));
    navigate('/data-entry');
  };

  const getSortIcon = (field: keyof MotorData) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
  };

  return (
    <div className="industrial-card p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-bold text-industrial-blue mb-4 md:mb-0">Recent Data Entries</h2>
        
        <div className="w-full md:w-auto flex">
          <div className="relative flex-1 md:flex-none">
            <input
              type="text"
              placeholder="Search by motor #, VIN..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10 w-full md:w-64"
            />
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-industrial-gray" />
          </div>
          
          <button 
            className="ml-2 px-4 py-2 bg-industrial-light text-industrial-blue rounded-md flex items-center hover:bg-industrial-light/80 transition-colors hover:scale-105 duration-200"
            onClick={() => navigate('/export-data')}
          >
            <FileDown size={18} className="mr-2" />
            <span>Export</span>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th 
                className="cursor-pointer hover:bg-industrial-light/70 transition-colors"
                onClick={() => handleSort('motorNumber')}
              >
                <div className="flex items-center">
                  Motor # {getSortIcon('motorNumber')}
                </div>
              </th>
              <th>Gear Numbers</th>
              <th 
                className="cursor-pointer hover:bg-industrial-light/70 transition-colors"
                onClick={() => handleSort('vehicleSerialNumber')}
              >
                <div className="flex items-center">
                  Vehicle Serial {getSortIcon('vehicleSerialNumber')}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-industrial-light/70 transition-colors"
                onClick={() => handleSort('timestamp')}
              >
                <div className="flex items-center">
                  Timestamp {getSortIcon('timestamp')}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-industrial-light/70 transition-colors"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center">
                  Status {getSortIcon('status')}
                </div>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-industrial-light/30 transition-colors">
                  <td>
                    <div className="flex items-center">
                      {item.motorNumber}
                      <div className="ml-2 animate-pulse w-2 h-2 rounded-full bg-industrial-accent"></div>
                    </div>
                  </td>
                  <td>
                    <span className="block text-xs">Drive: {item.driveGearNumber}</span>
                    <span className="block text-xs">Driven: {item.drivenGearNumber}</span>
                  </td>
                  <td>{item.vehicleSerialNumber}</td>
                  <td>{formatDate(item.timestamp)}</td>
                  <td>
                    <span 
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Good' 
                          ? 'bg-industrial-success/20 text-industrial-success' 
                          : 'bg-industrial-error/20 text-industrial-error'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex space-x-2">
                      <button 
                        className="p-1 text-industrial-gray hover:text-industrial-blue transition-colors hover:scale-110 duration-200"
                        title="Edit"
                        onClick={() => handleEdit(item)}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="p-1 text-industrial-gray hover:text-industrial-error transition-colors hover:scale-110 duration-200"
                        title="Delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-8 text-industrial-gray">
                  No data entries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
