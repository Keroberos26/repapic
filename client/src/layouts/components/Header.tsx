import { MouseEvent, useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Stack, Tooltip } from '@mui/material';
import config from '../../config';
import { Link } from 'react-router-dom';
import { CartIcon, HeartIcon, MenuIcon } from '../../components/Icons';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <div className="flex items-center justify-between h-16 px-4 md:h-20 lg:px-10 md:px-5">
        <div className="lg:hidden">
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="flex items-center">
          <Link to={config.routes.home} className="w-32 md:w-40" title="Repapic">
            <img src="/assets/images/logo.png" alt="Repapic" />
          </Link>
        </div>
        <div className="flex items-center h-full gap-8 max-lg:hidden">
          <Link to="#" className="nav-link">
            Trang chủ
          </Link>
          <Link to="#" className="nav-link">
            Sản phẩm
          </Link>
          <Link to="#" className="nav-link">
            Workshop
          </Link>
          <Link to="#" className="nav-link">
            Về chúng tôi
          </Link>
          <Link to="#" className="nav-link">
            Liên hệ
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="max-lg:hidden">
            <Tooltip title="Yêu thích">
              <IconButton className="max-md:hidden">
                <HeartIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Tooltip title="Giỏ hàng">
            <IconButton>
              <CartIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Tài khoản">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 28, height: 28 }} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <Stack padding={1}>
          <MenuItem>Đăng nhập</MenuItem>
          <MenuItem>Đăng ký</MenuItem>
        </Stack>
      </Menu>
    </header>
  );
};

export default Header;
