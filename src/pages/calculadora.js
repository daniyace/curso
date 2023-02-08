import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Numpad from '../components/Calculator/Numpad2';
import Screen from '../components/Calculator/Screen';
import StyleSwapper from '../components/Calculator/StyleSwapper';
import '../styles/calculator.scss';

function Calculadora() {
  const { themes, themeChoose } = useContext(AppContext);
  return (
    <div className={`calcCont ${themes[themeChoose].className}`}>
      <div className='calcOuter'>
        Swap styles here
        <StyleSwapper />
      </div>
      <div className='calcInner'>
        <Numpad />
      </div>
    </div>
  );
}

export default Calculadora;
