import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for NavBar
const Nav = styled.nav`
  width: 100%;
  background: #0a0a0a; /* Or any color that matches your theme */
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #31c7b2; /* Or any color that matches your theme */
  margin: 0;
`;

const NavMenu = styled.ul`
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
  }
`;

// NavBar component
const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>Dev Sanghvi</Logo>
        <NavMenu>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;