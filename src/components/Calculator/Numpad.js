import React from 'react'
import calculadora from '../../pages/calculadora'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDeleteLeft
} from '@fortawesome/free-solid-svg-icons';

function Numpad() {
  return (
    <div className='numPad'>
        <div className='numGrid'>
            Numpad
            <div className='numC blu'>C</div>
            <div className='numDivide blu'>%</div>
            <div className='numTimes blu'>X</div>
            <div className='numBack blu'><FontAwesomeIcon icon={ faDeleteLeft } /></div>
            <div className='num7 blu'>7</div>
            <div className='num8 blu'>8</div>
            <div className='num9 blu'>9</div>
            <div className='numMinus blu'>-</div>
            <div className='num4 blu'>4</div>
            <div className='num5 blu'>5</div>
            <div className='num6 blu'>6</div>
            <div className='numPlus blu'>+</div>
            <div className='num1 blu'>1</div>
            <div className='num2 blu'>2</div>
            <div className='num3 blu'>3</div>
            <div className='equals blu'>=</div>
            <div className='plusMinus blu'>+-</div>
            <div className='num0 blu'>0</div>
            <div className='point blu'>.</div>
        </div>
    </div>
  )
}

export default Numpad