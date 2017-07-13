import React, { PropTypes } from 'react';

import {Form, Row, Col, FormGroup, ControlLabel, FormControl, Button, Checkbox} from 'react-bootstrap';



const LoginForm = ({
                      onSubmitPropp,
                      handleTextInputPropp,
                      activeuserPropp
                   }) => (
    <div>
        <Row>
            <Col sm={5} smOffset={5}>
<img id='loginlogo' src="img/mandometer_logo2.png" />
            </Col>
        </Row>
    <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={4}>
                Användarnamn
            </Col>
            <Col sm={4}>
                <FormControl
                    type="text"
                    placeholder="Ange Användarnamn"
                    value={activeuserPropp.username}
                    onChange={handleTextInputPropp}
                    name="username"
                />
            </Col>
            <Col sm={4}>
            </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={4}>
                Lösenord
            </Col>
            <Col sm={4}>
                <FormControl
                    type="password"
                    placeholder="Ange Lösenord"
                    value={activeuserPropp.password}
                    onChange={handleTextInputPropp}
                    name="password"
                />
            </Col>
            <Col sm={4}>
            </Col>
        </FormGroup>

        <FormGroup>
            <Col smOffset={4} sm={10}>
                <Button
                    className="btn btn-primary btn-large centerButton"
                    onClick={onSubmitPropp}
                >
                    Logga In
                </Button>
            </Col>
        </FormGroup>
    </Form>
    </div>
);

LoginForm.propTypes = {
    onSubmitPropp: PropTypes.func.isRequired,
    handleTextInputPropp: PropTypes.func.isRequired,
    activeuserPropp: PropTypes.object.isRequired
};

export default LoginForm;