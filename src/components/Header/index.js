import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, NavContainer, Logo, LogoLink, NavMenu } from './styles';

// NavBar component
const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo><LogoLink to="/">Dev Sanghvi</LogoLink></Logo>
        <NavMenu>
          <li><Link to="/" spy={true} smooth={true} duration={500}>Home</Link></li>
          <li><Link to="/about" spy={true} smooth={true} duration={500}>About</Link></li>
          <li><Link to="/projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="/contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
          <li><Link to="/skills" spy={true} smooth={true} duration={500}>Skills</Link></li>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;