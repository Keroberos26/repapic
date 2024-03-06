import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-[280px] border-r border-[#919eab33] border-dashed px-4 py-6">
        <Sidebar />
      </aside>
      <main className="flex-grow">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
