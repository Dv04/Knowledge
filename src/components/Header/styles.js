import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

// Styled components for NavBar
export const Nav = styled.nav`
  width: 100%;
  background: #0a0a0a; /* Or any color that matches your theme */
  padding: 1rem 0;
`;

export const NavContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #white; /* Or any color that matches your theme */

  margin: 0;
`;

export const LogoLink = styled(RouterLink)`
    color: #31c7b2; // Replace with your custom color
    text-decoration: none;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  li {
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
    color: #f4f4f4; /* Light text color for contrast */
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #31c7b2; /* Highlight color on hover */
    }
    
    &.active {

      font-weight: bold;
    }
  }
`;
