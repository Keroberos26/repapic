import React from 'react';
import Subscribe from './Subscribe';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { ZaloIcon } from '../../../components/Icon';
import FooterList, { FooterLink } from './FooterList';

interface SocialLinkProps {
  to: string;
  children: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ to, children }) => (
  <a
    href={to}
    className="inline-flex items-center justify-center font-medium transition-all border w-8 h-8 rounded-[50%] hover:text-white hover:bg-primary hover:border-primary border-gray-300"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] pb-10 mt-56 md:mt-52 lg:mt-40">
      <div className="px-3 sm:container sm:mx-auto">
        <div className="-translate-y-1/2 ">
          <Subscribe />
        </div>
        <div className="grid grid-cols-2 gap-16 -mt-20 lg:grid-cols-5 md:-mt-16 lg:-mt-10">
          <div className="flex flex-col col-span-2 gap-3 lg:col-span-1 md:gap-5 lg:gap-6">
            <h2 className="text-2xl font-bold font-kanit text-primary md:text-3xl lg:text-4xl">REPAPIC</h2>
            <p className="mb-2 text-sm text-black text-opacity-60">
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải
              nghiệm dịch vụ và sản phẩm tốt hơn nữa.
            </p>
            <div className="flex gap-3">
              <SocialLink to="#">
                <FaFacebookF />
              </SocialLink>
              <SocialLink to="#">
                <FaInstagram />
              </SocialLink>
              <SocialLink to="#">
                <FaTiktok />
              </SocialLink>
              <SocialLink to="#">
                <ZaloIcon />
              </SocialLink>
            </div>
          </div>
          <FooterList heading="VỀ REPAPIC">
            <FooterLink to="#">Thành viên</FooterLink>
            <FooterLink to="#">Câu chuyện</FooterLink>
            <FooterLink to="#">Dự án</FooterLink>
            <FooterLink to="#">Nhà máy</FooterLink>
          </FooterList>
          <FooterList heading="CHÍNH SÁCH">
            <FooterLink to="#">Chính sách đổi trả 60 ngày</FooterLink>
            <FooterLink to="#">Chính sách khuyến mãi</FooterLink>
            <FooterLink to="#">Chính sách bảo mật</FooterLink>
            <FooterLink to="#">Chính sách giao hàng</FooterLink>
          </FooterList>
          <FooterList heading="FAQ">
            <FooterLink to="#">Tài khoản</FooterLink>
            <FooterLink to="#">Thanh toán</FooterLink>
            <FooterLink to="#">Đặt hàng</FooterLink>
            <FooterLink to="#">Quản lý vận chuyển</FooterLink>
          </FooterList>
          <FooterList heading="TÀI NGUYÊN">
            <FooterLink to="#">Đóng góp giấy</FooterLink>
            <FooterLink to="#">Workshop</FooterLink>
            <FooterLink to="#">Voucher</FooterLink>
            <FooterLink to="#">Ủng hộ</FooterLink>
          </FooterList>
        </div>
        <hr className="my-6" />
        <p className="text-sm text-center text-black text-opacity-60">
          REPAPIC &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
