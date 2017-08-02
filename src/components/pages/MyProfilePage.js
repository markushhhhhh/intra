'use strict';

import React, {Component} from 'react';

//Imported Bootstrap components
import {Image, Col, Button, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//Creates the MyProfilePageComponent
//This component has the same properties(props) as ProfilePage, its parent
class MyProfilePage extends Component {

    render() {
        return (<Row>
                <Col xs={2} md={2} className="profilePageImgCol">
                    <Image src={this.props.activeuser.profileimgURL} circle responsive thumbnail/>
                </Col>
                {/*<Image src={this.props.activeuser.profileimgURL} responsive />*/}
                <Col className="profilePageInfo">
                    <p>{this.props.activeuser.firstname + ' ' + this.props.activeuser.lastname}<br/>
                {this.props.activeuser.email}<br/>
                        {this.props.activeuser.title + ' @ ' + this.props.activeuser.department}<br/></p>
                <LinkContainer to="/editprofile">
                    <Button
                        bsStyle="info"
                    >Redigera Min Profil</Button>
                </LinkContainer>
                </Col>
            </Row>
        );

    }

}

export default MyProfilePage;