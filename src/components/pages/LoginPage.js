import React, { PropTypes } from 'react';

import LoginForm from './loginpageComp/LoginForm.js'

class LoginPage extends React.Component {


    handleTextInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.value;
        obj[field] = val;
        this.props.updateActiveUserPropp(obj);
    };

    processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
         event.preventDefault();
        // console.log(event.target.name);
         this.props.userLoginPropp(this.props.activeuserPropp);
        console.log('i processForm');
    };

    render() {
        return (<div>
                <LoginForm
                    onSubmitPropp={this.processForm}
                    handleTextInputPropp={this.handleTextInput}
                    activeuserPropp={this.props.activeuserPropp}
                />
            </div>
        );

    }

}

LoginPage.propTypes = {
    updateActiveUserPropp: PropTypes.func.isRequired,
    activeuserPropp: PropTypes.object.isRequired,
    userLoginPropp: PropTypes.func.isRequired
};




export default LoginPage;

