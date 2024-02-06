import React, { FC, useState } from 'react';
import { ProductType } from '../../types';
import Image from '../../components/Image';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Skeleton } from '@mui/material';

interface ProductImagesProps {
  data: ProductType;
  loading: boolean;
}

const ProductImages: FC<ProductImagesProps> = ({ data, loading }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const slides = loading
    ? Array.from({ length: 5 }, (_, index) => (
        <SwiperSlide key={index}>
          <Skeleton variant="rounded" width={'100%'} className="pb-[100%]" />
        </SwiperSlide>
      ))
    : data?.images.map((img: string, index: number) => (
        <SwiperSlide key={index}>
          <Image src={img} alt={data.title + index} className="border aspect-square" rounded={5} />
        </SwiperSlide>
      ));

  return (
    <div className="overflow-hidden lg:overflow-visible">
      <div className="overflow-hidden lg:sticky top-28">
        <div className="ml-auto overflow-hidden lg:w-4/5">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={true}
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
          >
            {slides}
          </Swiper>
        </div>
        <div className="mt-3 overflow-hidden lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:w-1/6 lg:mt-0">
          <Swiper
            freeMode
            spaceBetween={10}
            slidesPerView={4}
            slideToClickedSlide={true}
            onSwiper={setThumbsSwiper}
            modules={[Thumbs, FreeMode]}
            breakpoints={{
              1024: {
                direction: 'vertical',
                slidesPerView: 'auto',
              },
            }}
            className="max-h-full product-image-slider"
          >
            {slides}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
