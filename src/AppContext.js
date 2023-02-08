import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const themes = [
  {
    name: 'light',
    className: 'light-theme',
  },
  {
    name: 'dark',
    className: 'dark-theme',
  },
  {
    name: 'retro',
    className: 'retro-theme',
  },
];

const ContextProvider = ({ children }) => {
  const [categoriasContext, setCategoriasContext] = useState([]);
  const [themeChoose, setThemeChoose] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
   /*  const getCategorias = async () => {
      try {
        const result = await axios.get(
          'https://api.escuelajs.co/api/v1/categories'
        );
        console.log('result', result);
        setCategoriasContext(result.data);
      } catch (error) {
        alert('Error al obtener las categorias');
      } finally {
      }
    };
    getCategorias(); */
    const getTheme = JSON.parse(localStorage.getItem('tema_pref'));
    setThemeChoose(getTheme);
  }, []);

  const changeTheme = (newTheme) => {
    setThemeChoose(newTheme);
    localStorage.setItem('tema_pref', JSON.stringify(newTheme));
    /* const themeRemember = !themeChoose;
    localStorage.setItem('tema_pref', JSON.stringify(themeRemember));
    setThemeChoose((themeChoose) => !themeChoose); */
  };

  const navOptionsGlobales = [
    { link: '/', text: 'Inicio' },
    { link: '/contacto', text: 'Contacto' },
    { link: '/productos', text: 'Productos' },
    { link: '/calculadora', text: 'Calculadora' },
  ];

  const initialValue = {
    categoriasContext,
    navOptionsGlobales,
    themeChoose,
    changeTheme,
    history,
    setHistory,
    themes,
  };

  return (
    <AppContext.Provider value={initialValue}>
      <> {children}</>
    </AppContext.Provider>
  );
};

export default ({ element }) => <ContextProvider>{element}</ContextProvider>;

export const AppContext = createContext({
  categoriasContext: [],
  navOptionsGlobales: [],
  themeChoose: 0,
  changeTheme: () => {},
  setHistory: () => {},
  history: [],
  themes: [],
});
