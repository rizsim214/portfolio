import styled from "styled-components";
import "./App.css";
import {Hero} from "./components/Hero";
import {About} from "./components/About";
import {Works} from "./components/Works";
import {Contact} from "./components/Contact";

const Container = styled.div`
  color:white;
  background: url('./images/bg.jpg');
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero/>
      <About/>
      <Works/>
      <Contact/>
    </Container>
  );
}

export default App;
