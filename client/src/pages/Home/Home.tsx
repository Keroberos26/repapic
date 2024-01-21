import { FC } from 'react';
import Service from './Service';
import Container from '../../components/Container';
import Banner from './Banner';

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
        </Container>
      </div>
    </>
  );
};

export default Home;
