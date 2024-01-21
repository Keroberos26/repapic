import { FC } from 'react';
import Service from './Service';
import Container from '../../components/Container';

const Home: FC = () => {
  return (
    <div>
      <Container>
        <Service />
      </Container>
    </div>
  );
};

export default Home;
