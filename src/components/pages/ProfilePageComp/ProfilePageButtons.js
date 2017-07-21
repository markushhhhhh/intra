import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';



const ProfilePageButtons = ({
                              //renderPropp
                          }) => (
    <ButtonGroup>
        <IndexLinkContainer to="/profile">
            <Button
                //onClick={() => renderPropp('RENDER_USERLIST')}
            >Min Profil</Button>
        </IndexLinkContainer>

        <LinkContainer to="/editprofile">
            <Button>Redigera Min Profil</Button>
        </LinkContainer>

        <LinkContainer to="/myarticles">
            <Button>Mina Artiklar</Button>
        </LinkContainer>
    </ButtonGroup>
);


//AdminPageButtons.propTypes = {
//    renderPropp: PropTypes.func.isRequired,
//};

export default ProfilePageButtons;