import React from 'react';
import PropTypes from 'prop-types';
import UserList from './edituserpageComp/UserList.js';
import IndividualUser2 from './edituserpageComp/IndividualUser2.js';
import AddUserForm2 from './adduserpageComp/AddUserForm2.js';

class EditMyProfilePage extends React.Component {



    render() {
        return (<div>
                Editera ProfilePage<br/>
                {this.props.activeuser.firstname}<br/>
                {this.props.activeuser.lastname}
            </div>
        );

    }

}

export default EditMyProfilePage;