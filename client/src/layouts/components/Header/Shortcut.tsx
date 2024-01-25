import React, { FC, useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { CartIcon, CompareIcon, HeartIcon, UserIcon } from '../../../components/Icons';
import { Badge, BadgeProps } from '@mui/material';
import { AuthContext } from '../../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import config from '../../../config';

interface ShortcutItemProps {
  icon: React.ReactNode;
  to?: string;
  title?: React.ReactNode;
  subtitle: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

const ShortcutItem: FC<ShortcutItemProps> = ({ icon, to, title, subtitle, onClick }) => {
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <div
      className="flex items-center gap-[6px] cursor-pointer hover:text-gray-400 transition-colors select-none"
      onMouseOver={() => setIsRotate(true)}
      onMouseLeave={() => setIsRotate(false)}
      onClick={onClick || handleClick}
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
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-[10px] md:gap-5 lg:gap-9 placeholder pr-3 lg:pr-0">
      <ShortcutItem icon={<CompareIcon />} title="So sánh" subtitle="Sản phẩm" />
      <ShortcutItem icon={<HeartIcon />} title="Yêu thích" subtitle="Wishlist" />
      <ShortcutItem
        icon={<UserIcon />}
        title={user?.firstName || 'Đăng nhập'}
        subtitle="Tài khoản"
        to={config.routes.signIn}
      />
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
