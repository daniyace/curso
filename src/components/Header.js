import React from 'react';
import NavBar from './NavBar';
import TopBanner from './TopBanner';

const Header = ({ navOptions }) => {
  return (
    <>
      <TopBanner />
      <NavBar navOptions={navOptions} />
    </>
  );
};

export default Header;
