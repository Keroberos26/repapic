import React, { FC, useState } from 'react';
import { CartIcon, CompareIcon, HeartIcon, UserIcon } from '../../../components/Icons';

interface ShortcutItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

const ShortcutItem: FC<ShortcutItemProps> = ({ icon, title, subtitle }) => {
  const [isRotate, setIsRotate] = useState<boolean>(false);

  return (
    <div
      className="flex items-center gap-[6px] cursor-pointer"
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

const Shortcut: FC = () => {
  return (
    <div className="flex items-center gap-[10px] md:gap-5 lg:gap-9">
      <ShortcutItem icon={<CompareIcon />} title="So sánh" subtitle="Sản phẩm" />
      <ShortcutItem icon={<HeartIcon />} title="Yêu thích" subtitle="Wishlist" />
      <ShortcutItem icon={<UserIcon />} title="Đăng nhập" subtitle="Tài khoản" />
      <ShortcutItem
        icon={<CartIcon />}
        title={<span className="px-2 text-black bg-white rounded-full">0</span>}
        subtitle={'0K'}
      />
    </div>
  );
};

export default Shortcut;
