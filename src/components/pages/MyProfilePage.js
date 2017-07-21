import React from 'react';
import PropTypes from 'prop-types';
import UserList from './edituserpageComp/UserList.js';
import IndividualUser2 from './edituserpageComp/IndividualUser2.js';
import AddUserForm2 from './adduserpageComp/AddUserForm2.js';

class MyProfilePage extends React.Component {



    render() {
        return (<div>
                ProfilePage<br/>
                {this.props.activeuser.firstname}<br/>
                {this.props.activeuser.lastname}
            </div>
        );

    }

}

export default MyProfilePage;