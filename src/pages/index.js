import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Layout from '../components/Layout';
import '../styles/global.sass';

const navOptions = [
  { link: '/', text: 'Inicio' },
  { link: '/contacto', text: 'Contacto' },
  { link: '/productos', text: 'Productos' },
  { link: '/calculadora', text: 'Calculadora' },
];

const Index = () => {
  const { navOptionsGlobales } = useContext(AppContext);
  return <Layout navOptions={navOptionsGlobales}>Index</Layout>;
};

export default Index;
