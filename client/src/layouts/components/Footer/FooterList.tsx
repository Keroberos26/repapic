import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

interface FooterListProps {
  heading: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => (
  <div className="text-sm text-black text-opacity-60 lg:text-base">
    <Link to={to} className="transition-all hover:pl-2 hover:underline">
      {children}
    </Link>
  </div>
);

const FooterList: React.FC<FooterListProps> = ({ heading, children }) => {
  return (
    <div>
      <h3 className="mb-4 font-medium uppercase md:mb-5 lg:mb-6">{heading}</h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export default FooterList;
