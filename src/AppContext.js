import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const themes = [
  {
    name: 'Pastel',
    className: 'pastel-theme',
    index: 'zero'
  },
  {
    name: 'Gradient',
    className: 'gradient-theme',
    index: 'one'
  },
  {
    name: 'retro',
    className: 'retro-theme',
    index: 'two'
  },
];

const ContextProvider = ({ children }) => {
  const [categoriasContext, setCategoriasContext] = useState([]);
  const [themeChoose, setThemeChoose] = useState(0);
  const [history, setHistory] = useState([]);
  const [tareas, setTareas] = useState([]);
  const [tareasHechas, setTareasHechas] = useState([]);

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
    setThemeChoose(getTheme || 0);
    let seeTasks = localStorage.getItem('tasks');
    let seeDoneTasks = localStorage.getItem('donetasks');
    let tasksArr = JSON.parse(seeTasks || [""]);
    let doneTasksArr = JSON.parse(seeDoneTasks || [""]);
    setTareas(tasksArr);
    setTareasHechas(doneTasksArr);
    console.log("Tareas", tareas, typeof tareas);
    console.log("Tareas Hechas", tareasHechas, typeof tareasHechas);
  }, []);

  const changeTheme = (newTheme) => {
    setThemeChoose(newTheme);
    localStorage.setItem('tema_pref', JSON.stringify(newTheme));
  };

  const navOptionsGlobales = [
    { link: '/', text: 'Inicio' },
    { link: '/contacto', text: 'Contacto' },
    { link: '/productos', text: 'Productos' },
    { link: '/calculadora', text: 'Calculadora' },
    { link: '/calculadora', text: 'Calculadora' },
    { link: '/todoList', text: 'To-do List' },
  ];

  const initialValue = {
    categoriasContext,
    navOptionsGlobales,
    themeChoose,
    changeTheme,
    history,
    setHistory,
    themes,
    tareas,
    tareasHechas,
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
  tareas: [],
  setTareas: () => {},
  setTareasHechas: () => {},
  tareasHechas: []
});
