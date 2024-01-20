import { FC, useState } from 'react';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import config from '../../../config';

const CATE_ITEMS = [
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

const DrawerApp: FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setDrawerIsOpen(open);
  };

  return (
    <div className="lg:hidden">
      <IconButton color="inherit" size="small" onClick={toggleDrawer(true)}>
        <RiMenu2Fill />
      </IconButton>
      <Drawer anchor="left" open={drawerIsOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 350 }} role="presentation">
          <header className="text-white bg-primary p-[1.5em] rounded-br-[80px]">
            <div className="flex items-center justify-between text-3xl font-bold">
              <span>Repapic.</span>
              <IconButton color="inherit" onClick={toggleDrawer(false)}>
                <IoCloseOutline />
              </IconButton>
            </div>
          </header>
          <List>
            {CATE_ITEMS.map((item, index) => (
              <ListItem key={index} disablePadding onClick={toggleDrawer(false)}>
                <ListItemButton>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerApp;
