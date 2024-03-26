import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="h-[2000px]">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
