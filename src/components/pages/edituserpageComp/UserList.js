import React, {PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
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
    usersPropp: PropTypes.array.isRequired,
    handleClickOnUserPropp: PropTypes.func.isRequired,
    visiblePropp: PropTypes.bool.isRequired
};

/*
onTouchTap={() => handleClickOnUserPropp(user)}
*/

export default UserList;


