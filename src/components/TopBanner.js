import React from 'react';
import styled from 'styled-components';
import Typography from './common/Typography';

const Wrapper = styled.div`
  padding: 0.1rem 0;
  text-align: center;
`;

const TopBanner = () => {
  return (
    <Wrapper className='bg-main'>
      <Typography variant='body4' className='text-white'>
        Envíos a todo México
      </Typography>
    </Wrapper>
  );
};

export default TopBanner;
