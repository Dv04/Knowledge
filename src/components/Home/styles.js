// src/components/Home/styles.js
import styled from 'styled-components';

export const StyledHome = styled.section`
  height: 10vh;
  width: 100vw;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory;
  min-height: 100vh;
  justify-content: flex-start;


  
  #Main {
    margin-top: 200px;
    position: absolute;
    color: #fff;
    font-size: calc(2rem + 2vw);
    pointer-events: auto;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem; // Smaller font size for smaller screens
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1rem; // Even smaller font size for mobile screens
    }
  }

  div {
    position: relative;


  }

`;


export const Section = styled.section`
  padding: 50px 20px;
  display: flex;

  justify-content: center;
  align-items: center;
  scroll-snap-type: y mandatory;
`;
