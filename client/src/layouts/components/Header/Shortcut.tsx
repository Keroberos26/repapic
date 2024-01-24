import React, { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import { CartIcon, CompareIcon, HeartIcon, UserIcon } from '../../../components/Icons';
import { Badge, BadgeProps } from '@mui/material';

interface ShortcutItemProps {
  icon: React.ReactNode;
  title?: React.ReactNode;
  subtitle: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

const ShortcutItem: FC<ShortcutItemProps> = ({ icon, title, subtitle }) => {
  const [isRotate, setIsRotate] = useState<boolean>(false);

  return (
    <div
      className="flex items-center gap-[6px] cursor-pointer hover:text-gray-400 transition-colors"
      onMouseOver={() => setIsRotate(true)}
      onMouseLeave={() => setIsRotate(false)}
    >
      <div
        className="text-[25px] md:text-[30px] lg:text-[40px] transition-transform duration-500"
        style={{ transform: isRotate ? 'rotateY(360deg)' : 'rotateY(0deg)' }}
      >
        {icon}
      </div>
      <div className="text-[13px] text-left xl:block hidden">
        {title}
        <br />
        {subtitle}
      </div>
    </div>
  );
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 4,
    padding: '0 6px',
    backgroundColor: '#fff',
    color: '#000',
  },
}));

const Shortcut: FC = () => {
  return (
    <div className="flex items-center gap-[10px] md:gap-5 lg:gap-9 placeholder pr-3 lg:pr-0">
      <ShortcutItem icon={<CompareIcon />} title="So sánh" subtitle="Sản phẩm" />
      <ShortcutItem icon={<HeartIcon />} title="Yêu thích" subtitle="Wishlist" />
      <ShortcutItem icon={<UserIcon />} title="Đăng nhập" subtitle="Tài khoản" />
      <ShortcutItem
        icon={
          <StyledBadge badgeContent={26} max={9}>
            <CartIcon />
          </StyledBadge>
        }
        subtitle={'0K'}
      />{' '}
    </div>
  );
};

export default Shortcut;
