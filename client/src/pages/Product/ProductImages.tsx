import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from '../../components/Image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface ProductImagesProps {
  product?: any;
}

const ProductImages: React.FC<ProductImagesProps> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const buttonStyles =
    'absolute z-10 -translate-y-1/2  top-1/2 py-4 px-2 text-xl transition-all bg-main opacity-80 group-hover:translate-x-0 disabled:opacity-20';

  const slides = product.images.map((img: string, index: number) => (
    <SwiperSlide key={index}>
      <Image src={img} alt={product.title + index} className="w-full aspect-square" rounded={20} />
    </SwiperSlide>
  ));

  return (
    <div className="sticky top-2">
      <div className="relative mb-4 overflow-hidden group">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            prevEl: '.btn-images-prev',
            nextEl: '.btn-images-next',
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="rounded-[20px]"
        >
          {slides}
        </Swiper>
        <button className={`left-0 -translate-x-full btn-images-prev ${buttonStyles}`}>
          <FaAngleLeft />
        </button>
        <button className={`right-0 translate-x-full btn-images-next ${buttonStyles}`}>
          <FaAngleRight />
        </button>
      </div>

      <div>
        <Swiper
          freeMode
          spaceBetween={10}
          slidesPerView={4}
          slideToClickedSlide={true}
          onSwiper={setThumbsSwiper}
          modules={[Thumbs, FreeMode]}
          className="h-full product-image-slider"
        >
          {slides}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductImages;
