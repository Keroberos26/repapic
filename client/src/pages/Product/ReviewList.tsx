import React, { useState } from 'react';
import CustomSelect from '../../components/CustomSelect';
import Comment from '../../components/Comment';
import CustomButton from '../../components/CustomButton';
import { FaArrowDownLong } from 'react-icons/fa6';
import ReviewForm from './ReviewForm';

const FILTER_OPTION = [
  {
    label: 'Tất cả',
    value: 0,
  },
  {
    label: '1 sao',
    value: 1,
  },
  {
    label: '2 sao',
    value: 2,
  },
  {
    label: '3 sao',
    value: 3,
  },
  {
    label: '4 sao',
    value: 4,
  },
  {
    label: '5 sao',
    value: 5,
  },
];

const ReviewList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState<any>(0);

  const handleChange = (value: any) => {
    setFilter(value);
  };

  return (
    <div>
      <h2 className="mb-5">
        <span className="text-xl font-bold md:text-2xl">Đánh giá sản phẩm</span>
      </h2>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <span className="relative pr-6 text-6xl font-bold before:absolute before:w-[2px] before:h-[50px] before:bg-gray-300 before:top-2 before:right-3 before:rotate-[22deg]">
            4.9
          </span>
          <span>593 bình luận</span>
        </div>
        <CustomSelect options={FILTER_OPTION} onChange={handleChange} />
      </div>
      <div className="flex flex-col gap-4">
        <ReviewForm />
        <Comment data />
        <Comment data />
        <Comment data />
        <div className="text-center">
          <CustomButton color="primary" outline rounded rightIcon={<FaArrowDownLong />}>
            Xem thêm
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
