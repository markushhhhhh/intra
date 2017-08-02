'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import {ButtonGroup, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//Creates the NewsAdminPageButtonsComponent
const NewsAdminPageButtons = ({
                                  //Properties(props) that is attached to the component from its parent
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

//Properties(props) that is attached to the component from its parent. This makes sure the properties(props) are the correct format
NewsAdminPageButtons.propTypes = {
    renderPropp: PropTypes.func
};

export default NewsAdminPageButtons;