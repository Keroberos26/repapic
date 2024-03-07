import React, { useState } from 'react';
import { Avatar, Badge, Divider, IconButton, MenuItem } from '@mui/material';
import { IoSearch } from 'react-icons/io5';
import { Menu } from '../../components';
import { BellIcon, GearIcon } from '../../components/Icons';
import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate(config.routes.login);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-30 flex items-center justify-between h-20 px-10 transition-all bg-[#f9fafbcc] backdrop-blur-[6px]">
      <IconButton>
        <IoSearch />
      </IconButton>
      <div className="flex items-center gap-2">
        <IconButton>
          <Badge badgeContent={4} color="error">
            <BellIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <GearIcon className="animate-spin-slow" />
        </IconButton>
        <IconButton sx={{ height: 40, width: 40 }} onClick={handleClick}>
          <Avatar sx={{ height: 32, width: 32 }} />
        </IconButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <div className="px-4 my-3">
          <h6 className="font-semibold truncate">{user.name}</h6>
          <p className="truncate text-fade">{user.email}</p>
        </div>
        <Divider />
        <div className="p-2">
          <MenuItem onClick={handleClose}>Tài khoản của tôi</MenuItem>
          <MenuItem onClick={handleClose}>Cài đặt</MenuItem>
          <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
        </div>
      </Menu>
    </header>
  );
};

export default Header;
