import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import {renderAddUserPage, renderAddUserForm, renderComponent, unrenderComponent} from './../../actions/componentsActions.js'
import {addUserToDB, updateUserInDB, deleteUserFromDB, subscribeToUsers, unsubscribeToUsers, updateUserToConf, getUserToConf, resetUser, firebasePromise} from './../../actions/configureUserActions.js'
import {updateNotPostedArticle, addArticleToDB} from './../../actions/newsActions.js'

import AdminPageButtons from './adminpageComp/AdminPageButtons.js';
import NewsAdminPageButtons from './adminpageComp/NewsAdminPageButtons.js';


const Router = require('react-router');


class AdminPage extends React.Component {


    /*handleRendering(whatToRender){
        if(whatToRender === 'RENDER_USERLIST') {
            this.props.renderComponent('RENDER_USERLIST')
            this.props.unrenderComponent('UNRENDER_INDIVIDUALUSER')
        } else {
            this.props.renderComponent('RENDER_ADDUSERFORM')
            this.props.unrenderComponent('UNRENDER_INDIVIDUALUSER')
            this.props.unrenderComponent('UNRENDER_USERLIST')

        }
    }*/

    componentDidMount(){
        this.props.subscribeToUsers();
        this.props.unrenderComponent('UNRENDER_USERLIST');
        this.props.unrenderComponent('UNRENDER_INDIVIDUALUSER');
    }

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




function mapStateToProps(state){
    return{
        activeuser: state.activeuser,
        users: state.conf.users,
        user: state.conf.user,
        oldusername: state.conf.oldusername,
        adduserformC: state.components.admincomponents.adduserformC,
        userlistC: state.components.admincomponents.userlistC,
        editindividualuserC: state.components.admincomponents.editindividualuserC,
        notpostedarticle: state.news.notpostedarticle
    }
}

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
        updateNotPostedArticle: updateNotPostedArticle,
        addArticleToDB: addArticleToDB,
        firebasePromise: firebasePromise
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);