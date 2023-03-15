import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display:flex;
  justify-content: center;
`
const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  max-width: 1400px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin:auto;
  gap: 20px;
`
const Left = styled.div`
  flex: 1;
  
`

const Right = styled.div`
  flex: 1;
  
`



export const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d IMAGE */}
          <h1>HELLO LEFT</h1>
        </Left>
        <Right>
          <h1>HELLO RIGHT</h1>
        </Right>
      </Container>
    </Section>
  )
}
