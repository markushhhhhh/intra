import React from 'react';
import PropTypes from 'prop-types';
import UserList from './edituserpageComp/UserList.js';
import IndividualUser2 from './edituserpageComp/IndividualUser2.js';
import AddUserForm2 from './adduserpageComp/AddUserForm2.js';

import FileUploaderComp3 from './edituserpageComp/FileUploader3.js'

import {FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox, Col, Image, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Router = require('react-router');

class EditMyProfilePage extends React.Component {

    componentDidMount(){
        this.props.getUserToConf(this.props.activeuser)
    }

    handleTextInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.value;
        obj[field] = val;
        this.props.updateUserToConf(obj);
    };

    processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        //this.props.firebasePromise();
        console.log(event.target.name);
        this.props.updateUserInDB(this.props.user, this.props.activeuser.username);
        this.props.updateActiveUser(this.props.user);
        Router.browserHistory.push('/profile')
    };

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