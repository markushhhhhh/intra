'use strict';

import React, {Component} from 'react';

//Imports the component used to upload images
import FileUploaderComp3 from './edituserpageComp/FileUploader3.js'

//Imports Bootstrap components
import { ControlLabel, FormControl, Button, Col, Image, Row} from 'react-bootstrap';

const Router = require('react-router');

//Creates the EditMyProfilePageComponent
//This component has the same properties(props) as ProfilePage.js, its parent
class EditMyProfilePage extends Component {

    //Everytime the component renders this function runs and fetches the activeuser data
    componentDidMount(){
        this.props.getUserToConf(this.props.activeuser)
    }

    //Handles the inputs in the form
    handleTextInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.value;
        obj[field] = val;
        this.props.updateUserToConf(obj);
    };

    //When the update button is pressed, the data from the form is fetched and sent to the database to update the current user in the database
    processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        //this.props.firebasePromise();
        console.log(event.target.name);
        this.props.updateUserInDB(this.props.user, this.props.activeuser.username);
        this.props.updateActiveUser(this.props.user);
        Router.browserHistory.push('/profile')
    };

    //Handles the upload of the image and adds it to the database
    handleUploadSuccess = (filename) => {
        //this.props.imgUpload(filename);
        this.props.profileImgUpload(filename);
        //console.log(database.storage().ref('images'));
        //database.storage().ref('images').child(filename).getDownloadURL().then(url =>
        //this.props.updateNotPostedArticle({imgURL: url})
    };

    render() {
        return (<div>
                Editera ProfilePage<br/>
                <Row>
                <Col xs={2} md={2}>
                    <Image src={this.props.user.profileimgURL} circle responsive/>
                </Col>
                </Row>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    type="email"
                    placeholder="Ange Email"
                    name="email"
                    value={this.props.user.email}
                    onChange={this.handleTextInput}
                /><br/>

                <ControlLabel>Lösenord</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Ange Lösenord"
                    name="password"
                    value={this.props.user.password}
                    onChange={this.handleTextInput}
                /><br/>

                <FileUploaderComp3
                    handleUploadSuccessPropp={this.handleUploadSuccess}
                />

                <Button
                    className="btn btn-primary btn-large centerButton"
                    onClick={this.processForm}
                >Uppdatera</Button>



            </div>
        );

    }

}

export default EditMyProfilePage;