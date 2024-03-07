import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <SimpleBar forceVisible="y" className="overflow-clip">
        <aside className="flex-shrink-0 w-[280px] border-r border-[#919eab33] border-dashed px-4 py-6">
          <Sidebar />
        </aside>
      </SimpleBar>
      <main className="relative flex-grow max-h-full overflow-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
