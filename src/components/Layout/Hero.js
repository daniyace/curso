import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { media } from '../common/Theme';
const src = '../../images/resplandor.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgCont = styled.div`
  max-width: 50%;
  ${media.down('lg')`
    max-width: 100%;
  `}
`;

const Hero = () => {
  return (
    <Wrapper>
      {/*normalmente se usa un div para darle estilos a la imagen*/}
      <ImgCont>
        <StaticImage
          src={src} //la imagen se procesa en el momento de la compilación para StaticImage
          alt='Hero Image'
          placeholder='blurred'
          layout='constrained' //limita el tamaño de la imagen a los márgenes del contenedor
          loading='eager' //carga la imagen antes de que el resto de la página ya que se encuentra fuera del la carpeta del componente
        />
      </ImgCont>
    </Wrapper>
  );
};

export default Hero;
