import React from 'react';
import PropTypes from 'prop-types';
import AddNewsForm from './addnewspageComp/AddNewsForm.js';
import FileUploaderComp from './addnewspageComp/FileUploader.js';
import database from './../../database.js'

import {Button} from 'react-bootstrap';

import { ReactMde, ReactMdeCommands } from 'react-mde';

class AddNewsPage extends React.Component {


componentDidMount(){
    console.log(this.props.activeuser, ' ACTIVEUSER');
}

handleValueChange = (value) => {
    const article = {...this.props.notpostedarticle,
        text: value
    };
    this.props.updateNotPostedArticle(article)
}


handleTextInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.value;
        obj[field] = val;
        this.props.updateNotPostedArticle(obj);
    };



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