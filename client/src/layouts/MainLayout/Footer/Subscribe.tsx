import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import InputField from '../../../components/InputField';

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-between py-5 lg:py-14 xl:px-36 gap-[10px] lg:flex-row">
      <div className="flex items-center justify-center font-semibold text-white">
        <span className="text-2xl">
          <FaRegPaperPlane />
        </span>
        <span className="ml-2 capitalize text-[17px] md:text-xl">Đăng ký nhận bản tin</span>
      </div>
      <InputField
        type="email"
        placeholder="Nhập email của bạn"
        buttonTitle="Đăng ký"
        className="text-sm pr-28 w-[592px] max-w-full"
      />
    </div>
  );
};

export default Subscribe;
