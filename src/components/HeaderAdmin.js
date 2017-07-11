'use strict';

import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, Item} from 'react-bootstrap';
import { Link } from 'react-router';
//import {NavBar} from './headerComponents/NavBarComponent.js'
import { LinkContainer } from 'react-router-bootstrap';

class HeaderAdmin extends React.Component{






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
                        <LinkContainer to="/news">
                            <NavItem eventKey={1}>Nyheter</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/it">
                            <NavItem eventKey={2} >IT</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/board">
                            <NavItem eventKey={3}>Anslagstavla</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={6} title="Mando" id="basic-nav-dropdown">
                            <LinkContainer to="/profile">
                                <NavItem eventKey={6.1}>Profil</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/coworkers">
                                <NavItem eventKey={6.2}>Medarbetare</NavItem>
                            </LinkContainer>
                            {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
                            {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
                            {/*<MenuItem divider />*/}
                            {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/admin">
                            <NavItem eventKey={7}>Admin</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                        <NavItem eventKey={8}>Logga ut</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HeaderAdmin;