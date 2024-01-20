import { FC } from 'react';
import Container from '../../../components/Container';
import { Link } from 'react-router-dom';
import config from '../../../config';
import Search from './Search';
import Shortcut from './Shortcut';

const Header: FC = () => {
  return (
    <header>
      <div className="py-5 text-white bg-primary">
        <Container>
          <div className="flex items-center justify-between gap-20">
            <div className="text-2xl tracking-tight">
              <Link to={config.routes.home}>Repapic.</Link>
            </div>
            <div className="flex-grow hidden lg:block">
              <Search />
            </div>
            <div>
              <Shortcut />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
