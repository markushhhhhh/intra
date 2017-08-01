'use strict';

import React from 'react';

//Imported Bootstrap components
import {ButtonGroup, Button} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';


//Creates the component
const ProfilePageButtons = () => (
    <ButtonGroup>
        <IndexLinkContainer to="/profile">
            <Button
            >Min Profil</Button>
        </IndexLinkContainer>
        <LinkContainer to="/myarticles">
            <Button>Mina Artiklar</Button>
        </LinkContainer>
    </ButtonGroup>
);

export default ProfilePageButtons;