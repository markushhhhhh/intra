import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';



const AdminPageButtons = ({
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


AdminPageButtons.propTypes = {
    renderPropp: PropTypes.func.isRequired,
};

export default AdminPageButtons;