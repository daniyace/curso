import React from 'react'
import Numpad from '../components/Calculator/Numpad';
import '../styles/calculator.scss';

function calculadora() {
  return (
    <div className='calcCont'>
        <div className='calcInner'>
        <Numpad/>
        </div>
    </div>
  )
}

export default calculadora