import { IconButton } from '@mui/material';
import React, { FC } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface HeadingProps {
  title: React.ReactNode;
  prevNav?: string;
  nextNav?: string;
}

const Heading: FC<HeadingProps> = ({ title, prevNav = '', nextNav = '' }) => {
  return (
    <div className="flex items-center justify-between mb-[10px] md:mb-[15px] lg:mb-[20px]">
      <h2 className="text-xl lg:text-[26px] leading-6 font-semibold">{title}</h2>
      <div className="items-center hidden gap-2 md:flex">
        <IconButton size="small" className={prevNav}>
          <FaAngleLeft />
        </IconButton>
        <IconButton size="small" className={nextNav}>
          <FaAngleRight />
        </IconButton>
      </div>
    </div>
  );
};

export default Heading;
