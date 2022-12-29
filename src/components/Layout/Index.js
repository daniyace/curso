import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';

const Layout = ({ children, navOptions = [] }) => {
  return (
    <>
      <Header navOptions={navOptions} />
      <Hero />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
