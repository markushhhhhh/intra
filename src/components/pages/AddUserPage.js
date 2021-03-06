'use strict';

import React, {Component} from 'react';

//Imported components, also its children
import AddUserForm2 from './adduserpageComp/AddUserForm2.js';
import FileUploaderComp2 from './adduserpageComp/FileUploader2.js';

//Imported Bootstrap Components
import { Button } from 'react-bootstrap';

//Creates the Component AddUserPageComponent, its children are AddUserForm2 and FileUploader2
//AddUserPageComponent has the same properties(props) as AdminPageComponent
class AddUserPage extends Component {
    constructor(props) {
        super(props);
    }

    //Funcction that runs everytime the component has rendered
    componentDidMount(){
        this.props.resetUser();
    }

    //Handles the text input in the AddUserForm
    handleTextInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.value;
        obj[field] = val;
        this.props.updateUserToConf(obj);
    };

    //Handles the selection of department in the AddUserForm
    handleSelectInput = (event, index, value)  => {
        let obj = {};
        let field = 'department';
        let val = event.target.value;
        console.log(val);
        obj[field] = val;
        console.log(obj, ' här är objektet');
        this.props.updateUserToConf(obj);
    };

    //handles the checkbox input, admin newsadmin, in the AddUserForm
    handleCheckboxInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.checked;
        obj[field] = val;
        this.props.updateUserToConf(obj);
    };

    //When the submit button is pressed, the data from the form is fetched and sent to the database to add the new user in the database
    processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        console.log(event.target.name);
        this.props.addUserToDB(this.props.user)
    };

    //Handles the imageupload in FileUploaderComp
    handleUploadSuccess = (filename) => {
        //this.props.imgUpload(filename);
        this.props.profileImgUpload(filename);
        //console.log(database.storage().ref('images'));
        //database.storage().ref('images').child(filename).getDownloadURL().then(url =>
        //this.props.updateNotPostedArticle({imgURL: url})
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
                <FileUploaderComp2
                    userPropp={this.props.user}
                    handleUploadSuccessPropp={this.handleUploadSuccess}
                    handleTextInputPropp={this.handleTextInput}
                />
                <Button className="btn btn-primary btn-large centerButton" onClick={this.processForm}>Skapa Ny Användare</Button>
            </div>
        );
    }
}

export default AddUserPage;