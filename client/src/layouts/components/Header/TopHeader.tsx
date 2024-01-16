import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';

interface Props {
  show: boolean;
  onClose: () => void;
}

const TopHeader: React.FC<Props> = ({ show, onClose }) => {
  const [shouldRender, setShouldRender] = useState<boolean>(show);

  // Unmount khi hoàn thành animation
  useEffect(() => {
    if (show) {
      setShouldRender(true);
    } else {
      const timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [show]);

  return (
    <>
      {shouldRender && (
        <div className="text-sm text-white bg-primary">
          <div className={`sm:container sm:mx-auto px-3 h-0 flex items-center transition-all ${show && 'h-[38px]'}`}>
            <div className="flex-grow text-center">
              <span>Giảm giá 20% cho đơn hàng đầu tiên của bạn. </span>
              <Link to="/login" className="font-semibold underline">
                Đăng ký ngay
              </Link>
            </div>
            <div className="hidden p-1 cursor-pointer sm:block" onClick={onClose}>
              <LiaTimesSolid />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopHeader;
