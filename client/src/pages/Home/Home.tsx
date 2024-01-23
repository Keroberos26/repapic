import { FC } from 'react';
import Service from './Service';
import Container from '../../components/Container';
import Banner from './Banner';
import ProductList from '../../components/ProductList';
import Heading from './Heading';

const Home: FC = () => {
  return (
    <>
      <div className="pt-[10px] pb-[15px] md:pt-5 md:pb-[5px] lg:pt-[60px] lg:pb-[45px] bg-white">
        <Container>
          <Banner />
        </Container>
      </div>
      <div>
        <Container>
          <Service />
          <section className="mb-[25px] md:mb-[35px] lg:mb-[65px]">
            <Heading title="Sản phẩm mới" prevNav="btn-new-prev" nextNav="btn-new-next" />
            <ProductList url="/products?skip=35" limit={10} prevNav="btn-new-prev" nextNav="btn-new-next" />
          </section>
          <section className="mb-[25px] md:mb-[35px] lg:mb-[65px]">
            <Heading title="Bán chạy nhất" prevNav="btn-best-prev" nextNav="btn-best-next" />
            <ProductList url="/products?skip=45" limit={10} prevNav="btn-best-prev" nextNav="btn-best-next" />
          </section>
        </Container>
      </div>
    </>
  );
};

export default Home;
