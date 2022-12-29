import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

const Layout = ({ children, navOptions = [] }) => {
  return (
    <>
      <Header navOptions={navOptions} />
      <Hero />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
