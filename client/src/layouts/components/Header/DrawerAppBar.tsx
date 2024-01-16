import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../config';
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { RiMenu2Line } from 'react-icons/ri';
import Search from './Search';
import CartUser from './CartUser';

const NAV_ITEMS = [
  {
    to: config.routes.collections,
    title: 'Sản phẩm',
  },
  {
    to: '/',
    title: 'SALES',
  },
  {
    to: '/',
    title: 'Liên hệ',
  },
];

const DrawerAppBar: React.FC = () => {
  const navigator = useNavigate();
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setDrawerIsOpen(open);
  };

  const DrawerContent: React.FC = () => (
    <Box sx={{ width: 300 }} role="presentation">
      <header className="text-white bg-primary p-[1.5em] rounded-br-[80px]">
        <div className="text-3xl font-bold font-kanit">SHOP.CO</div>
      </header>
      <div className="p-2">
        <Search />
      </div>
      <Divider />
      <List>
        {NAV_ITEMS.map((item, index) => (
          <ListItem key={index} disablePadding onClick={toggleDrawer(false)}>
            <ListItemButton onClick={() => navigator(item.to)}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="py-5 text-black bg-white">
      <div className="px-3 sm:container sm:mx-auto">
        <div className="flex items-center justify-between gap-10">
          <div className="flex items-center gap-3">
            <div className="block lg:hidden">
              <IconButton color="inherit" size="small" onClick={toggleDrawer(true)}>
                <RiMenu2Line />
              </IconButton>
              <Drawer anchor="left" open={drawerIsOpen} onClose={toggleDrawer(false)}>
                <DrawerContent />
              </Drawer>
            </div>
            <Link to={config.routes.home} className="text-2xl md:text-[32px] font-bold font-kanit text-primary">
              REPAPIC
            </Link>
          </div>
          <nav className="items-center hidden gap-6 lg:flex">
            {NAV_ITEMS.map((item, index) => (
              <Button key={index} onClick={() => navigator(item.to)} variant="text" color="inherit">
                {item.title}
              </Button>
            ))}
          </nav>
          <div className="flex-grow hidden lg:block">
            <Search />
          </div>
          <CartUser />
        </div>
      </div>
    </div>
  );
};

export default DrawerAppBar;
