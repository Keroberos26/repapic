import React, { FC } from 'react';
import Container from './Container';
import { Breadcrumbs as MUIBreadcrumbs } from '@mui/material';
import config from '../config';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

interface BreadcrumbsProps {
  children: React.ReactNode;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => {
  return (
    <div className="bg-white py-[10px] lg:py-5 text-center">
      <Container>
        <MUIBreadcrumbs className="inline-block" sx={{ fontSize: '13px', color: 'var(--text-color)' }}>
          <Link to={config.routes.home}>
            <FaHome />
          </Link>
          {children}
        </MUIBreadcrumbs>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
