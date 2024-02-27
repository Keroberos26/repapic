import React, { CSSProperties, FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import CustomButton from '../../components/CustomButton';

interface BannerContentProps {
  src: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  main?: boolean;
}

const BannerContent: FC<BannerContentProps> = ({ title, subtitle, description, children, src, main }) => {
  return (
    <div className="relative overflow-hidden rounded-[10px]">
      <div
        className="pb-[66.265%] bg-center bg-no-repeat bg-cover bg-size hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="absolute top-[18%] left-[9%]">
        <div className="text-[10px] 2xl:text-sm text-[#bf4800] uppercase tracking-tight">{subtitle}</div>
        <div className="text-[18px] md:text-[14px] 2xl:text-[26px] capitalize my-3 font-semibold">{title}</div>
        <div className={`text-xs 2xl:text-sm max-w-[150px] ${main ? 'lg:max-w-[190px]' : 'hidden md:block'}`}>
          {description}
        </div>
        {children}
      </div>
    </div>
  );
};

const Banner: FC = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-5 items-center gap-[10px]">
      <div className="overflow-hidden">
        <Swiper
          effect={'fade'}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          style={
            {
              '--swiper-pagination-color': 'var(--primary-color)',
              '--swiper-pagination-bullet-inactive-color': 'white',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-size': '14px',
            } as CSSProperties
          }
        >
          <SwiperSlide>
            <BannerContent
              src="/assets/img/main-banner-1.jpg"
              subtitle="Supercharged for pros."
              title="iPad S13+ Pro."
              description="From $999.00 or $41.62/mo. for 24 mo. Footnote*"
              main
            >
              <CustomButton color="primary" rounded className="mt-3 md:mt-6 lg:mt-9">
                MUA NGAY
              </CustomButton>
            </BannerContent>
          </SwiperSlide>
          <SwiperSlide>
            <BannerContent
              src="/assets/img/main-banner.jpg"
              subtitle="Best Discount"
              title="Special Sale"
              description="From $999.00 or $41.62/mo. for 24 mo. Footnote*"
              main
            >
              <CustomButton color="primary" rounded className="mt-3 md:mt-6 lg:mt-9">
                MUA NGAY
              </CustomButton>
            </BannerContent>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-2 lg:gap-5 gap-[10px] md:grid-cols-4 lg:grid-cols-2">
        <BannerContent
          src="/assets/img/catbanner-02.png"
          subtitle="Bán chạy nhất"
          title="Cute Puppy"
          description="Giá chỉ từ 120.000đ bao gồm phụ kiện"
        />

        <BannerContent
          src="/assets/img/catbanner-01.png"
          subtitle="Tranh mới"
          title="Summer Orange"
          description="Mua sắm các phong cách và màu sắc mới nhất"
        />

        <BannerContent
          src="/assets/img/catbanner-04.png"
          subtitle="Giảm giá 5%"
          title="Flowers"
          description="Sáng tạo và tiết kiệm một cách khoa học"
        />

        <BannerContent
          src="/assets/img/catbanner-03.png"
          subtitle="Bảo vệ môi trường"
          title="Flora"
          description="Góp phần tái sử dụng giấy và rác thải"
        />
      </div>
    </div>
  );
};

export default Banner;
