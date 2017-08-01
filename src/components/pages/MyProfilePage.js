import React from 'react';

//Imported Bootstrap components
import {Image, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class MyProfilePage extends React.Component {

    render() {
        return (<div>
                ProfilePage<br/>
                <Col xs={2} md={2}>
                    <Image src={this.props.activeuser.profileimgURL} circle responsive/>
                </Col>
                {/*<Image src={this.props.activeuser.profileimgURL} responsive />*/}
                {this.props.activeuser.firstname}<br/>
                {this.props.activeuser.lastname}<br/>
                {this.props.activeuser.email}<br/>
                {this.props.activeuser.title + ' @ ' + this.props.activeuser.department}<br/>
                <LinkContainer to="/editprofile">
                    <Button>Redigera Min Profil</Button>
                </LinkContainer>
            </div>
        );

    }

}

export default MyProfilePage;