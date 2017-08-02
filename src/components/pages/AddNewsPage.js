'use strict';

import React, {Component} from 'react';

//Imported components, also its children
import AddNewsForm from './addnewspageComp/AddNewsForm.js';
import FileUploaderComp from './addnewspageComp/FileUploader.js';

//Imported Bootstrap Components
import {Button} from 'react-bootstrap';

//imported to handle the markdown feature, makes it possible for the user to style the text in the article
import { ReactMde, ReactMdeCommands } from 'react-mde';

//Creates the Component AddNewsPageComponent, its children are AddNewsForm and FileUploaderComp
//AddNewsPageComponent has the same properties(props) as AdminPageComponent
class AddNewsPage extends Component {

    //Handles the text in the article and updates the initialsState with new text
    handleValueChange = (value) => {
        const article = {...this.props.notpostedarticle,
            text: value
        };
        this.props.updateNotPostedArticle(article)
    }

    //Handles the text input in the other text fields
    handleTextInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.value;
        obj[field] = val;
        this.props.updateNotPostedArticle(obj);
    };

    //When the submit button is pressed, the data from the form is fetched and sent to the database to add the new article in the database
    processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        //this.props.firebasePromise();
        console.log(event.target.name);

        const article = {...this.props.notpostedarticle,
            author: this.props.activeuser.firstname + ' ' + this.props.activeuser.lastname,
            department: this.props.activeuser.department,
            title: this.props.activeuser.title,
            username: this.props.activeuser.username
        };
        this.props.addArticleToDB(article)
    };

    onSubmitTest = (event) => {
        console.log('ON SUBMIT TEST !!');
    };

    //Handles the imageupload in AddNewsForm
    handleUploadSuccess = (filename) => {
        this.props.imgUpload(filename);
        //console.log(database.storage().ref('images'));
        //database.storage().ref('images').child(filename).getDownloadURL().then(url =>
        //this.props.updateNotPostedArticle({imgURL: url})
    };

    render() {
        let commands = ReactMdeCommands.getDefaultCommands();
        return (<div>
                <AddNewsForm
                    onSubmitPropp={this.processForm}
                    activeuserPropp={this.props.activeuser}
                    handleTextInputPropp={this.handleTextInput}
                    notpostedarticlePropp={this.props.notpostedarticle}
                    onSubmitTestPropp={this.onSubmitTest}
                    handleUploadSuccessPropp={this.handleUploadSuccess}
                />
                <div className="container">

                    <ReactMde
                        textareaId="ta1"
                        textareaName="ta1"
                        value={this.props.notpostedarticle.text}
                        onChange={this.handleValueChange}
                        commands={commands} />
                </div>
                här är bildlänken
                {this.props.notpostedarticle.imgURL}

                <FileUploaderComp
                    notpostedarticlePropp={this.props.notpostedarticle}
                    handleUploadSuccessPropp={this.handleUploadSuccess}
                    handleTextInputPropp={this.handleTextInput}
                />
                <Button className="btn btn-primary btn-large centerButton" onClick={this.processForm}>Publicera</Button>
            </div>
        );

    }

}

export default AddNewsPage;