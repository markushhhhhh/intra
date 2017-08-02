'use strict';

import React, {Component} from 'react';

import UserList from './edituserpageComp/UserList.js';
import IndividualUser2 from './edituserpageComp/IndividualUser2.js';

//Creates the Component EditUserPageComponent, its children are IndividuaUser2 and UserList
//EditUserPageComponent has the same properties(props) as AdminPageComponent
class EditUserPage extends Component {

    //Handle the click on a specific user and fetches the data associated with that user
    handleClickOnUser = (user) => {
        this.props.getUserToConf(user);
        this.props.renderComponent('RENDER_INDIVIDUALUSER');
        this.props.unrenderComponent('UNRENDER_USERLIST');
    };

    //Handles the text input in the form in IndividualUser2
    handleTextInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.value;
        obj[field] = val;
        this.props.updateUserToConf(obj);
    };

    //Handles the selection of department and updates the initialState
    handleSelectInput = (event, index, value)  => {
        let obj = {};
        let field = 'department';
        let val = event.target.value;
        console.log(val);
        obj[field] = val;
        console.log(obj, ' här är objektet');
        this.props.updateUserToConf(obj);
    };

    //handles the checkbox input, admin newsadmin
    handleCheckboxInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.checked;
        obj[field] = val;
        this.props.updateUserToConf(obj);
    };

    //When the submit button is pressed, the data from the form is fetched and sent to the database to update the selected user in the database
    processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        console.log(event.target.name);
        this.props.updateUserInDB(this.props.user, this.props.oldusername);
        this.props.unrenderComponent('UNRENDER_INDIVIDUALUSER');
        this.props.renderComponent('RENDER_USERLIST');

    };

    //handles the deletion of the selected user
    handleDelete = () => {
        this.props.deleteUserFromDB(this.props.oldusername);
    };

    render() {
        return (<div>
                <UserList
                    usersPropp={this.props.users}
                    handleClickOnUserPropp={this.handleClickOnUser}
                    visiblePropp={this.props.userlistC}
                />
                <IndividualUser2
                    onSubmitPropp={this.processForm}
                    handleTextInputPropp={this.handleTextInput}
                    handleCheckboxInputPropp={this.handleCheckboxInput}
                    handleSelectInputPropp={this.handleSelectInput}
                    handleDeletePropp={this.handleDelete}
                    userPropp={this.props.user}
                    oldusernamePropp={this.props.oldusername}
                    visiblePropp={this.props.editindividualuserC}
                />
            </div>
        );
    }
}

export default EditUserPage;