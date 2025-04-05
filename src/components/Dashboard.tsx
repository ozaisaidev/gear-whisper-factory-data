
import React from 'react';
import Header from './Header';
import DataEntryForm from './DataEntryForm';
import DataTable from './DataTable';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="modern-card">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Data Entry</h2>
            <DataEntryForm />
          </div>
          
          <div className="modern-card">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Records</h2>
            <DataTable />
          </div>
        </div>
      </main>
      <footer className="bg-modern-dark text-white py-4 mt-8">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© 2025 Gear Whisper Factory Data Entry Dashboard</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
