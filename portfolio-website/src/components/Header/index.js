/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, NavItem, NavLinks } from './styles';

const Header = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Dev Sanghvi</NavLogo>
                <NavItem>
                    <NavLinks to="/about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/projects">Projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/contact">Contact</NavLinks>
                </NavItem>
            </NavbarContainer>
        </Nav>
    );
};

export default Header;
