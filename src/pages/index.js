import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.sass';

const navOptions = [
  { link: '/', text: 'Inicio' },
  { link: '/contacto', text: 'Contacto' },
  { link: '/productos', text: 'Productos' },
];

const Index = () => {
  return <Layout navOptions={navOptions}>Index</Layout>;
};

export default Index;
