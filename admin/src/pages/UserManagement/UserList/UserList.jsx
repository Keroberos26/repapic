import { Container, FormControl, IconButton, InputAdornment, MenuItem, Tab } from '@mui/material';
import React, { useState } from 'react';
import { Breadcrumbs, Button, Link, Menu, OutlinedInput, Tabs } from '../../../components';
import config from '../../../config';
import { useDocumentTitle } from '../../../hooks';
import { FaFileExport, FaFileImport, FaPlus } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BsPrinterFill } from 'react-icons/bs';
import UserTable from './UserTable';

function a11yProps(index) {
  return {
    id: `user-tab-${index}`,
    'aria-controls': `user-tabpanel-${index}`,
  };
}

const UserList = () => {
  useDocumentTitle('Danh sách người dùng');
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChangeTab = (event, newTab) => {
    setTab(newTab);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h4 className="mb-2 text-2xl font-bold leading-[1.5] ">Danh sách</h4>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" to={config.routes.dashboard}>
              Dashboard
            </Link>
            <Link underline="hover" color="inherit">
              Người dùng
            </Link>
            <span>Danh sách</span>
          </Breadcrumbs>
        </div>
        <Button color="default" to={config.routes.userNew} startIcon={<FaPlus />}>
          Thêm sản phẩm
        </Button>
      </div>
      <div className="shadow-md rounded-2xl">
        <div className="px-5">
          <Tabs value={tab} onChange={handleChangeTab} aria-label="basic tabs example">
            <Tab label="Tất cả" {...a11yProps(0)} />
            <Tab label="Đã xác thực" {...a11yProps(1)} />
            <Tab label="Chờ" {...a11yProps(2)} />
            <Tab label="Cấm" {...a11yProps(3)} />
            <Tab label="Xoá" {...a11yProps(3)} />
          </Tabs>
        </div>
        <div className="flex items-center gap-4 py-5 pl-5 pr-2">
          <FormControl fullWidth color="default">
            <OutlinedInput
              id="user-search"
              startAdornment={
                <InputAdornment position="start">
                  <IoSearch className="text-xl" />
                </InputAdornment>
              }
              placeholder="Tên người dùng"
            />
          </FormControl>
          <IconButton onClick={handleClick}>
            <HiOutlineDotsVertical />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'user-button',
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div className="p-1">
              <MenuItem onClick={handleClose}>
                <BsPrinterFill className="mr-4" />
                In
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <FaFileExport className="mr-4" />
                Xuất
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <FaFileImport className="mr-4" />
                Nhập
              </MenuItem>
            </div>
          </Menu>
        </div>
        <UserTable />
      </div>
    </Container>
  );
};

export default UserList;
