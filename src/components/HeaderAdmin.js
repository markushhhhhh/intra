'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Bootstrap Components
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, Item} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

//The Component
const HeaderAdmin = ({
                         //Properties that is attached to the component from its parent
                         userLogoutPropp
                     }) => (
    <Navbar collapseOnSelect fixedTop={true} >
        <Navbar.Header>
            <Navbar.Brand>
                <IndexLinkContainer to="/">
                    <img src="/img/mandometer_logo2.png"/>
                </IndexLinkContainer>
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
                <LinkContainer to="/board">
                    <NavItem eventKey={3}>Anslagstavla</NavItem>
                </LinkContainer>
                <LinkContainer to="/fourth">
                    <NavItem eventKey={4}>Kafferast</NavItem>
                </LinkContainer>
                <NavDropdown eventKey={6} title="Mando" id="basic-nav-dropdown">
                    <IndexLinkContainer to="/profile">
                        <NavItem eventKey={6.1}>Min Sida</NavItem>
                    </IndexLinkContainer>
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
                <NavItem eventKey={1} href="#" onClick={userLogoutPropp}>Logga Ut</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

//Properties that is attached to the component from its parent. This makes sure its the correct format
HeaderAdmin.propTypes = {
    userLogoutPropp: PropTypes.func.isRequired,
};

export default HeaderAdmin;