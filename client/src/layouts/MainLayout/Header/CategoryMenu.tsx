import { FC, useState } from 'react';
import { CategoryIcon } from '../../../components/Icons';
import { FaAngleDown } from 'react-icons/fa';
import { Button } from '@mui/material';

const CategoryMenu: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Button color="inherit" sx={{ padding: 0 }} onClick={toggleMenu} className="relative">
      <div className="flex items-center gap-3 px-3 py-[13px] w-[290px]">
        <span className="text-2xl">
          <CategoryIcon />
        </span>
        <span className="leading-6 tracking-tighter uppercase ">Danh mục cửa hàng</span>
        <div className={`ml-auto transition-transform duration-300 ${open && 'rotate-180'}`}>
          <FaAngleDown />
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 bg-white bg-opacity-20 w-[1px] h-6"></div>
    </Button>
  );
};

export default CategoryMenu;
