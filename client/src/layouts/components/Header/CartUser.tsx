import { Avatar, Badge, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';

const CartUser = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [auth, setAuth] = useState<boolean>(false);
  const navigator = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (href: string) => {
    handleClose();
    navigator(href);
  };

  let MENU_USER = auth
    ? []
    : [
        { to: config.routes.signIn, title: 'Đăng nhập' },
        { to: config.routes.signUp, title: 'Đăng ký' },
      ];

  return (
    <div className="flex items-center gap-[14px]">
      <Badge badgeContent="4" max={9} color="error">
        <Tooltip title="Yêu thích">
          <IconButton color="inherit" size="small" onClick={() => navigator(config.routes.cart)}>
            <FiHeart />
          </IconButton>
        </Tooltip>
      </Badge>
      <Badge badgeContent="4" max={9} color="error">
        <Tooltip title="Giỏ hàng">
          <IconButton color="inherit" size="small" onClick={() => navigator(config.routes.cart)}>
            <FiShoppingCart />
          </IconButton>
        </Tooltip>
      </Badge>
      <IconButton size="small" onClick={handleClick}>
        <Avatar sx={{ width: '24px', height: '24px' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {MENU_USER.map((item, index) => (
          <MenuItem key={index} onClick={() => handleNavigate(item.to)}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CartUser;
