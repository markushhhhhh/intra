import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



const NewsAdminPageButtons = ({
                              renderPropp
                           }) => (
    <ButtonGroup>
        <LinkContainer to="/editnews">
            <Button>Redigera Nyheter</Button>
        </LinkContainer>

        <LinkContainer to="/addnews">
            <Button>Lägg Till Nyhet</Button>
        </LinkContainer>
    </ButtonGroup>
);


NewsAdminPageButtons.propTypes = {
    renderPropp: PropTypes.func.isRequired,
};

export default NewsAdminPageButtons;