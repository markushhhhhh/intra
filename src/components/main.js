'use strict';

import React from 'react';
import {Jumbotron, Grid, Button} from 'react-bootstrap';

import HeaderAdmin from './HeaderAdmin.js'
import Header from './Header';
import Footer from './Footer';
import LoginPageComponent from './pages/LoginPage.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {userLoginAction} from './../actions/loginActions.js'



class Main extends React.Component{


    render(){

        console.log(this.props.user, ' This is user from initalstate');
        if(this.props.user.activesession === true && this.props.user.admin === true){
            return(
            <div>
                Admin
                <HeaderAdmin/>
                <div>
                    <Jumbotron>
                        <Grid>
                            {/*<h1>Mando</h1>*/}
                            {/*<p>Innehåll bla bla bla bla bla bla bla bla bla</p>*/}
                            {/*<p><Button bsStyle='primary' bsSize='large'>Learn more »</Button></p>*/}
                            {this.props.children}
                        </Grid>
                    </Jumbotron>
                </div>

                <Footer/>
            </div>
        )} if(this.props.user.activesession === true && this.props.user.admin !== true) {
            return(
                <div>
                    Regular user
                    <Header/>
                    <div>
                        <Jumbotron>
                            <Grid>
                                <h1>Mando</h1>
                                <p>Innehåll bla bla bla bla bla bla bla bla bla</p>
                                <p><Button bsStyle='primary' bsSize='large'>Learn more »</Button></p>
                                {this.props.children}
                            </Grid>
                        </Jumbotron>
                    </div>

                    <Footer/>
                </div>
            )} if(this.props.user.activesession !== true){
            return(
                <div>
                    ej inloggad
                <LoginPageComponent userLoginActionPropp={userLoginAction}/>
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        userLoginAction: userLoginAction,
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);

