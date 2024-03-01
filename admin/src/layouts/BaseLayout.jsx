import React from 'react';
import { Container } from '../components';
import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header>
        <Container>
          <div className="flex items-center justify-between h-20">
            <div>Logo</div>
            <Link className="text-sm font-semibold hover:underline">Cần giúp đỡ?</Link>
          </div>
        </Container>
      </header>
      <div className="flex items-center justify-center flex-grow background-3">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
