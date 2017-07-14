import React, { PropTypes } from 'react';

import {FormGroup, FormControl, ControlLabel, Col, Row, HelpBlock, Button} from 'react-bootstrap';


const AddNewsForm = ({
                        activeuserPropp
                     }) =>  (
    <form onSubmit={null} name="addnews">
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
            <FormControl type="text" placeholder="Titel..." />
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Text</ControlLabel>
            <FormControl
                componentClass="textarea"
                placeholder="Skriv här..."
                style={{height: '50%'}}
            />
        </FormGroup>
        <FormGroup controlId='formControlsFile'>
            <ControlLabel>Fil</ControlLabel>
            <FormControl type="file" />
            <HelpBlock>Ladda upp bild</HelpBlock>
        </FormGroup>

        <Button className="btn btn-primary btn-large centerButton" type="submit">Publicera</Button>

    </form> );

AddNewsForm.propTypes = {
    activeuserPropp: PropTypes.object.isRequired
};

export default AddNewsForm;