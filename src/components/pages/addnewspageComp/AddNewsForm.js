'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import { FormControl, ControlLabel, Col, Row } from 'react-bootstrap';


//Creates the AddNewsFormComponent, its parent is AddNewsPageComponent
const AddNewsForm = ({
                         //Properties that is attached to the component from its parent
                         onSubmitPropp,
                         activeuserPropp,
                         handleTextInputPropp,
                         notpostedarticlePropp,
                         onSubmitTestPropp,
                         handleUploadSuccessPropp
                     }) =>  (
    <div>
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
        <FormControl
            type="text"
            placeholder="Titel..."
            name="headline"
            value={notpostedarticlePropp.headline}
            onChange={handleTextInputPropp}
        />

    </div> );

//Properties that is attached to the component from its parent. This makes sure the properties are the correct format
AddNewsForm.propTypes = {
    onSubmitPropp: PropTypes.func,
    activeuserPropp: PropTypes.object,
    handleTextInputPropp: PropTypes.func,
    notpostedarticlePropp: PropTypes.object,
    onSubmitTestPropp: PropTypes.func,
    handleUploadSuccessPropp: PropTypes.func
};

export default AddNewsForm;