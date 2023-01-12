import React from 'react'
import Numpad from '../components/Calculator/Numpad';
import Screen from '../components/Calculator/Screen';
import '../styles/calculator.scss';

function calculadora() {
  return (
    <div className='calcCont'>
        <div className='calcInner'>
        <Screen/>
        <Numpad/>
        </div>
    </div>
  )
}

export default calculadora