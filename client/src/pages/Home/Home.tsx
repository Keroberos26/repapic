import React, { useEffect } from 'react';
import ProductList from '../../components/ProductList';
import BestComments from './BestComments';
import CustomButton from '../../components/CustomButton';

const HOME_PRODUCTS_COUNT = 4;

interface HeadingProps {
  children: React.ReactNode;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ children, center }) => {
  return <h1 className={`text-3xl uppercase lg:text-5xl font-kanit py-12 ${center && 'text-center'}`}>{children}</h1>;
};

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Repapic | Make color with paper';
  }, []);

  return (
    <>
      <section className="px-3 sm:container sm:mx-auto">
        <Heading center>Sản phẩm mới</Heading>
        <ProductList size={HOME_PRODUCTS_COUNT} url={`/products?limit=${HOME_PRODUCTS_COUNT}&skip=35`} />
        <div className="my-10 text-center">
          <CustomButton color="primary" outline rounded>
            Xem tất cả
          </CustomButton>
        </div>
      </section>
      <hr className="px-3 my-10 sm:container sm:mx-auto" />
      <section className="px-3 sm:container sm:mx-auto">
        <Heading center>Bán chạy nhất</Heading>
        <ProductList size={HOME_PRODUCTS_COUNT} url={`/products?limit=${HOME_PRODUCTS_COUNT}&skip=40`} />
        <div className="my-10 text-center">
          <CustomButton color="primary" outline rounded>
            Xem tất cả
          </CustomButton>
        </div>
      </section>
      <section>
        <div className="px-3 sm:container sm:mx-auto">
          <Heading>Đánh giá tích cực</Heading>
        </div>
        <BestComments />
      </section>
    </>
  );
};

export default Home;
