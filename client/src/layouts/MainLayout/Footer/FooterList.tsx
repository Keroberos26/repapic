import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <div className="text-sm">
    <Link to={to} className="transition-all hover:pl-2 hover:text-main">
      {children}
    </Link>
  </div>
);

interface FooterListProps {
  heading: string;
  children: React.ReactNode;
}

const FooterList: FC<FooterListProps> = ({ heading, children }) => {
  return (
    <>
      <h3 className="mb-5 text-2xl font-semibold tracking-tighter">{heading}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </>
  );
};

export default FooterList;
