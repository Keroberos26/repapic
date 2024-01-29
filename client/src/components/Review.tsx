import { Avatar } from '@mui/material';
import React, { FC } from 'react';
import CustomRating from './CustomRating';

interface ReviewProps {
  data: any;
}

const Review: FC<ReviewProps> = ({ data }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Avatar />
        <div>
          <div className="font-bold">Tên</div>
          <span className="text-xs font-normal text-gray-500"> 1 ngày trước</span>
        </div>
      </div>
      <CustomRating value={4} />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa ullam aliquid fugit tenetur cupiditate
        quaerat aut, atque incidunt voluptate, pariatur architecto accusamus sunt ducimus nostrum commodi minima.
        Doloribus, esse!
      </div>
    </div>
  );
};

export default Review;
