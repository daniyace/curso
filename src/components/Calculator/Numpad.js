import React, { useState, useEffect, useContext } from 'react';
import calculadora from '../../pages/calculadora';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDeleteLeft
} from '@fortawesome/free-solid-svg-icons';


function Numpad() {

  const [currentNumber, setCurrentNumber] = useState(0);
  const [currentSign, setCurrentSign] = useState("");
  const [total, setTotal] = useState(0);

    const numClickHandler = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        let values = [];
        values.push(currentNumber, value);
        console.log("values", values);
        let tot = Number(values.join(''));
        console.log(tot, typeof(tot));
        setCurrentNumber(tot);
    }

    const signClickHandler = (e) => {
      e.preventDefault();
      const value = e.target.innerHTML;
      setCurrentSign(value);
  }

  const zeroClickHandler = () => {
    setCurrentNumber(0);
    setCurrentSign("");
    setTotal(0);
  }

  const posNegClickHandler = () => {
    let value = currentNumber * -1;
    console.log('before', currentNumber, value);
    setCurrentNumber(value);
    console.log('now', currentNumber,  value);
  }

  return (
    <div className='numPad'>
      <div className='calcScreen'>
        <h2>{currentNumber}</h2>
        <h2 value={currentNumber ? currentNumber : total}></h2>
      </div>
        <div className='numGrid'>
            Numpad
            <div className='numC blu' onClick={() => zeroClickHandler() }>C</div>
            <div className='numDivide blu' onClick={(value) => signClickHandler(value) }>%</div>
            <div className='numTimes blu' onClick={(value) => signClickHandler(value) }>X</div>
            <div className='numBack blu' onClick={(value) => numClickHandler(value) }><FontAwesomeIcon icon={ faDeleteLeft } /></div>
            <div className='num7 blu' onClick={(value) => numClickHandler(value) }>7</div>
            <div className='num8 blu' onClick={(value) => numClickHandler(value) }>8</div>
            <div className='num9 blu' onClick={(value) => numClickHandler(value) }>9</div>
            <div className='numMinus blu' onClick={(value) => signClickHandler(value) }>-</div>
            <div className='num4 blu' onClick={(value) => numClickHandler(value) }>4</div>
            <div className='num5 blu' onClick={(value) => numClickHandler(value) }>5</div>
            <div className='num6 blu' onClick={(value) => numClickHandler(value) }>6</div>
            <div className='numPlus blu' onClick={(value) => signClickHandler(value) }>+</div>
            <div className='num1 blu' onClick={(value) => numClickHandler(value) }>1</div>
            <div className='num2 blu' onClick={(value) => numClickHandler(value) }>2</div>
            <div className='num3 blu' onClick={(value) => numClickHandler(value) }>3</div>
            <div className='equals blu' onClick={(value) => signClickHandler(value) }>=</div>
            <div className='plusMinus blu' onClick={(value) => posNegClickHandler(value) }>+-</div>
            <div className='num0 blu' onClick={(value) => numClickHandler(value) }>0</div>
            <div className='point blu' onClick={(value) => signClickHandler(value) }>.</div>
        </div>
    </div>
  )
}



/*
function Numpad() {
  return (
    <div className='numPad'>
        <select className='numGrid' value={value} onChange={handleChange}>
            Numpad
            <option className='numC blu'>C</option>
            <option className='numDivide blu'>%</option>
            <option className='numTimes blu'>X</option>
            <option className='numBack blu'><FontAwesomeIcon icon={ faDeleteLeft } /></option>
            <option className='num7 blu'>7</option>
            <option className='num8 blu'>8</option>
            <option className='num9 blu'>9</option>
            <option className='numMinus blu'>-</option>
            <option className='num4 blu'>4</option>
            <option className='num5 blu'>5</option>
            <option className='num6 blu'>6</option>
            <option className='numPlus blu'>+</option>
            <option className='num1 blu'>1</option>
            <option className='num2 blu'>2</option>
            <option className='num3 blu'>3</option>
            <option className='equals blu'>=</option>
            <option className='plusMinus blu'>+-</option>
            <option className='num0 blu'>0</option>
            <option className='point blu'>.</option>
        </select>
    </div>
  )
}*/

export default Numpad