import React from 'react';
import { useFetch } from '../hooks';
import ProductCard, { ProductCardSkeleton } from './ProductCard';
import { Alert } from '@mui/material';

interface ProductListProps {
  url: string;
  size?: number;
}

const ProductList: React.FC<ProductListProps> = ({ url, size = 0 }) => {
  const { data, loading, error } = useFetch(url);

  return (
    <>
      {error ? (
        <Alert severity="error">Đã có lỗi xảy ra</Alert>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {loading && Array.from({ length: size }, (_, index) => <ProductCardSkeleton key={index} />)}
          {data?.products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
