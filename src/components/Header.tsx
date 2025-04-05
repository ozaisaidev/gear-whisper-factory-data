
import React from 'react';
import { Gauge, Database, FileUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm py-4 px-6 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-modern-primary/10 p-2 rounded-full mr-3">
            <Gauge size={24} className="text-modern-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Gear Whisper</h1>
            <p className="text-xs text-gray-500">Factory Data Entry Dashboard</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <Database size={18} className="mr-2 text-gray-500" />
            <span>View Records</span>
          </button>
          <button className="flex items-center px-4 py-2 bg-modern-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors shadow-sm">
            <FileUp size={18} className="mr-2" />
            <span>Export Data</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
