import React, { FC } from 'react';
import Box from '../../components/Box';
import { FaFilter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Slider } from '@mui/material';

interface FilterProps {
  price: number[];
  onPriceChange: (event: Event, newValue: number | number[]) => void;
}

const Filter: FC<FilterProps> = ({ price, onPriceChange }) => {
  return (
    <Box type="shadow" className="p-5">
      <h3 className="flex items-center justify-between mb-5 font-bold">
        <span>Bộ lọc</span>
        <FaFilter />
      </h3>
      <hr />
      <div className="my-4 text-sm text-gray-400">
        <Link to="/" className="block py-1 transition-colors duration-300 hover:text-primary">
          Loại 1
        </Link>
        <Link to="/" className="block py-1 transition-colors duration-300 hover:text-primary">
          Loại 2
        </Link>
        <Link to="/" className="block py-1 transition-colors duration-300 hover:text-primary">
          Loại 3
        </Link>
        <Link to="/" className="block py-1 transition-colors duration-300 hover:text-primary">
          Loại 4
        </Link>
      </div>
      <hr />
      <div className="my-4">
        <h3 className="mb-4 font-bold">Giá cả</h3>
        <div className="mx-4">
          <Slider
            getAriaLabel={() => 'Temperature range'}
            valueLabelDisplay="auto"
            value={price}
            step={1000}
            onChange={onPriceChange}
            max={1_000_000}
          />
        </div>
      </div>
      <hr />
      <div className="my-4">
        <h3 className="mb-4 font-bold">Màu sắc</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="size-8 border-2 bg-[green] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[red] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[yellow] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[orange] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[blue] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[cyan] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[violet] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[purple] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[white] rounded-full cursor-pointer"></div>
          <div className="size-8 border-2 bg-[black] rounded-full cursor-pointer"></div>
        </div>
      </div>
    </Box>
  );
};

export default Filter;
