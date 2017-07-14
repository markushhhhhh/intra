'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Grid, Button} from 'react-bootstrap';

import HeaderAdmin from './HeaderAdmin.js'
import Header from './Header.js';
import Footer from './Footer.js';
import LoginPage from './pages/LoginPage.js'


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {userLogin, userLogout, updateActiveUser} from './../actions/loginActions.js'



class Main extends React.Component{


    render(){

        console.log(this.props.activeuser, ' This is user from initalstate');
        if(this.props.activeuser.activesession === true && this.props.activeuser.admin === true && this.props.activeuser.newsadmin === true){
            return(
            <div>
                Admin
                <HeaderAdmin
                    userLogoutPropp={this.props.userLogout}
                />
                <div>
                    <Jumbotron>
                        <Grid>
                            {this.props.children}
                        </Grid>
                    </Jumbotron>
                </div>

                <Footer/>
            </div>
        )} if(this.props.activeuser.activesession === true && this.props.activeuser.admin !== true && this.props.activeuser.newsadmin === true){
            return(
                <div>
                    NewsAdmin
                    <HeaderAdmin
                        userLogoutPropp={this.props.userLogout}
                    />
                    <div>
                        <Jumbotron>
                            <Grid>
                                {this.props.children}
                            </Grid>
                        </Jumbotron>
                    </div>

                    <Footer/>
                </div>
            )
        } if(this.props.activeuser.activesession === true && this.props.activeuser.admin !== true) {
            return(
                <div>
                     Vanlig anv
                    <Header
                        userLogoutPropp={this.props.userLogout}
                    />

                    <div>
                        <Jumbotron>
                            <Grid>
                                {this.props.children}
                            </Grid>
                        </Jumbotron>
                    </div>

                    <Footer/>
                </div>
            )} if(this.props.activeuser.activesession !== true){
            return(
                <div>
                    ej inloggad
                <LoginPage
                    activeuserPropp={this.props.activeuser}
                    updateActiveUserPropp={this.props.updateActiveUser}
                    userLoginPropp={this.props.userLogin}
                />
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        activeuser: state.activeuser,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateActiveUser: updateActiveUser,
        userLogin: userLogin,
        userLogout: userLogout
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);

