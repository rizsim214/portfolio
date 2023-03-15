import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display:flex;
  justify-content:center;
  
`
const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  display:flex;
  justify-content: space-between;
  padding: 0 40px;
`
const Links = styled.div`
  display:flex;
  align-items: center;
  gap: 45px;
  
`
const Logo = styled.img`
   height: 75px;
   border-radius: 5px;

`
const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  
`
const ListItem = styled.li`
  cursor: pointer;
  width: 55px;
`
const Icons = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
`
const Icon = styled.img`
  height: 25px;
  
`
const Button = styled.button`
  padding:10px;
  font-size: 18px;
  width: 100px;
  background-color: #FB5607;
  color: white;
  border: none;
  border-radius: 5px;
  cursor:pointer;
`
const Brand = styled.a`
  margin-top: 10px;
  margin-bottom: 10px;
`
// #EB9647
export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Brand href="#"><Logo src='./images/logo-black.png'/></Brand>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src='./images/search2.png'/>
                <Button> Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}
