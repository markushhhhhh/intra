'use strict';

import React, {Component} from 'react';

import {connect} from 'react-redux'; //Imported to connect the initialstate to the component
import {bindActionCreators} from 'redux'; //Imported to connect the actions to the component

//Actions
import {renderAddUserPage, renderAddUserForm, renderComponent, unrenderComponent} from './../../actions/componentsActions.js'
import {addUserToDB, updateUserInDB, deleteUserFromDB, subscribeToUsers, unsubscribeToUsers, updateUserToConf, getUserToConf, resetUser, profileImgUpload} from './../../actions/configureUserActions.js'
import {updateNotPostedArticle, addArticleToDB, imgUpload, subscribeToNews, unsubscribeToNews, deleteArticle} from './../../actions/newsActions.js'

//Imports the page buttons
import AdminPageButtons from './adminpageComp/AdminPageButtons.js';
import NewsAdminPageButtons from './adminpageComp/NewsAdminPageButtons.js';


const Router = require('react-router');

//Creates the Component AdminPageComponent, its children are EditUserPageComponent, AddUserPageComponent, AddNewsPageComponent, EditNewsPageComponent
// and they have the same properties(props) as this component
class AdminPage extends Component {

    //Runs when this component renders
    componentDidMount(){
        //adds a listener in the database where the users information is stored. If someone adds additional user, it will update dynamically
        this.props.subscribeToUsers();
        //tells what components to show/render
        this.props.renderComponent('RENDER_USERLIST');
        this.props.unrenderComponent('UNRENDER_INDIVIDUALUSER');
    }

    //Switches of the listener when the component is closed
    componentWillUnmount(){
        this.props.unsubscribeToUsers();
    }

    handleRendering = (whatToRender) => {
        if(whatToRender === 'RENDER_USERLIST') {
            this.props.resetUser();
            this.props.renderComponent('RENDER_USERLIST');
            this.props.unrenderComponent('UNRENDER_INDIVIDUALUSER');

        }
    };

    render(){
        var childrenWithProps = React.cloneElement(this.props.children, {...this.props});
        if(this.props.activeuser.activesession === true && this.props.activeuser.admin === true && this.props.activeuser.newsadmin === true){
            return (
                <div>
                    <h1>SuperAdminPage!</h1>
                    <AdminPageButtons
                        renderPropp={this.handleRendering}
                    />
                    {childrenWithProps}
                </div>
            )} if(this.props.activeuser.activesession === true && this.props.activeuser.admin !== true && this.props.activeuser.newsadmin === true) {
            return(
                <div>
                    <h1>NewsAdminPage!</h1>
                    <NewsAdminPageButtons
                        renderPropp={this.handleRendering}
                    />
                    {childrenWithProps}
                </div>
            )}
    }
}

//Data fetched from the initialState and connected to the component. Can for example be reached from this.props.activeuser
function mapStateToProps(state){
    return{
        activeuser: state.activeuser,
        users: state.conf.users,
        user: state.conf.user,
        oldusername: state.conf.oldusername,
        adduserformC: state.components.admincomponents.adduserformC,
        userlistC: state.components.admincomponents.userlistC,
        editindividualuserC: state.components.admincomponents.editindividualuserC,
        notpostedarticle: state.news.notpostedarticle,
        newsarticles: state.news.newsarticles,
        article: state.news.article
    }
}

//Actions fetched from the action files and connected to the component. Can for example be reached from this.props.updateActiveUser
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        renderAddUserPage: renderAddUserPage,
        renderAddUserForm: renderAddUserForm,
        renderComponent: renderComponent,
        unrenderComponent: unrenderComponent,
        addUserToDB: addUserToDB,               //configureUserActions
        updateUserInDB: updateUserInDB,         //configureUserActions
        deleteUserFromDB: deleteUserFromDB,
        getUserToConf: getUserToConf,           //configureUserActions
        updateUserToConf: updateUserToConf,     //configureUserActions
        resetUser: resetUser,                   //configureUserActions
        subscribeToUsers: subscribeToUsers,     //configureUserActions
        unsubscribeToUsers: unsubscribeToUsers, //configureUserActions
        profileImgUpload: profileImgUpload,
        updateNotPostedArticle: updateNotPostedArticle,
        addArticleToDB: addArticleToDB,
        imgUpload: imgUpload,
        subscribeToNews: subscribeToNews,
        unsubscribeToNews: unsubscribeToNews,
        deleteArticle: deleteArticle
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);