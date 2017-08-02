'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//imported Bootstrap components
import {Form, Row, Col, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';


//Creates the LoginFormComponent, its parent is Main
const LoginForm = ({
                       //Properties(props) that is attached to the component from its parent
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
        <Form horizontal onSubmit={onSubmitPropp} name="'login">
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
                        type="submit"

                    >
                        Logga In
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    </div>

);

//Properties(props) that is attached to the component from its parent. This makes sure the properties(props) are the correct format
LoginForm.propTypes = {
    onSubmitPropp: PropTypes.func,
    handleTextInputPropp: PropTypes.func,
    activeuserPropp: PropTypes.object
};

export default LoginForm;