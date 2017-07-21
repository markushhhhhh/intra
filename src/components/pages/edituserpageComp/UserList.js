import React from 'react';
import PropTypes from 'prop-types';

import {ListGroup, ListGroupItem} from 'react-bootstrap';


const UserList = ({
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

UserList.propTypes = {
    usersPropp: PropTypes.array,
    handleClickOnUserPropp: PropTypes.func,
    visiblePropp: PropTypes.bool
};



export default UserList;


