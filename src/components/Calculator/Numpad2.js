import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faL } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../AppContext';
import '../../styles/calculator.scss';

const Numpad = () => {
  const { history, setHistory } = useContext(AppContext);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [otherNumber, setOtherNumber] = useState(0);
  const [currentSign, setCurrentSign] = useState('');
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');
  const [movement, setMovement] = useState('');
  const [prevMovement, setPrevMovement] = useState('');
  const [apost, setApost] = useState('');
  const [firstLoad, setLoad] = useState(true);
  const [otherSign, setOtherSign] = useState(0);
  const [didEqual, setEqual] = useState(false);

  const numClickHandler = async (value) => {
    //await equalsValidator();
    console.log(currentNumber, 'Num after equalValidator');
    let values = [];
    if (didEqual) {
      values = [value];
    } else {
      values.push(currentNumber, value);
    }
    setEqual(false);
    let tot = Number(values.join(''));
    setCurrentNumber(tot);
    lastMovement(tot);
    setApost('');
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setCurrentSign(value);
  };

  /*const equalsValidator = async () => {
    let values = [];
    if(didEqual){
    values = [value];
    }
    else{
    values.push(currentNumber, value);
    setEqual(false);
    }
  }*/

  const zeroClickHandler = () => {
    setCurrentNumber(0);
    setOtherNumber(0);
    setCurrentSign('');
    setTotal(0);
    setError('');
    setMovement('');
    setApost('');
  };

  const posNegClickHandler = () => {
    let value = currentNumber * -1;
    setCurrentNumber(value);
    setMovement(value);
  };

  const operationHandler = async (value) => {
    if (currentNumber !== 0) {
      setOtherNumber(+currentNumber);
    }
    if (currentSign !== '' && currentNumber !== 0) {
      const total = await equalsHandler();
      setOtherNumber(total);
    }
    setCurrentNumber(0);
    setCurrentSign(value);
    setMovement(value);
    setApost('');
  };

  const divValidation = () => {
    if (currentNumber == false) {
      setCurrentNumber(0);
      setError('Invalid Operation');
    }
  };

  useEffect(() => {
    historyStorage();
  }, [history, firstLoad]);

  useEffect(() => {
    let displayStorage = localStorage.getItem('info');
    if (displayStorage !== undefined) {
      setHistory(JSON.parse(displayStorage)?.hist || []);
      setLoad(false);
    }
  }, []);

  const historyStorage = () => {
    //Date.now()
    //cada registro debe tener un registro de la fecha

    const info = {
      hist: history,
      //dat: date,
    };
    if (!firstLoad) {
      localStorage.setItem('info', JSON.stringify(info));
    }
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

    // // [1, 2, 3, 4], [1, 2, 3]

    // let myHistory = history.slice(); // [...history]
    let myHistory = [...history];
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
    historyStorage();
  };

  const lastMovement = (value) => {
    setMovement(value);
    console.log('current movement', movement);
  };

  const deleteArrow = () => {
    // si el movimiento es un signo, permitir cambiarlo, si es un numero, borrarlo
    switch (typeof movement) {
      case 'number':
        console.log('it entered as a number');
        setPrevMovement(movement);
        console.log('current number delete', currentNumber);
        console.log(currentNumber + '');
        if ((currentNumber + '').length === 1) {
          console.log(currentNumber, ' Es menor o igual a 9');
          setCurrentNumber(0);
          setMovement(0);
          return;
        }
        let result = currentNumber
          .toString()
          .substring(0, currentNumber.toString().length - 1);
        let final = parseInt(result);
        setMovement(currentNumber);
        setCurrentNumber(final);
        console.log('it entered as a number', movement);
        console.log('resultado final', final);
        break;
      case 'string':
        console.log('it entered as a symbol');
        setPrevMovement(movement);
        setMovement(currentSign);
        setApost("'");
        console.log('delete result', currentSign);
        console.log('Apostrophe on/off', apost);
        break;
      default:
        zeroClickHandler();
    }
    /*if (typeof movement == 'number') {
      console.log('it entered as a number');
      setPrevMovement(movement);
      console.log('current number delete', currentNumber);
      console.log(currentNumber + '');
        if ((currentNumber + '').length === 1) {
          console.log(currentNumber, ' Es menor o igual a 9');
          setCurrentNumber(0);
          setMovement(0);
          return;
        }
      // currentNumber+''.split('').pop().join('')
      // currentNumber+''.split('').slice(0, -1).join('')
      // currentNumber+''.substring(0, currentNumber.toString().length - 1)
      let result = currentNumber.toString().substring(0, currentNumber.toString().length - 1);
      let final = parseInt(result);
      setMovement(currentNumber);
      setCurrentNumber(final);
      console.log('it entered as a number', movement);
      console.log('resultado final', final);
    } else if (typeof movement == 'string') { // permitir cambiarlo
      console.log('it entered as a symbol');
      setPrevMovement(movement);
      setMovement(currentSign);
      setCurrentSign('');
      console.log('it entered as a symbol', movement);
    } else {
      zeroClickHandler();
    }*/
  };

  const equalsHandler = () => {
    let total = 0;
    historySaver();
    /*if (apost !== ""){
      console.log("Sign Changed");
      console.log("'",currentSign.includes("'"));
      console.log("movement", currentSign);
    }
    else{
      console.log("No apostrophe",currentSign.includes("'"));
    };*/
    console.log('Before Switch', currentSign);
    setEqual(true);
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
    return total;
  };

  const periodAdd = () => {
    let value = currentNumber + '';
    if (value.indexOf('.') == -1) {
      value += '.';
      setCurrentNumber(value);
    }
  };

  const arr = [
    {
      label: 'C',
      className: 'numC pinku keyCenter',
      onClick: () => zeroClickHandler(),
    },
    {
      label: '%',
      className: 'numDivide pinku keyCenter',
      onClick: (value) => operationHandler('%'),
    },
    {
      label: 'X',
      className: 'numTimes pinku keyCenter',
      onClick: (value) => operationHandler('*'),
    },
    {
      label: <FontAwesomeIcon icon={faDeleteLeft} />,
      className: 'numBack bg-danger keyCenter',
      onClick: () => deleteArrow(),
    },
    {
      label: '7',
      className: 'num7 blu keyCenter',
      onClick: () => numClickHandler('7'),
    },
    {
      label: '8',
      className: 'num8 blu keyCenter',
      onClick: () => numClickHandler('8'),
    },
    {
      label: '9',
      className: 'num9 blu keyCenter',
      onClick: () => numClickHandler('9'),
    },
    {
      label: '-',
      className: 'numMinus pinku keyCenter',
      onClick: (value) => operationHandler('-'),
    },
    {
      label: '4',
      className: 'num4 blu keyCenter',
      onClick: (value) => numClickHandler('4'),
    },
    {
      label: '5',
      className: 'num5 blu keyCenter',
      onClick: (value) => numClickHandler('5'),
    },
    {
      label: '6',
      className: 'num6 blu keyCenter',
      onClick: (value) => numClickHandler('6'),
    },
    {
      label: '+',
      className: 'numPlus pinku keyCenter',
      onClick: (value) => operationHandler('+'),
    },
    {
      label: '1',
      className: 'num1 blu keyCenter',
      onClick: (value) => numClickHandler('1'),
    },
    {
      label: '2',
      className: 'num2 blu keyCenter',
      onClick: (value) => numClickHandler('2'),
    },
    {
      label: '3',
      className: 'num3 blu keyCenter',
      onClick: (value) => numClickHandler('3'),
    },
    {
      label: '=',
      className: 'equals greeny keyCenter',
      onClick: (value) => equalsHandler(),
    },
    {
      label: '+/-',
      className: 'plusMinus pinku keyCenter',
      onClick: (value) => posNegClickHandler(value),
    },
    {
      label: '0',
      className: 'num0 blu keyCenter',
      onClick: (value) => numClickHandler('0'),
    },
    {
      label: '.',
      className: 'point pinku keyCenter',
      onClick: (value) => periodAdd(),
    },
  ];

  return (
    <div className='numPad'>
      <div className='screenCont'>
        <div className='calcScreen'>
          <h2>{otherNumber ? otherNumber : ''}</h2>
          <h3>
            {apost}
            {currentSign}
            {apost}
          </h3>
          <h2>{currentNumber ? currentNumber : error}</h2>
        </div>
        <div className='calcHist'>
          Today's History
          {history.map((history, index) => (
            <div key={index}>{history.split(',').join(' ')}</div>
          ))}
        </div>
      </div>
      <div className='numGrid'>
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

//Si currentSign y currentNumber no estan
//vacios y presiono simbolo, ejecuto
// un igual y seteo el resultado como
// otherNumber y el signo como current sign
