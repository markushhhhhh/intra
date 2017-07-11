import React, { PropTypes } from 'react';
import UserList from './edituserpageComp/UserList.js';
import IndividualUser from './edituserpageComp/IndividualUser.js'

class EditUserPage extends React.Component {

    /**
     * Class constructor
     */
    constructor(props) {
        super(props);

        //Set the initial component state
    }

    componentDidMount(){
        this.props.renderComponent('RENDER_USERLIST');
        this.props.subscribeToUsers();
    }

    componentWillUnmount(){
        this.props.unsubscribeToUsers();
    }

    handleClickOnUser = (user) => {
        this.props.getUserToConf(user);
        this.props.unrenderComponent('UNRENDER_USERLIST');
        this.props.renderComponent('RENDER_INDIVIDUALUSER');
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
        let val = value;
        obj[field] = val;
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
        this.props.updateUserInDB(this.props.user, this.props.oldusername);
    };


    render() {
        return (<div>
                <UserList
                    usersPropp={this.props.users}
                    handleClickOnUserPropp={this.handleClickOnUser}
                    visiblePropp={this.props.userlistC}
                />
                <IndividualUser
                    onSubmitPropp={this.processForm}
                    handleTextInputPropp={this.handleTextInput}
                    handleCheckboxInputPropp={this.handleCheckboxInput}
                    handleSelectInputPropp={this.handleSelectInput}
                    userPropp={this.props.user}
                    visiblePropp={this.props.edituserC}
                />
            </div>
        );

    }

}

export default EditUserPage;