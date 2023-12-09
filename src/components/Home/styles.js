// // src/components/Home/styles.js
// import styled from 'styled-components';

// export const Container = styled.div`
//     color: #fff;
//     text-align: center;
//     // Add more styles for your Home container
// `;

// src/components/Home/styles.js
import styled from 'styled-components';

export const StyledHome = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a0a0a;
  
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
