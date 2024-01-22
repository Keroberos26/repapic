import { FC, useState } from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';
import CustomRating from './CustomRating';
import { formatPrice } from '../utils';
import { Tooltip } from '@mui/material';
import { HeartIcon } from './Icons';
import { BsHandbag } from 'react-icons/bs';
import { LiaRandomSolid } from 'react-icons/lia';
import { IoEyeOutline } from 'react-icons/io5';

interface ProductCardProps {
  data?: any;
}

const buttonStyle =
  'size-[30px] bg-white bg-opacity-70 hover:bg-main hover:bg-opacity-100 transition-all duration-300 inline-flex justify-center items-center rounded-full';

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="relative bg-white rounded-[10px] shadow-2xl overflow-hidden"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={'/'} className="relative pb-[100%] block">
        <Image
          src="/assets/img/main-banner.jpg"
          alt="Test"
          className={`absolute top-0 left-0 right-0 aspect-square duration-700 transition-all ${
            isHover ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <Image
          src="/assets/img/main-banner-1.jpg"
          alt="Test"
          className={`absolute top-0 left-0 right-0 aspect-square duration-700 transition-all ${
            isHover ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </Link>
      <div className="absolute z-[1] flex flex-col gap-1 top-2 right-2">
        <Tooltip title="Yêu thích" placement="right-end">
          <button className={buttonStyle}>
            <HeartIcon />
          </button>
        </Tooltip>
        <Tooltip title="Thêm vào giỏ hàng" placement="right-end">
          <button className={`${buttonStyle} ${isHover ? 'lg:translate-x-0' : 'lg:translate-x-10'}`}>
            <BsHandbag />
          </button>
        </Tooltip>
        <Tooltip title="So sánh" placement="right-end">
          <button className={`${buttonStyle} ${isHover ? 'lg:translate-x-0' : 'lg:translate-x-10'} lg:delay-75`}>
            <LiaRandomSolid />
          </button>
        </Tooltip>
        <Tooltip title="Xem nhanh" placement="right-end">
          <button
            className={`${buttonStyle} ${
              isHover ? 'lg:translate-x-0' : 'lg:translate-x-10'
            } lg:delay-150 hidden lg:inline-flex`}
          >
            <IoEyeOutline />
          </button>
        </Tooltip>
      </div>
      <div
        className={`absolute top-2 left-2 z-[1] font-semibold rounded-full bg-main text-xs py-1 px-2 transition-transform duration-500 ${
          isHover && 'lg:-translate-y-10'
        }`}
      >
        50%
      </div>
      <div className="p-[10px] lg:p-5">
        <h4 className="line-clamp-2 mb-[5px] md:mb-[10px] tracking-tight font-semibold text-xs md:text-[13px] lg:text-[15px]">
          <Link to={'/'} className="inline">
            Tên sản phẩm
          </Link>
        </h4>
        <div className="mb-1 lg:mb-2">
          <CustomRating size="small" value={4.3} precision={0.25} readOnly />
        </div>
        <div className="font-medium tracking-tight lg:text-lg">
          <span className="mr-2 text-red-600">{formatPrice(150)}</span>
          <del className="text-[0.8em] text-[#999]">{formatPrice(200)}</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
