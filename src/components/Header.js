'use strict';

import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, Item} from 'react-bootstrap';
import { Link } from 'react-router';
//import {NavBar} from './headerComponents/NavBarComponent.js'
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component{






    render(){


        return(
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
                        <LinkContainer to="/first">
                            <NavItem eventKey={1}>Nyheter</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/second">
                            <NavItem eventKey={2} >IT</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/third">
                            <NavItem eventKey={3}>Anslagstavla</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <NavItem eventKey={4} >login</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <NavItem eventKey={5}>signup</NavItem>
                        </LinkContainer>


                        <NavDropdown eventKey={6} title="Mando" id="basic-nav-dropdown">
                            <LinkContainer to="/fourth">
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
                        <NavItem eventKey={1} href="#">Inloggning</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;