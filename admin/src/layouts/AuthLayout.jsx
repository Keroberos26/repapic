import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <main className="flex items-center px-16">
        <Outlet />
      </main>
      <div className="flex-grow p-4">
        <img src="/images/backgrounds/overlay_3.jpg" alt="Auth" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default AuthLayout;
