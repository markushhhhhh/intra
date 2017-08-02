'use strict'

import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import {ListGroup, ListGroupItem} from 'react-bootstrap';

//Creates the UserListComponent, its parent is EditUserPageComponent
const UserList = ({
                      //Properties that is attached to the component from its parent
                      usersPropp,
                      handleClickOnUserPropp,
                      visiblePropp
                  }) => (visiblePropp === true) ? (
    <ListGroup>
        {usersPropp.map((user, i) => <ListGroupItem
                key={i}
                header={user.firstname + ' ' + user.lastname}
                onClick={() => handleClickOnUserPropp(user)}
            >
                {user.username}
            </ListGroupItem>
        )}
    </ListGroup>
) : null;

//Properties that is attached to the component from its parent. This makes sure its the correct format
UserList.propTypes = {
    usersPropp: PropTypes.array,
    handleClickOnUserPropp: PropTypes.func,
    visiblePropp: PropTypes.bool
};

export default UserList;


