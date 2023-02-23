import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';

const StyleSwapper = () => {
  const { themes, changeTheme } = useContext(AppContext);
  return (
    <div className='buttonCont'>
      {themes.map(({ name, index }, i) => (
        <button key={name}  className={index} onClick={() => changeTheme(i)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default StyleSwapper;
