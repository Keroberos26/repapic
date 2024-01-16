import { Avatar } from '@mui/material';
import React from 'react';
import CustomRating from './CustomRating';

interface CommentProps {
  data: any;
}

const Comment: React.FC<CommentProps> = ({ data }) => {
  return (
    <div className="p-6 md:p-7 rounded-[20px] border border-black border-opacity-10 flex flex-col gap-3 md:gap-4">
      <CustomRating value={4} readOnly />
      <div className="flex items-center gap-3">
        <Avatar />
        <div>
          <div className="md:text-xl font-bold leading-[22px]">Tên</div>
          <span className="text-xs font-normal text-gray-500"> 1 ngày trước</span>
        </div>
      </div>
      <p className="text-black text-opacity-60">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto, expedita quos molestias soluta earum
        praesentium consequuntur! Porro, possimus officiis esse dolore beatae cumque laudantium repellat laboriosam
        ullam ducimus placeat?"
      </p>
    </div>
  );
};
export default Comment;
