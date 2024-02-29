import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
