import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { DiscountIcon, GiftIcon, HeadphoneIcon, PaymentIcon, TruckIcon } from '../../components/Icons';
import 'swiper/css';

interface ShortcutItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const ShortcutItem: FC<ShortcutItemProps> = ({ icon, title, subtitle }) => {
  const [isRotate, setIsRotate] = useState<boolean>(false);

  return (
    <div
      className="flex items-center gap-[6px] cursor-pointer select-none"
      onMouseOver={() => setIsRotate(true)}
      onMouseLeave={() => setIsRotate(false)}
    >
      <div
        className="text-[40px] transition-transform duration-500"
        style={{ transform: isRotate ? 'rotateY(360deg)' : 'rotateY(0deg)' }}
      >
        {icon}
      </div>
      <div className="text-left">
        <span className="text-[15px] font-semibold">{title}</span>
        <br />
        <span className="text-[13px] text-fade">{subtitle}</span>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="py-5 lg:py-12">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
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
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <ShortcutItem icon={<TruckIcon />} title="Miễn phí vận chuyển" subtitle="Đơn hàng trên 1M" />
        </SwiperSlide>
        <SwiperSlide>
          <ShortcutItem icon={<HeadphoneIcon />} title="Hỗ trợ 24/7" subtitle="Mua sắm với chuyên gia" />
        </SwiperSlide>
        <SwiperSlide>
          <ShortcutItem icon={<GiftIcon />} title="Ưu đãi hàng ngày" subtitle="Tiết kiệm đến 25%" />
        </SwiperSlide>
        <SwiperSlide>
          <ShortcutItem icon={<DiscountIcon />} title="Giá cả phải chăng" subtitle="Trực tiếp từ xưởng" />
        </SwiperSlide>
        <SwiperSlide>
          <ShortcutItem icon={<PaymentIcon />} title="Thanh toán bảo mật" subtitle="An toàn tuyệt đối" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Service;
