import React from 'react';
import { Avatar } from '@mui/material';
import { useAuth } from '../../../hooks';
import { BlogIcon, CartIcon, DashboardIcon, ProductIcon, UserIcon } from '../../../components/Icons';
import NavItem from './NavItem';
import config from '../../../config';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-6">
      <div className="h-10">Logo</div>
      <div className="flex items-center gap-4 px-5 py-4 mx-1 rounded-xl bg-[#919eab1f]">
        <Avatar />
        <h6 className="text-sm font-semibold">{user.firstName + ' ' + user.lastName}</h6>
      </div>
      <div className="flex flex-col gap-1">
        <NavItem icon={DashboardIcon} text="Dashboard" to={config.routes.dashboard} />
        <NavItem icon={UserIcon} text="Người dùng" to="/user">
          <NavItem text="Danh sách" type="sub1" to={config.routes.userList} />
          <NavItem text="Tạo" type="sub1" />
        </NavItem>
        <NavItem icon={ProductIcon} text="Sản phẩm">
          <NavItem text="Danh sách" type="sub1" />
          <NavItem text="Số lượng" type="sub1" />
          <NavItem text="Tạo" type="sub1" />
        </NavItem>
        <NavItem icon={CartIcon} text="Đơn hàng" />
        <NavItem icon={BlogIcon} text="Blog">
          <NavItem text="Danh sách" type="sub1" />
          <NavItem text="Viết bài" type="sub1" />
        </NavItem>
      </div>
    </div>
  );
};

export default Sidebar;
