import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { Nav, NavContainer, Logo, LogoLink, NavMenu } from './styles';

// NavBar component
const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo><LogoLink to="/">Dev Sanghvi</LogoLink></Logo>
        <NavMenu>
          <li><ScrollLink to="home" smooth duration={500}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth duration={500}>About</ScrollLink></li>
          <li><ScrollLink to="projects" smooth duration={500}>Projects</ScrollLink></li>
          <li><ScrollLink to="contact" smooth duration={500}>Contact</ScrollLink></li>
          <li><ScrollLink to="skills" smooth duration={500}>Skills</ScrollLink></li>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;