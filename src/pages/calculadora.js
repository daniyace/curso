import React from 'react'
import Numpad from '../components/Calculator/Numpad2';
import Screen from '../components/Calculator/Screen';
import StyleSwapper from '../components/Calculator/StyleSwapper';
import '../styles/calculator.scss';

function calculadora() {
  return (
    <div className='calcCont'>
      <div className='calcOuter'>
        Swap styles here
      <StyleSwapper/>
      </div>
        <div className='calcInner'>
        <Numpad/>
        </div>
    </div>
  )
}

export default calculadora