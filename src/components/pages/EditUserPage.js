import React, { PropTypes } from 'react';
import UserList from './edituserpageComp/UserList.js';
import IndividualUser2 from './edituserpageComp/IndividualUser2.js';
import AddUserForm2 from './edituserpageComp/AddUserForm2.js';

class EditUserPage extends React.Component {

    /**
     * Class constructor
     */
    constructor(props) {
        super(props);

        //Set the initial component state
    }

    componentDidMount(){
        this.props.subscribeToUsers();
    }

    componentWillUnmount(){
        this.props.unsubscribeToUsers();
    }

    handleClickOnUser = (user) => {
        this.props.getUserToConf(user);
        this.props.renderComponent('RENDER_INDIVIDUALUSER');
        this.props.unrenderComponent('UNRENDER_USERLIST');
        this.props.unrenderComponent('UNRENDER_ADDUSERFORM');

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
        if(event.target.name === 'updateuser' && this.props.oldusername !== '') {
            this.props.updateUserInDB(this.props.user, this.props.oldusername);
        } else {
            this.props.addUserToDB(this.props.user)
        }
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
                    userPropp={this.props.user}
                    visiblePropp={this.props.editindividualuserC}
                />
                <AddUserForm2
                    onSubmitPropp={this.processForm}
                    handleTextInputPropp={this.handleTextInput}
                    handleCheckboxInputPropp={this.handleCheckboxInput}
                    handleSelectInputPropp={this.handleSelectInput}
                    userPropp={this.props.user}
                    visiblePropp={this.props.adduserformC}
                />
            </div>
        );

    }

}

export default EditUserPage;