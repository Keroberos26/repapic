import React, { useState } from 'react';
import TopHeader from './TopHeader';
import DrawerAppBar from './DrawerAppBar';

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleInvisible = () => {
    setIsVisible(false);
  };

  return (
    <header className="z-10 shadow-md">
      <TopHeader show={isVisible} onClose={handleInvisible} />
      <DrawerAppBar />
    </header>
  );
};

export default Header;
