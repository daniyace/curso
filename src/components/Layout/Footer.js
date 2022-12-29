import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import Typography from '../common/Typography';

const Wrapper = styled.div`
  display: flex;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  a {
    padding: 10px;
    border-radius: 50%;
    //background: #000;
    color: #fff;
  }
  svg {
    color: #000;
    font-size: 2rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const footerLinks = [
  { href: 'www.facebook.com', title: 'Facebook', icon: faFacebook },
  { href: 'www.instagram.com', title: 'Instagram', icon: faInstagram },
  { href: 'www.pinterest.com', title: 'Pinterest', icon: faPinterest },
  { href: 'www.twitter.com', title: 'Twitter', icon: faTwitter },
  { href: 'www.Google.com', title: 'Google', icon: faGooglePlus },
];

const Socialbtn = ({ href, title, icon }) => {
  return (
    <a href={href} title={title}>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

const Footer = () => {
  return (
    <Wrapper>
      <TextWrapper className='col'>
        <div>
          <Typography variant='subtitle4'>Nuestras direcciones:</Typography>
          <Typography variant='body4'>Guerrero #100 Centro</Typography>
          <Typography variant='body4'>Trujano #301 Centro</Typography>
        </div>
      </TextWrapper>
      <IconsWrapper className='col'>
        <div id='footercont'>
          <div>
            {footerLinks.map((link, index) => {
              return (
                <Socialbtn
                  href={link.href}
                  title={link.title}
                  icon={link.icon}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </IconsWrapper>
      <TextWrapper className='col'>
        <div>
          <Typography variant='subtitle4'>Llámanos</Typography>
          <Typography variant='body4'>Guerrero: Tel. 951 5166680</Typography>
          <Typography variant='body4'>Trujano: Tel. 951 5163434</Typography>
        </div>
      </TextWrapper>
    </Wrapper>
  );
};

export default Footer;
