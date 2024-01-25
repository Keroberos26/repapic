import React, { FC } from 'react';

interface BoxProps {
  children: React.ReactNode;
  type: 'shadow' | 'border';
  className?: string;
}

const Box: FC<BoxProps> = ({ children, type, className = '' }) => {
  let styled = `bg-white rounded-[10px] ${className}`;

  if (type === 'border') {
    styled += ' border border-[#e8e9eb]';
  } else if (type === 'shadow') {
    styled += ' shadow-box';
  }

  return <div className={styled}>{children}</div>;
};

export default Box;
