import React from 'react';
import styled from 'styled-components';
import { ContactForm } from './ContactForm';
import { Map } from './MapContainer';
import cloud from '../images/cloud.jpg';
import ellipse from '../images/ellipse.jpg';
import yellow_cartoon from '../images/yellow_cartoon.svg';
import red_cartoon from '../images/red_cartoon.svg';
import goodie from '../images/goodie.svg';

const Ellipse = styled.img`
  width: 87px;
  height: 87px;
  display: block;
  margin: 20px 0 0 auto;
`;

const YellowCartoon = styled.img`
  position: absolute;
  top: 0;
  left: -15px;

@media (min-width: 768px) {
    left: 50px;
  }
`;

const RedCartoon = styled.img`
  display: none;

  @media (min-width: 480px) {
    display: block;
    position: absolute;
    bottom: 75px;
    left: 90%;
    z-index: 1;
  }

  @media (min-width: 768px) {
    left: 65%;
    margin-left: 40px;
  }

  @media (min-width: 1024px) {
    left: 52%;
  }
`;

const Goodie = styled.img`
  display: none;

  @media (min-width: 480px) {
    display: block;
    position: absolute;
    bottom: 280px;
    left: 93%;
    z-index: 2;
  }

  @media (min-width: 768px) {
    left: 65%;
    margin-left: 40px;
  }

  @media (min-width: 1024px) {
    left: 52%;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 57%;
  }
`;

const MainContainer = styled.div`
  background-image: url(${cloud});
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
  display: flex;
  height: 824px;
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 70%;
    margin-left: 40px;
  }

  @media (min-width: 1024px) {
    width: 57%;
  }
`;

const MapContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 30%;
    overflow: hidden;
    height: 924px;
    position: relative;
    top: -108px;
  }

  @media (min-width: 1024px) {
    width: 43%;
  }
`;

export const Main = () => {
  return (
    <>
      <TopContainer>
        <YellowCartoon src={yellow_cartoon} alt="Yellow Cartoon" />
        <Ellipse src={ellipse} alt="Ellipse" />
      </TopContainer>

      <MainContainer>
        <ContactContainer>
          <ContactForm />          
        </ContactContainer>

          <Goodie src={goodie} alt="Goodie" />  
          <RedCartoon src={red_cartoon} alt="Red Cartoon" />

        <MapContainer>          
          <Map />
        </MapContainer>
      </MainContainer>
    </>
  );
};
