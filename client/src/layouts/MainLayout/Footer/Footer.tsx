import { FC } from 'react';
import Container from '../../../components/Container';
import Subscribe from './Subscribe';
import FooterList, { FooterLink } from './FooterList';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

const Footer: FC = () => {
  return (
    <footer className="text-white bg-secondary">
      <div className="border-b border-white border-opacity-10">
        <Container>
          <Subscribe />
        </Container>
      </div>
      <div className="py-5 border-b border-white border-opacity-10 md:py-[30px] lg:py-[65px]">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-11 gap-7">
            <div className="lg:col-span-2">
              <FooterList heading="Repapic">
                <address className="text-[13px]">Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam</address>
                <FooterLink to="tel:+84775428404">(+00) 123-456-789</FooterLink>
                <FooterLink to="mailto:jinnguyen054@gmail.com">repapic@hotmail.com</FooterLink>
                <div className="flex items-center gap-2">
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center transition-colors bg-white rounded-full w-9 h-9 bg-opacity-10 hover:text-main"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center transition-colors bg-white rounded-full w-9 h-9 bg-opacity-10 hover:text-main"
                  >
                    <FaYoutube />
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center transition-colors bg-white rounded-full w-9 h-9 bg-opacity-10 hover:text-main"
                  >
                    <AiFillInstagram />
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center justify-center transition-colors bg-white rounded-full w-9 h-9 bg-opacity-10 hover:text-main"
                  >
                    <FaTiktok />
                  </Link>
                </div>
              </FooterList>
            </div>
            <div className="lg:col-span-2">
              <FooterList heading="FAQ">
                <FooterLink to="#">Tài khoản</FooterLink>
                <FooterLink to="#">Thanh toán</FooterLink>
                <FooterLink to="#">Đặt hàng</FooterLink>
                <FooterLink to="#">Quản lý vận chuyển</FooterLink>
              </FooterList>
            </div>
            <div className="lg:col-span-2">
              <FooterList heading="CHÍNH SÁCH">
                <FooterLink to="#">Chính sách đổi trả 60 ngày</FooterLink>
                <FooterLink to="#">Chính sách khuyến mãi</FooterLink>
                <FooterLink to="#">Chính sách bảo mật</FooterLink>
                <FooterLink to="#">Chính sách giao hàng</FooterLink>
              </FooterList>
            </div>
            <div className="lg:col-span-2">
              <FooterList heading="TÀI NGUYÊN">
                <FooterLink to="#">Đóng góp giấy</FooterLink>
                <FooterLink to="#">Workshop</FooterLink>
                <FooterLink to="#">Voucher</FooterLink>
                <FooterLink to="#">Ủng hộ</FooterLink>
              </FooterList>
            </div>
            <div className="col-span-2 text-center lg:col-span-3 lg:text-left">
              <FooterList heading="Tải xuống ứng dụng">
                <p className="text-sm">
                  Tải xuống ứng dụng của chúng tôi và được giảm giá thêm 15% cho đơn hàng đầu tiên của bạn..!
                </p>
                <div className="flex items-center justify-center gap-4">
                  <a
                    className="w-[220px]"
                    href="https://play.google.com/store/apps/details?id=com.fuct&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  >
                    <img
                      alt="Tải nội dung trên Google Play"
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png"
                    />
                  </a>
                  <a
                    className="w-[200px]"
                    href="https://apps.apple.com/us/app/myfap/id1527723314?itsct=apps_box_badge&amp;itscg=30200"
                  >
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1600041600"
                      alt="Download on the App Store"
                      className="w-full"
                    />
                  </a>
                </div>
              </FooterList>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="py-5 text-sm text-center">
            Copyright by Repapic. &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
