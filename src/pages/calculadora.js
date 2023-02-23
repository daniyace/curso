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
        <h1>Swap Styles Here</h1>
        <StyleSwapper />
      </div>
      <div className='calcInner'>
        <Numpad />
      </div>
      <div className="imgCredit">Image by <a href="https://www.freepik.com/free-vector/vintage-vaporwave-background_12981128.htm#query=retro%20pc%20monitor&position=9&from_view=search&track=ais">Freepik</a></div>
    </div>
  );
}

export default Calculadora;
