// src/components/Home/styles.js
import styled from 'styled-components';

export const StyledHome = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory;

  justify-content: flex-start;
  min-height: 100vh; /* At least the height of the viewport */

  
  h1 {
    position: absolute;
    color: #fff;
    font-size: calc(2rem + 2vw);
    pointer-events: auto;
  }
  
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; // Ensure canvas is behind other content
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

`;


export const Section = styled.section`
  padding: 50px 20px;
  min-height: 100vh; /* Adjust based on content */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-type: y mandatory;
`;
