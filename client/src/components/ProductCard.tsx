import React, { useState } from 'react';
import Image from './Image';
import { Chip, Skeleton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils';
import CustomRating from './CustomRating';

interface ProductCardProps {
  product?: any;
}

export const ProductCardSkeleton: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" height={250} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Stack>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [image, setImage] = useState<string>(product.images[0]);

  const handleImage = (hover: boolean) => {
    setImage(product.images[hover ? 1 : 0]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        onMouseOver={() => handleImage(true)}
        onMouseOut={() => handleImage(false)}
        onTouchStart={() => handleImage(true)}
        onTouchEnd={() => handleImage(false)}
      >
        <Link to={`/product/${product.id}`}>
          <Image src={image} alt={product.title} className="w-full aspect-square" rounded={20} />
        </Link>
      </div>
      <div className="font-semibold">
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </div>
      <div className="flex items-center gap-2">
        <CustomRating value={product.rating} precision={0.25} readOnly />
        <div className="text-sm">{product.rating.toFixed(1)}/5</div>
      </div>
      <div className="flex items-center gap-3 text-sm font-medium">
        <span>{formatPrice(product.price - (product.price * product.discountPercentage) / 100)}</span>
        <del className="text-black text-opacity-30">{formatPrice(product.price)}</del>
        <Chip
          label={`-${Math.round(product.discountPercentage)}%`}
          variant="filled"
          size="small"
          sx={{ backgroundColor: 'var(--sub-color)', color: 'white' }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
