import React, { FC } from 'react';
import { ProductType } from '../../types';
import CustomRating from '../../components/CustomRating';
import { formatPrice } from '../../utils';
import { Chip } from '@mui/material';

interface ProductDetailProps {
  data: ProductType;
}

const ProductDetail: FC<ProductDetailProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold md:text-xl lg:text-2xl">{data.title}</h1>
      <div className="flex items-center gap-3">
        <CustomRating value={data.rating} readOnly />
        <span>{data.rating}/5</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold">
          {formatPrice(data.price - (data.price * data.discountPercentage) / 100)}
        </span>
        <del className="self-end text-fade">{formatPrice(data.price)}</del>
        <Chip label={`${Math.round(data.discountPercentage)}%`} color="success" />
      </div>
      <div>{data.description}</div>
      <hr />
      <div>
        <h3>Kích thước</h3>
      </div>
    </div>
  );
};

export default ProductDetail;
