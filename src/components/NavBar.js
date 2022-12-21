import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
`;

const NavBar = ({ navOptions }) => {
  return (
    <Wrapper>
      {navOptions.map(({ link, text }, i) => (
        <Link to={link} className='btn' key={i}>
          {text}
        </Link>
      ))}
    </Wrapper>
  );
};

export default NavBar;
