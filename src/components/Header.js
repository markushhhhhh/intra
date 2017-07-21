'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, Item} from 'react-bootstrap';
import { Link } from 'react-router';
//import {NavBar} from './headerComponents/NavBarComponent.js'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';





const Header = ({
                    userLogoutPropp
                }) => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <LinkContainer to="/">
                    <img src="img/mandometer_logo2.png"/>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to="/">
                    <NavItem eventKey={1}>Nyheter</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/it">
                    <NavItem eventKey={1} >IT</NavItem>
                </LinkContainer>
                <LinkContainer to="/third">
                    <NavItem eventKey={3}>Anslagstavla</NavItem>
                </LinkContainer>



                <NavDropdown eventKey={6} title="Mando" id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                        <NavItem eventKey={6.1}>Profil</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/fifth">
                        <NavItem eventKey={6.2}>Medarbetare</NavItem>
                    </LinkContainer>
                    {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
                    {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
                    {/*<MenuItem divider />*/}
                    {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="/" onClick={userLogoutPropp}>Logga Ut</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);





Header.propTypes = {
    userLogoutPropp: PropTypes.func.isRequired,
};

export default Header;