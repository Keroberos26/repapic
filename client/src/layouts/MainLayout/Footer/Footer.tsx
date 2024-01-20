import { FC } from 'react';
import Container from '../../../components/Container';
import Subscribe from './Subscribe';

const Footer: FC = () => {
  return (
    <footer className="bg-secondary ">
      <div className="border-b border-white  border-opacity-10">
        <Container>
          <Subscribe />
        </Container>
      </div>
      <div>Còn</div>
    </footer>
  );
};

export default Footer;
