import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children, navOptions = [] }) => {
  return (
    <>
      <NavBar navOptions={navOptions} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
