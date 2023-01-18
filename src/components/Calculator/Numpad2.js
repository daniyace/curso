import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDeleteLeft
} from '@fortawesome/free-solid-svg-icons';


const Numpad = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [otherNumber, setOtherNumber] = useState(0);
  const [currentSign, setCurrentSign] = useState("");
  const [total, setTotal] = useState(0);

    const numClickHandler = (value) => {
        //e?.preventDefault();
        //const value = e.target.innerHTML;
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
    setOtherNumber(0);
    setCurrentSign("");
    setTotal(0);
  }

  const posNegClickHandler = () => {
    let value = currentNumber * -1;
    console.log('before', currentNumber, value);
    setCurrentNumber(value);
    console.log('now', currentNumber,  value);
  }

  const operationHandler = (value) => {
    setOtherNumber(currentNumber);
    setCurrentNumber(0);
    setCurrentSign(value);
    console.log("other number", otherNumber, "current number", currentNumber)
  }

  const equalsHandler = () => {
    console.log({currentNumber, otherNumber})
    let total = 0;
    switch (currentSign) {
      case "+":
        total = currentNumber + otherNumber;
        console.log(total);
        zeroClickHandler();
        setCurrentNumber(total);
      break;
      case "-":
        total = otherNumber - currentNumber;
        console.log(total);
        zeroClickHandler();
        setCurrentNumber(total);
      break;
      case "*":
        total = currentNumber * otherNumber;
        console.log(total);
        zeroClickHandler();
        setCurrentNumber(total);
      break;
      case "%":
        total =  otherNumber / currentNumber;
        console.log(total);
        zeroClickHandler();
        setCurrentNumber(total);
      break;
      default:
        break;
    }
  }

  const arr= [
    {label: 'C', className: 'numC blu', onClick: () => zeroClickHandler() },
    {label: '%', className: 'numDivide blu', onClick: (value) => operationHandler('%') },
    {label: 'X', className: 'numTimes blu', onClick: (value) => operationHandler('*') },
    {label: <FontAwesomeIcon icon={ faDeleteLeft } />, className: 'numBack blu', onClick: (value) => numClickHandler(value) },
    {label: '7', className: 'num7 blu', onClick: () => numClickHandler('7')},
    {label: '8', className: 'num8 blu', onClick: () => numClickHandler('8') },
    {label: '9', className: 'num9 blu', onClick: () => numClickHandler('9') },
    {label: '-', className: 'numMinus blu', onClick: (value) => operationHandler('-') },
    {label: '4', className: 'num4 blu', onClick: (value) => numClickHandler('4') },
    {label: '5', className: 'num5 blu', onClick: (value) => numClickHandler('5') },
    {label: '6', className: 'num6 blu', onClick: (value) => numClickHandler('6') },
    {label: '+', className: 'numPlus blu', onClick: (value) => operationHandler('+') },
    {label: '1', className: 'num1 blu', onClick: (value) => numClickHandler('1') },
    {label: '2', className: 'num2 blu', onClick: (value) => numClickHandler('2') },
    {label: '3', className: 'num3 blu', onClick: (value) => numClickHandler('3') },
    {label: '=', className: 'equals blu', onClick: (value) => equalsHandler() },
    {label: '+/-', className: 'plusMinus blu', onClick: (value) => posNegClickHandler(value) },
    {label: '0', className: 'num0 blu', onClick: (value) => numClickHandler('0') },
    {label: '.', className: 'point blu', onClick: (value) => numClickHandler('.') },
    
]

  return (
    <div className='numPad'>
      <div className='calcScreen'>
        <h2>{otherNumber ? otherNumber : ""}</h2>
        <h3>{currentSign}</h3>
        <h2>{currentNumber}</h2>
      </div>
        <div className='numGrid'>
            Numpad
            {arr.map(({label,className,onClick}, index) => 
                <div key={index} className={className} onClick={onClick}>{label}</div>
            )}
            {/* <div className='numC blu' onClick={() => zeroClickHandler() }>C</div>
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
            <div className='point blu' onClick={(value) => signClickHandler(value) }>.</div> */}
        </div>
    </div>
  )
}
export default Numpad