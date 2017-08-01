'use strict';

import React from 'react';
import {Jumbotron, Grid} from 'react-bootstrap'; //Imported Bootstrap components

import HeaderAdmin from './HeaderAdmin.js'
import Header from './Header.js';
//import Footer from './Footer.js';
import LoginPage from './pages/LoginPage.js'


import {connect} from 'react-redux'; //Imported to connect the initialstate to the component
import {bindActionCreators} from 'redux'; //Imported to connect the actions to the component

//Imported actions
import {userLogin, userLogout, updateActiveUser} from './../actions/loginActions.js'


//Creates the Main component
//Its children are all components except app.js
class Main extends React.Component{


    render(){

        //Renders if the active user is logged in and also a superadmin(newsadmin & admin)
        if(this.props.activeuser.activesession === true && this.props.activeuser.admin === true && this.props.activeuser.newsadmin === true){
            return(
                <div>
                    <HeaderAdmin
                        userLogoutPropp={this.props.userLogout}
                    />
                    <div>{/*Everything below the navbar*/}
                        <Jumbotron  className="Jumbo1">
                            <Grid>
                                {this.props.children} {/*this is the place that all the childroutes are rendered*/}
                            </Grid>
                        </Jumbotron>
                    </div>
                    {/*<Footer/>*/}
                </div>
            )}
        //Renders if the active user is logged in and also a newsadmin(only newsadmin)
        if(this.props.activeuser.activesession === true && this.props.activeuser.admin !== true && this.props.activeuser.newsadmin === true){
            return(
                <div>
                    <HeaderAdmin
                        userLogoutPropp={this.props.userLogout}
                    />
                    <div>{/*Everything below the navbar*/}
                        <Jumbotron className="Jumbo1">
                            <Grid>
                                {this.props.children} {/*this is the place that all the childroutes are rendered*/}
                            </Grid>
                        </Jumbotron>
                    </div>
                    {/*<Footer/>*/}
                </div>
            )
        }
        //Renders if the active user is logged in but not a newsadmin or a superadmin
        if(this.props.activeuser.activesession === true && this.props.activeuser.admin !== true) {
            return(
                <div>
                    <Header
                        userLogoutPropp={this.props.userLogout}
                    />
                    <div>{/*Everything below the navbar*/}
                        <Jumbotron>
                            <Grid>
                                {this.props.children} {/*this is the place that all the childroutes are rendered*/}
                            </Grid>
                        </Jumbotron>
                    </div>
                    {/*<Footer/>*/}
                </div>
            )}
        //Renders if the active user is not logged in
        if(this.props.activeuser.activesession !== true){
            return(
                <div>
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

//Data fetched from the initialState and connected to the component. Can for example be reached from this.props.activeuser
function mapStateToProps(state){
    return{
        activeuser: state.activeuser,
    }
}

//Actions fetched from the action files and connected to the component. Can for example be reached from this.props.updateActiveUser
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateActiveUser: updateActiveUser,
        userLogin: userLogin,
        userLogout: userLogout
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);

