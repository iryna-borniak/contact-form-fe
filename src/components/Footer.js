import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../images/facebook.svg';
import twitterIcon from '../images/twitter.svg';
import linkedinIcon from '../images/linkedin.svg';
import pinterestIcon from '../images/pinterest.svg';
import red_cartoon from '../images/red_cartoon.svg';
import green_cartoon from '../images/green_cartoon.svg';
import yellow_cartoon from '../images/yellow_cartoon.svg';

const FooterContainer = styled.footer`
  height: 200px;
  background: #fafafa;
  border: 1px solid #d8d8d8;
  display: flex;  
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const RedCartoon = styled.img`
  position: relative;
  top: 10px;
  left: -45px;  

  @media (min-width: 768px) {
    left: 20px;
  }
`;

const GreenCartoon = styled.img`
  display: none;  

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 128px;
  }  
`;

const YellowCartoon = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    bottom: 25px;
    right: -35px;
  }
`;

const IconList = styled.ul`  
  list-style: none;  
  padding: 0;
  position: absolute;
  right: 40px;

  @media (min-width: 480px) {
    display: flex;
    margin: 0;
  }

  @media (min-width: 768px) {
    position: relative;
    right: 0;
    margin: 0 0 0 20px;
  }
`;

const IconListItem = styled.li`
  margin: 20px 10px;  
`;

const IconLink = styled.a`
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <RedCartoon src={red_cartoon} alt="Red Cartoon" />
      <IconList>
        <IconListItem>          
          <IconLink href="#" icon={linkedinIcon} />
        </IconListItem>
        <IconListItem>
          <IconLink href="#" icon={twitterIcon} />
        </IconListItem>
        <IconListItem>
          <IconLink href="#" icon={facebookIcon} />
        </IconListItem>
        <IconListItem>
          <IconLink href="#" icon={pinterestIcon} />
        </IconListItem>
      </IconList>
      <GreenCartoon src={green_cartoon} alt="Green Cartoon" />
      <YellowCartoon src={yellow_cartoon} alt="Yellow Cartoon" />
    </FooterContainer>
  );
};
