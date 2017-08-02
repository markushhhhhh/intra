'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import {ButtonGroup, Button} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';


//Creates the AdminPageButtonsComponent
const AdminPageButtons = ({
                              //Properties(props) that is attached to the component from its parent
                              renderPropp
                          }) => (
    <ButtonGroup>
        <IndexLinkContainer to="/admin">
            <Button
                onClick={() => renderPropp('RENDER_USERLIST')}
            >Redigera Användare</Button>
        </IndexLinkContainer>

        <LinkContainer to="/adduser">
            <Button>Lägg Till Användare</Button>
        </LinkContainer>

        <LinkContainer to="/editnews">
            <Button>Redigera Nyheter</Button>
        </LinkContainer>

        <LinkContainer to="/addnews">
            <Button>Lägg Till Nyhet</Button>
        </LinkContainer>
    </ButtonGroup>
);

//Properties(props) that is attached to the component from its parent. This makes sure the properties(props) are the correct format
AdminPageButtons.propTypes = {
    renderPropp: PropTypes.func
};

export default AdminPageButtons;