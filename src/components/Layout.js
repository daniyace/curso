import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, navOptions = [] }) => {
  return (
    <>
      <Header navOptions={navOptions} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
