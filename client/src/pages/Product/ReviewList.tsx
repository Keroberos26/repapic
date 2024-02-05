import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import Review from '../../components/Review';
import CustomButton from '../../components/CustomButton';

const ReviewList = () => {
  const [filter, setFilter] = useState('0');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <div>
      <h3 className="flex items-center justify-between">
        <span className="text-xl font-bold">Đánh giá</span>
        <FormControl>
          <Select value={filter} onChange={handleChange}>
            <MenuItem value={0}>Tất cả</MenuItem>
            <MenuItem value={1}>1 sao</MenuItem>
            <MenuItem value={2}>2 sao</MenuItem>
            <MenuItem value={3}>3 sao</MenuItem>
            <MenuItem value={4}>4 sao</MenuItem>
            <MenuItem value={5}>5 sao</MenuItem>
          </Select>
        </FormControl>
      </h3>
      <div className="flex items-center mb-4">
        <span className="relative pr-6 text-5xl font-bold before:absolute before:w-[2px] before:h-[1.1em] before:bg-gray-300 before:top-0 before:right-3 before:rotate-[22deg]">
          4.9
        </span>
        <span>593 bình luận</span>
      </div>
      <CustomButton color="secondary" block rounded className="mb-4">
        Viết đánh giá
      </CustomButton>
      <div className="flex flex-col gap-4">
        <Review data />
        <hr />
        <Review data />
        <hr />
        <div className="text-center">
          <CustomButton color="secondary" rounded outline>
            Xem thêm
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
