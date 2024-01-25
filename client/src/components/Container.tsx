import React, { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  verticalAlign?: boolean;
  className?: string;
}
const Container: FC<ContainerProps> = ({ children, className = '', verticalAlign }) => {
  return (
    <div className={`container px-3 mx-auto ${verticalAlign && 'my-[15px] md:my-[20px] lg:my-[25px]'} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
