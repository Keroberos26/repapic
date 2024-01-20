import React from 'react';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <span>Admin</span>
      <Outlet />
    </div>
  );
};

export default Admin;
