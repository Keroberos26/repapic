import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard, { ProductCardSkeleton } from './ProductCard';
import { useFetch } from '../hooks';
import { Navigation } from 'swiper/modules';
import { ProductType } from '../types';

interface ProductListProps {
  url: string;
  limit: number;
  prevNav?: string;
  nextNav?: string;
}

const ProductList: FC<ProductListProps> = ({ url, limit = 0, prevNav, nextNav }) => {
  const { data, loading } = useFetch(`${url}${url.includes('?') ? '&' : '?'}limit=${limit}`);

  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={{
          prevEl: `.${prevNav}`,
          nextEl: `.${nextNav}`,
        }}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 6,
          },
        }}
      >
        {loading &&
          Array.from({ length: limit }, (_, index) => (
            <SwiperSlide key={index}>
              <ProductCardSkeleton />
            </SwiperSlide>
          ))}
        {data?.products?.map((product: ProductType) => (
          <SwiperSlide key={product.id}>
            <ProductCard data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
