import React from 'react';
import PropTypes from 'prop-types';
import UserList from './edituserpageComp/UserList.js';
import IndividualUser2 from './edituserpageComp/IndividualUser2.js';
import AddUserForm2 from './adduserpageComp/AddUserForm2.js';

class EditUserPage extends React.Component {

    /**
     * Class constructor
     */
    constructor(props) {
        super(props);

        //Set the initial component state
    }



    handleClickOnUser = (user) => {
        this.props.getUserToConf(user);
        this.props.renderComponent('RENDER_INDIVIDUALUSER');
        this.props.unrenderComponent('UNRENDER_USERLIST');
    };

    handleTextInput = (event) => {
        let obj = {};
         let field = event.target.name;
         let val = event.target.value;
         obj[field] = val;
         this.props.updateUserToConf(obj);
    };


    handleSelectInput = (event, index, value)  => {
        let obj = {};
        let field = 'department';
        let val = event.target.value;
        console.log(val);
        obj[field] = val;
        console.log(obj, ' här är objektet');
        this.props.updateUserToConf(obj);
    };

    handleCheckboxInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.checked;
        obj[field] = val;
        this.props.updateUserToConf(obj);
    };

    processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        //this.props.firebasePromise();
        console.log(event.target.name);
        this.props.updateUserInDB(this.props.user, this.props.oldusername);

    };

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