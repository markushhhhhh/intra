import React, { PropTypes } from 'react';
import AddUserForm from './adduserpageComp/AddUserForm.js';

class AddUserPage extends React.Component {

    /**
     * Class constructor
     */
    constructor(props) {
        super(props);

        //Set the initial component state
        this.state = {
            errors: {},
            user: {
                username: '',
                firstname: '',
                lastname: '',
                title: '',
                department: '',
                email: '',
                password: '',
                admin: false,
                newsadmin: false
            }
        };
        this.processForm = this.processForm.bind(this);
        this.handleCheckboxInput = this.handleCheckboxInput.bind(this);
        this.handleSelectInput = this.handleSelectInput.bind(this);

    }


    handleTextInput = (event) => {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        });
    };

    handleSelectInput = (event, index, value)  => {
        const field = 'department';
        const user = this.state.user;
        user[field] = value;
        this.setState({
            user
        });
    };


    handleCheckboxInput(event){
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.checked;
        this.setState({
            user
        });
    }


    processForm(event) {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        this.props.addUserToDB(this.state.user);
    }


    render() {
        return (
            <AddUserForm
                onSubmitPropp={this.processForm}
                handleTextInputPropp={this.handleTextInput}
                handleCheckboxInputPropp={this.handleCheckboxInput}
                handleSelectInputPropp={this.handleSelectInput}
                errorsPropp={this.state.errors}
                userPropp={this.state.user}
                visiblePropp={this.props.adduserformC}
            />
        );

    }

}

export default AddUserPage;