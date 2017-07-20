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
                <FormControl.Static>
                    <ControlLabel>Författare</ControlLabel><br/>
                    {activeuserPropp.firstname + ' ' + activeuserPropp.lastname}
                </FormControl.Static>
            </Col>
            <Col md={4}>
                <FormControl.Static>
                    <ControlLabel>Avdelning</ControlLabel><br/>
                    {activeuserPropp.department}
                </FormControl.Static>
            </Col>
            <Col md={4}>
                <FormControl.Static>
                    <ControlLabel>Befattning</ControlLabel><br/>
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