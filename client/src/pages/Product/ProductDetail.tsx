import React, { FC, useState } from 'react';
import { ProductType } from '../../types';
import CustomRating from '../../components/CustomRating';
import { formatPrice } from '../../utils';
import { Button, Chip, IconButton, Skeleton } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { HeartIcon } from '../../components/Icons';
import { IoShareSocialOutline } from 'react-icons/io5';
import ReviewList from './ReviewList';

interface ProductDetailProps {
  data: ProductType;
  loading: boolean;
}

const ProductDetail: FC<ProductDetailProps> = ({ data, loading }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <h1 className="text-xl font-bold lg:text-2xl">
        {loading ? <Skeleton variant="text" sx={{ fontSize: '1em' }} animation="wave" /> : data?.title}
      </h1>
      <div className="flex items-center gap-3">
        {loading ? (
          <Skeleton variant="rounded" height={24} width={'30%'} animation="wave" />
        ) : (
          <>
            <CustomRating value={data?.rating} readOnly />
            <span>{data?.rating}/5</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-3">
        {loading ? (
          <Skeleton variant="rounded" height={30} width={'50%'} animation="wave" />
        ) : (
          <>
            <span className="text-2xl font-bold">
              {formatPrice(data?.price - (data?.price * data?.discountPercentage) / 100)}
            </span>
            <del className="self-end text-fade">{formatPrice(data?.price)}</del>
            <Chip label={`${Math.round(data?.discountPercentage)}%`} color="success" />
          </>
        )}
      </div>
      <p className="text-sm md:text-base">
        {!loading ? (
          data?.description
        ) : (
          <>
            <Skeleton variant="text" sx={{ fontSize: '1em' }} animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: '1em' }} animation="wave" />
          </>
        )}
      </p>
      <hr />
      <div className="flex items-stretch gap-3 ">
        <div className="flex items-center border rounded-[5px]">
          <IconButton size="small" onClick={handleDecrease}>
            <FaMinus />
          </IconButton>
          <input
            type="number"
            name="quantity"
            min={1}
            className="flex-grow text-center outline-none max-w-[50px]"
            readOnly
            value={quantity}
          />
          <IconButton size="small" onClick={handleIncrease}>
            <FaPlus />
          </IconButton>
        </div>
        <CustomButton color="primary" rounded className="flex-grow">
          Thêm vào giỏ hàng
        </CustomButton>
      </div>
      <div className="flex items-center gap-5">
        <Button startIcon={<HeartIcon />} size="large">
          Yêu thích
        </Button>
        <Button startIcon={<IoShareSocialOutline />} size="large">
          Chia sẻ
        </Button>
      </div>
      <hr />
      <ReviewList />
    </div>
  );
};

export default ProductDetail;
