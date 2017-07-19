import React from 'react';
import PropTypes from 'prop-types';

import {FormGroup, FormControl, ControlLabel, Col, Row, HelpBlock, Button} from 'react-bootstrap';

import FileUploader from 'react-firebase-file-uploader';

import database from './../../../database.js'


const AddNewsForm = ({
                         onSubmitPropp,
                         activeuserPropp,
                         handleTextInputPropp,
                        notpostedarticlePropp,
                        onSubmitTestPropp,
                        handleUploadSuccessPropp
                     }) =>  (
    <form>
        <Row>
            <Col md={4}>
                <ControlLabel>Författare</ControlLabel>
                <FormControl.Static>
                    {activeuserPropp.firstname + ' ' + activeuserPropp.lastname}
                </FormControl.Static>
            </Col>
            <Col md={4}>
                <ControlLabel>Avdelning</ControlLabel>
                <FormControl.Static>
                    {activeuserPropp.department}
                </FormControl.Static>
            </Col>
            <Col md={4}>
                <ControlLabel>Befattning</ControlLabel>
                <FormControl.Static>
                    {activeuserPropp.title}
                </FormControl.Static>
            </Col>
        </Row>
        <ControlLabel>Rubriktitel</ControlLabel>
        <FormGroup bsSize="large">
            <FormControl
                type="text"
                placeholder="Titel..."
                name="headline"
                value={notpostedarticlePropp.headline}
                onChange={handleTextInputPropp}
            />
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Text</ControlLabel>
            <FormControl
                componentClass="textarea"
                placeholder="Skriv här..."
                style={{height: '50%'}}
                name="text"
                value={notpostedarticlePropp.text}
                onChange={handleTextInputPropp}
            />
        </FormGroup>
        <ControlLabel>Bildtext</ControlLabel>
        <FormControl
            type="text"
            placeholder="Bildtext..."
            name="imgheadline"
            value={notpostedarticlePropp.imgheadline}
            onChange={handleTextInputPropp}
        />
        <FileUploader
        accept="image/*"
        name="avatar"
        storageRef={database.storage().ref('images')}
        onUploadSuccess={handleUploadSuccessPropp}
        />
        <img src={notpostedarticlePropp.imgURL}/>

        <Button className="btn btn-primary btn-large centerButton" onClick={onSubmitPropp}>Publicera</Button>

    </form> );

AddNewsForm.propTypes = {
    onSubmitPropp: PropTypes.func,
    activeuserPropp: PropTypes.object,
    handleTextInputPropp: PropTypes.func,
    notpostedarticlePropp: PropTypes.object,
    onSubmitTestPropp: PropTypes.func,
    handleUploadSuccessPropp: PropTypes.func
};

export default AddNewsForm;