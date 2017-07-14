import React from 'react';
import PropTypes from 'prop-types';
import AddUserForm2 from './adduserpageComp/AddUserForm2.js';

class AddUserPage extends React.Component {

    /**
     * Class constructor
     */
    constructor(props) {
        super(props);

        //Set the initial component state
    }

    componentDidMount(){
        this.props.resetUser();
    }

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
            this.props.addUserToDB(this.props.user)
    };


    render() {
        return (<div>
                <AddUserForm2
                    onSubmitPropp={this.processForm}
                    handleTextInputPropp={this.handleTextInput}
                    handleCheckboxInputPropp={this.handleCheckboxInput}
                    handleSelectInputPropp={this.handleSelectInput}
                    userPropp={this.props.user}
                />
            </div>
        );

    }

}

export default AddUserPage;