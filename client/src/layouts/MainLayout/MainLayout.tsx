import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Default: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-[#f5f5f7]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Default;
