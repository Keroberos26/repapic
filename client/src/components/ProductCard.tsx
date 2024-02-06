import { FC, useState } from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';
import CustomRating from './CustomRating';
import { formatPrice } from '../utils';
import { Skeleton, Tooltip } from '@mui/material';
import { HeartIcon } from './Icons';
import { BsHandbag } from 'react-icons/bs';
import { LiaRandomSolid } from 'react-icons/lia';
import { IoEyeOutline } from 'react-icons/io5';
import config from '../config';
import { ProductType } from '../types';
import ProductQuickView from './ProductQuickView';

interface ProductCardProps {
  data: ProductType;
}

export const ProductCardSkeleton: FC = () => {
  return (
    <div className="bg-white rounded-[10px] overflow-hidden">
      <div className="relative pb-[100%]">
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{ position: 'absolute', height: '100%' }}
          className="absolute top-0 bottom-0 left-0 right-0"
        />
      </div>
      <div className="p-[10px] lg:p-5 flex flex-col gap-2">
        <Skeleton animation="wave" variant="rounded" width={'50%'} />
        <Skeleton animation="wave" variant="rounded" />
        <Skeleton animation="wave" variant="rounded" width={'30%'} />
        <Skeleton animation="wave" variant="rounded" width={'30%'} />
      </div>
    </div>
  );
};

const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [openQuickView, setOpenQuickView] = useState(false);

  const handleOpenQuickView = () => {
    setOpenQuickView(true);
  };

  const handleCloseQuickView = () => {
    setOpenQuickView(false);
  };

  const buttonStyle =
    'size-[30px] bg-white bg-opacity-70 hover:bg-main hover:bg-opacity-100 transition-all duration-300 inline-flex justify-center items-center rounded-full';

  return (
    <div
      className="relative bg-white rounded-[10px] shadow-base overflow-hidden"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={`${config.routes.collections}/test/${data.id}`} className="relative pb-[100%] block">
        <Image
          src={data.images[0]}
          alt={data.title}
          className={`absolute top-0 left-0 right-0 aspect-square duration-700 transition-all ${
            isHover ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <Image
          src={data.images[1]}
          alt={data.title}
          className={`absolute top-0 left-0 right-0 aspect-square duration-700 transition-all ${
            isHover ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {data.stock <= 0 && (
          <div
            className={`absolute z-[2] flex items-center justify-center px-2 py-6 italic text-center text-white transition-all duration-500 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full bg-opacity-80 size-20 left-1/2 top-1/2 ${
              isHover && 'opacity-0'
            }`}
          >
            Hết hàng
          </div>
        )}
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
            onClick={handleOpenQuickView}
          >
            <IoEyeOutline />
          </button>
        </Tooltip>
      </div>
      {data.discountPercentage > 0 && (
        <div
          className={`absolute top-2 left-2 z-[1] font-semibold rounded-full bg-main text-xs py-1 px-2 transition-transform duration-500 ${
            isHover && 'lg:-translate-y-10'
          }`}
        >
          {Math.round(data.discountPercentage)}%
        </div>
      )}
      <div className="p-[10px] lg:p-5">
        <h4 className="line-clamp-2 mb-[5px] md:mb-[10px] tracking-tight font-semibold text-xs md:text-[13px] lg:text-[15px] leading-4 md:leading-5 lg:leading-[22px] h-8 md:h-10 lg:h-11">
          <Link to={`${config.routes.collections}/test/${data.id}`} className="inline">
            {data.title}
          </Link>
        </h4>
        <div className="mb-1 lg:mb-2">
          <CustomRating size="small" value={data.rating} precision={0.25} readOnly />
        </div>
        <div className="font-medium tracking-tight lg:text-lg">
          <span className="mr-2 text-red-600">
            {formatPrice(data.price - (data.price * data.discountPercentage) / 100)}
          </span>
          {data.discountPercentage > 0 && <del className="text-[0.8em] text-[#999]">{formatPrice(data.price)}</del>}
        </div>
      </div>
      <ProductQuickView data={data} open={openQuickView} onClose={handleCloseQuickView} />
    </div>
  );
};

export default ProductCard;
