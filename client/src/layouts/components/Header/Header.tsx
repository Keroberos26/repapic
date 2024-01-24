import { FC } from 'react';
import Container from '../../../components/Container';
import { Link } from 'react-router-dom';
import config from '../../../config';
import Search from './Search';
import Shortcut from './Shortcut';
import CategoryMenu from './CategoryMenu';
import { Button } from '@mui/material';
import DrawerApp from './DrawerApp';

const Header: FC = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-50 py-5 text-white bg-primary">
        <Container>
          <div className="flex items-center justify-between gap-20">
            <div className="flex items-center text-2xl font-semibold tracking-tight">
              <DrawerApp />
              <Link to={config.routes.home}>REPAPIC.</Link>
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
      <div className="text-white bg-secondary mt-[77.5px] md:mt-[85px] lg:mt-[100px]">
        <Container>
          <div className="hidden lg:flex">
            <CategoryMenu />
            <div className="flex items-center pl-4">
              <Button color="inherit" sx={{ padding: 0 }}>
                <Link to={config.routes.home} className="px-5 py-[15px] text-sm">
                  Trang chủ
                </Link>
              </Button>
              <Button color="inherit" sx={{ padding: 0 }}>
                <Link to={config.routes.collections} className="px-5 py-[15px] text-sm">
                  Cửa hàng
                </Link>
              </Button>
              <Button color="inherit" sx={{ padding: 0 }}>
                <Link to={config.routes.home} className="px-5 py-[15px] text-sm">
                  Blogs
                </Link>
              </Button>
              <Button color="inherit" sx={{ padding: 0 }}>
                <Link to={config.routes.home} className="px-5 py-[15px] text-sm">
                  Liên hệ
                </Link>
              </Button>
            </div>
          </div>
          <div className="py-3 lg:hidden">
            <Search />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
