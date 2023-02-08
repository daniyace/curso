import React, { useState, useEffect, useContext } from 'react';

const StyleSwapper = () => {
    const [pastel, setPastel] = useState(false);
    const [neon, setNeon] = useState(false);
    const [minimal, setMinimal] = useState(true);
  return (
    <div>{pastel}</div>
  )
}

export default StyleSwapper