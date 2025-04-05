
import React from 'react';
import { Gauge, Database, FileUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-industrial-blue text-white p-4 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Gauge size={32} className="mr-3" />
          <div>
            <h1 className="text-2xl font-bold">Gear Whisper</h1>
            <p className="text-sm opacity-80">Factory Data Entry Dashboard</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-3 py-2 rounded hover:bg-white/10 transition-colors">
            <Database size={18} className="mr-2" />
            <span>View Records</span>
          </button>
          <button className="flex items-center px-3 py-2 bg-industrial-highlight text-industrial-blue font-medium rounded hover:bg-opacity-90 transition-colors">
            <FileUp size={18} className="mr-2" />
            <span>Export Data</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
