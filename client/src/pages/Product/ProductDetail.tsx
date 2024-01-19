import { Button, Chip } from '@mui/material';
import React from 'react';
import { formatPrice } from '../../utils';
import CustomRating from '../../components/CustomRating';
import SetQuantity from './SetQuantity';
import CustomButton from '../../components/CustomButton';
import { FiHeart, FiShare2 } from 'react-icons/fi';
import ReviewList from './ReviewList';

interface ProductDetailProps {
  product: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 lg:gap-5">
        <h1 className="text-[40px] font-kanit font-bold">{product.title}</h1>
        <div className="flex items-center gap-4">
          <CustomRating value={product.rating} precision={0.25} readOnly />
          <span>
            {product.rating.toFixed(1)}/<span className="text-black text-opacity-60">5</span>
          </span>
        </div>
        <div className="flex items-center text-2xl gap-4 font-bold lg:text-[32px]">
          <div>{formatPrice(product.price - (product.price * product.discountPercentage) / 100)}</div>
          {product.discountPercentage > 0 && (
            <>
              <del className="text-black text-opacity-30">{formatPrice(product.price)}</del>
              <Chip
                label={`-${Math.round(product.discountPercentage)}%`}
                variant="filled"
                color="success"
                sx={{ backgroundColor: 'var(--sub-color)' }}
              />
            </>
          )}
        </div>
        <p className="text-black text-opacity-60 leading-5 ld:leading-[22px]">{product.description}</p>
        <div className="flex gap-5">
          <SetQuantity />
          <div className="flex-grow">
            <CustomButton color="primary" rounded block className="h-full">
              Thêm vào giỏ hàng
            </CustomButton>
          </div>
        </div>
        <div className="flex gap-7">
          <Button startIcon={<FiHeart />} color="inherit" size="large">
            WISHLIST
          </Button>
          <Button startIcon={<FiShare2 />} color="inherit" size="large">
            SHARE
          </Button>
        </div>
      </div>
      <hr className="my-6" />
      <ReviewList />
    </div>
  );
};

export default ProductDetail;
