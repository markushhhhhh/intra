import React, {PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


const UserList = ({
                      usersPropp,
                      handleClickOnUserPropp,
                     visiblePropp
                  }) => (visiblePropp === true) ? (
    <List>
        {usersPropp.map((user, i) => <ListItem
                key={i}
                primaryText={user.firstname + ' ' + user.lastname}
                secondaryText={user.username}
                insetChildren={true}
                onTouchTap={() => handleClickOnUserPropp(user)}
            />
        )}
    </List>
) : null;

UserList.propTypes = {
    usersPropp: PropTypes.array.isRequired,
    handleClickOnUserPropp: PropTypes.func.isRequired,
    visiblePropp: PropTypes.bool.isRequired
};

export default UserList;


