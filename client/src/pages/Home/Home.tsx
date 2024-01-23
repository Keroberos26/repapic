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
          <Heading title="Bán chạy nhất" prevNav="btn-prev" nextNav="btn-next" />
          <ProductList url="/products?skip=35" limit={10} prevNav="btn-prev" nextNav="btn-next" />
        </Container>
      </div>
    </>
  );
};

export default Home;
