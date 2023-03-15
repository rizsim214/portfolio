import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  max-width: 1400px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding:0 35px;
  border-radius: 10px;
  gap: 20px;
`
const Left = styled.div`
  flex: 2;
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Title = styled.h1`
  font-size: 74px;
  font-weight: 500;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items:center;
  gap: 20px;
`

const Line = styled.img`
  height: 60px;
`

const Subtitle = styled.h2`
  font-size: 32px;
  color: #FB5607;
  font-weight:300;
`

const Desc = styled.p`
  font-size: 22px;
`

const Button = styled.button`
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  background-color: #FB5607;
  color: white;
  font-weight: 500;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;
  position: relative;
`

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(-20px);
    }
  }
`

export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./images/line3.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Img src="./images/production5.svg"></Img>
        </Right>
      </Container>
    </Section>
  )
}
