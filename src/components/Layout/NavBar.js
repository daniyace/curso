import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

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
        <Button variant='link' href={link}>
          {text}
        </Button>
      ))}
    </Wrapper>
  );
};

export default NavBar;
