import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Nav, NavContainer, Logo, LogoLink, NavMenu } from './styles';

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo><LogoLink to="/">Dev Sanghvi</LogoLink></Logo>
        <NavMenu>
          {/* Update the Links to ScrollLink */}
          <li><ScrollLink to="home" spy={true} smooth={true} duration={500}>Home</ScrollLink></li>
          <li><ScrollLink to="about" spy={true} smooth={true} duration={500}>About</ScrollLink></li>
          <li><ScrollLink to="projects" spy={true} smooth={true} duration={500}>Projects</ScrollLink></li>
          <li><ScrollLink to="skills" spy={true} smooth={true} duration={500}>Skills</ScrollLink></li>
          <li><ScrollLink to="contact" spy={true} smooth={true} duration={500}>Contact</ScrollLink></li>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
