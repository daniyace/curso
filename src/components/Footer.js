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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
    </Wrapper>
  );
};

export default Footer;
