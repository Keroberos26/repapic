import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Comment from '../../components/Comment';

const BestComments: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      breakpoints={{ 768: { slidesPerView: 1.8 }, 1024: { slidesPerView: 3.4 } }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="comments-swiper"
    >
      <SwiperSlide>
        <Comment data={''} />
      </SwiperSlide>
      <SwiperSlide>
        <Comment data={''} />
      </SwiperSlide>
      <SwiperSlide>
        <Comment data={''} />
      </SwiperSlide>
      <SwiperSlide>
        <Comment data={''} />
      </SwiperSlide>
      <SwiperSlide>
        <Comment data={''} />
      </SwiperSlide>
      <SwiperSlide>
        <Comment data={''} />
      </SwiperSlide>
      <SwiperSlide>
        <Comment data={''} />
      </SwiperSlide>
    </Swiper>
  );
};

export default BestComments;
