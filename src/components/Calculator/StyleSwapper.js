import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';

const StyleSwapper = () => {
  const { themes, changeTheme } = useContext(AppContext);

  /* const [pastel, setPastel] = useState(false);
    const [neon, setNeon] = useState(false);
    const [minimal, setMinimal] = useState(true); */
  return (
    <div>
      {themes.map(({ name }, i) => (
        <button key={name} onClick={() => changeTheme(i)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default StyleSwapper;
