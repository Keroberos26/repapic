import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const slideVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ProductCarousel = () => {
  return (
    <div>
      <Swiper
        wrapperClass="py-5"
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <motion.div variants={slideVariants} initial="initial" whileInView="animate">
              <ProductCard />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
