import React from 'react';
import Field from '../../../components/Field';
import { TfiEmail } from 'react-icons/tfi';
import CustomButton from '../../../components/CustomButton';

const Subscribe = () => {
  return (
    <div className="px-5 py-3 bg-primary lg:px-16 lg:py-9 md:px-10 md:py-6 rounded-[20px] flex flex-col lg:flex-row gap-8 items-stretch lg:items-center justify-between">
      <h2 className="font-kanit text text-[32px] md:text-4xl lg:text-[40px] text-white max-w-[550px]">
        CẬP NHẬT VỀ ƯU ĐÃI MỚI NHẤT CỦA CHÚNG TÔI
      </h2>
      <div className="flex flex-col gap-3 lg:w-[350px]">
        <Field icon={<TfiEmail size={20} />} placeholder="Nhập email của bạn" />
        <CustomButton color="secondary" block rounded>
          Đăng Ký
        </CustomButton>
      </div>
    </div>
  );
};

export default Subscribe;
