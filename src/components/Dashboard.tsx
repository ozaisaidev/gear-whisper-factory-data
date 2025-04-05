
import React from 'react';
import Header from './Header';
import DataEntryForm from './DataEntryForm';
import DataTable from './DataTable';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-industrial-light/30">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <DataEntryForm />
          <DataTable />
        </div>
      </main>
      <footer className="bg-industrial-blue text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2025 Gear Whisper Factory Data Entry Dashboard</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
