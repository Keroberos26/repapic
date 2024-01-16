import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface DefaultProps {
  children: React.ReactNode;
}

const Default: React.FC<DefaultProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Default;
