import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="flex justify-center h-screen background-3">
      <main className="flex flex-col px-4 lg:px-16 w-full max-w-[480px] flex-grow">
        <div className="h-10 mt-4 mb-20 lg:my-16">OK</div>
        <Outlet />
      </main>
      <div className="hidden w-full p-4 lg:block">
        <img src="/images/backgrounds/overlay_3.jpg" alt="Auth" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default AuthLayout;
