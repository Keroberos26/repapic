import React, { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`container px-3 mx-auto ${className}`}>{children}</div>;
};

export default Container;
