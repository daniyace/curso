import React from 'react';
import Layout from '../components/Layout';

const navOptions = [
  { link: '/', text: 'Inicio' },
  { link: '/contacto', text: 'Contacto' },
];

const Contacto = () => {
  return <Layout navOptions={navOptions}>Contacto</Layout>;
};

export default Contacto;
