import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faL } from '@fortawesome/free-solid-svg-icons';

const Numpad = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [otherNumber, setOtherNumber] = useState(0);
  const [currentSign, setCurrentSign] = useState('');
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [prevMovement, setPrevMovement] = useState(''); //Saved for future reference
  const [movement, setMovement] = useState('');

  const numClickHandler = (value) => {
    let values = [];
    values.push(currentNumber, value);
    let tot = Number(values.join(''));
    setCurrentNumber(tot);
    lastMovement(tot);
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCurrentSign(value);
  };

  const zeroClickHandler = () => {
    setCurrentNumber(0);
    setOtherNumber(0);
    setCurrentSign('');
    setTotal(0);
    setError('');
    setMovement('');
  };

  const posNegClickHandler = () => {
    let value = currentNumber * -1;
    setCurrentNumber(value);
    setMovement(value);
  };

  const operationHandler = (value) => {
    setOtherNumber(currentNumber);
    setCurrentNumber(0);
    setCurrentSign(value);
    setMovement(value);
  };

  const divValidation = () => {
    if (currentNumber == false) {
      setCurrentNumber(0);
      setError('Invalid Operation');
    }
  };

  //useEffect(() => {historyStorage()}, [history]);

  //useEffect(() => {
  //recuperar el historial de la memoria local y asignarlo al estado
  //}, []);

  const historyStorage = () => {
    //Date.now()
    //cada registro debe tener un registro de la fecha 
    //let date = { currentTime: new Date().toLocaleString() };
    console.log(date);
    console.log(date[1]);
    console.log(date[2]);
    const info = {
      hist: history,
      //dat: date,
    };

    localStorage.setItem('info', JSON.stringify(info));
    // console.log(date);
    // let displayStorage = localStorage.getItem('info');
    // console.log(displayStorage, 'my storage');
  };

  const historySaver = () => {
    // let a = 'a'
    // let b = a

    // a = 'c'

    // console.log(a, b)
    // // 'c', 'a'

    // let arrA = [1, 2, 3]
    // let arrB = [...arrA]

    // arrA.push(4)

    // console.log(arrA, arrB)
    
    // // [1, 2, 3, 4], [1, 2, 3, 4]

    let myHistory = {...history};
    console.log('my history', myHistory);
    let historyString = [
      otherNumber, 
      currentSign,
      currentNumber,
      //Date.now()
      ].toString();
    myHistory.push(historyString);
    console.log(myHistory, typeof myHistory, 'My History');
    setHistory(myHistory);
    //historyStorage();
  };

  const lastMovement = (value) => {
    setMovement(value);
    console.log('current movement', movement);
  };

  const deleteArrow = () => {
    // si el movimiento es un signo, permitir cambiarlo, si es un numero, borrarlo
    if (typeof movement == 'number') {
      console.log('it entered as a number');
      /*setPrevMovement(movement);*/
      let number;
      let caso;
      if (otherNumber === 0) { //if no necesario
        if (currentNumber + ''.length === 1) {
          console.log(currentNumber, ' Es menor o igual a 9');
          setCurrentNumber(0);
          setMovement(0);
          caso = '1a';
          return;
        } else if (currentNumber >= -9 && currentNumber < 0) { //if no necesario
          console.log(currentNumber, ' Es mayor o igual a -9');
          setCurrentNumber(0);
          setMovement(0);
          caso = '1b';
        } else {
          number = currentNumber;
          caso = '1c';
        }
      } else {
        number = otherNumber;
        caso = '2';
      }
      // currentNumber+''.split('').pop().join('')
      // currentNumber+''.split('').slice(0, -1).join('')
      // currentNumber+''.substring(0, currentNumber.toString().length - 1)
      let result = number.toString().substring(0, number.toString().length - 1);
      let final = parseInt(result);
      switch (caso) { // switch no necesario
        case '1c':
          setMovement(currentNumber);
          setCurrentNumber(final);
          break;
        case '2':
          setMovement(otherNumber);
          setOtherNumber(final);
      }
      console.log('it entered as a number', movement);
      console.log('resultado final', final);
    } else if (typeof movement == 'string') { // permitir cambiarlo
      console.log('it entered as a symbol');
      /*setPrevMovement(movement);*/
      setMovement(currentSign);
      setCurrentSign('');
      console.log('it entered as a symbol', movement);
    } else {
      zeroClickHandler();
    }
  };

  const equalsHandler = () => {
    let total = 0;
    historySaver();
    switch (currentSign) {
      case '+':
        total = currentNumber + otherNumber;
        zeroClickHandler();
        setCurrentNumber(total);
        break;
      case '-':
        total = otherNumber - currentNumber;
        zeroClickHandler();
        setCurrentNumber(total);
        break;
      case '*':
        total = currentNumber * otherNumber;
        zeroClickHandler();
        setCurrentNumber(total);
        break;
      case '%':
        total = otherNumber / currentNumber;
        zeroClickHandler();
        setCurrentNumber(total);
        divValidation();
        break;
      default:
        break;
    }
  };

  const arr = [
    { label: 'C', className: 'numC blu', onClick: () => zeroClickHandler() },
    {
      label: '%',
      className: 'numDivide blu',
      onClick: (value) => operationHandler('%'),
    },
    {
      label: 'X',
      className: 'numTimes blu',
      onClick: (value) => operationHandler('*'),
    },
    {
      label: <FontAwesomeIcon icon={faDeleteLeft} />,
      className: 'numBack blu',
      onClick: () => deleteArrow(),
    },
    { label: '7', className: 'num7 blu', onClick: () => numClickHandler('7') },
    { label: '8', className: 'num8 blu', onClick: () => numClickHandler('8') },
    { label: '9', className: 'num9 blu', onClick: () => numClickHandler('9') },
    {
      label: '-',
      className: 'numMinus blu',
      onClick: (value) => operationHandler('-'),
    },
    {
      label: '4',
      className: 'num4 blu',
      onClick: (value) => numClickHandler('4'),
    },
    {
      label: '5',
      className: 'num5 blu',
      onClick: (value) => numClickHandler('5'),
    },
    {
      label: '6',
      className: 'num6 blu',
      onClick: (value) => numClickHandler('6'),
    },
    {
      label: '+',
      className: 'numPlus blu',
      onClick: (value) => operationHandler('+'),
    },
    {
      label: '1',
      className: 'num1 blu',
      onClick: (value) => numClickHandler('1'),
    },
    {
      label: '2',
      className: 'num2 blu',
      onClick: (value) => numClickHandler('2'),
    },
    {
      label: '3',
      className: 'num3 blu',
      onClick: (value) => numClickHandler('3'),
    },
    {
      label: '=',
      className: 'equals blu',
      onClick: (value) => equalsHandler(),
    },
    {
      label: '+/-',
      className: 'plusMinus blu',
      onClick: (value) => posNegClickHandler(value),
    },
    {
      label: '0',
      className: 'num0 blu',
      onClick: (value) => numClickHandler('0'),
    },
    {
      label: '.',
      className: 'point blu',
      onClick: (value) => numClickHandler('.'),
    },
  ];

  return (
    <div className='numPad'>
      <div className='calcScreen'>
        <h2>{error}</h2>
        <h2>{otherNumber ? otherNumber : ''}</h2>
        <h3>{currentSign}</h3>
        <h2>{currentNumber}</h2>
        <h2>History</h2>
      </div>
      <div className='numGrid'>
        Numpad
        {arr.map(({ label, className, onClick }, index) => (
          <div key={index} className={className} onClick={onClick}>
            {label}
          </div>
        ))}
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
  );
};
export default Numpad;
