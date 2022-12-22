import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  a{
    padding: 10px;
    border-radius: 50%;
    background: #000;
    color: #fff;
  }
`;

const footerLinks = [
  { href: 'www.facebook.com', title: 'Facebook', icon: 'facebook' },
  { href: 'www.instagram.com', title: 'Instagram', icon: 'instagram' },
  { href: 'www.pinterest.com', title: 'Pinterest', icon: 'pinterest' },
  { href: 'www.twitter.com', title: 'Twitter', icon: 'twitter' },
  { href: 'www.Google.com', title: 'Google', icon: 'square-google-plus' },
];

const Socialbtn = ({href, title, icon}) => {
  return<a href={href} title={title}>
    <span className={`fa-brands fa-${icon}`}></span>
    <FontAwesomeIcon icon={["fas", "coffee"]} />
  </a>
};

const Footer = () => {
  return <Wrapper>
    <div id="footercont">
      <div>
        {footerLinks.map((link, index)=> {return <Socialbtn href={link.href} title={link.title} icon={link.icon} key={index}/>})}
      </div>
    </div>
  </Wrapper>;
};

export default Footer;
