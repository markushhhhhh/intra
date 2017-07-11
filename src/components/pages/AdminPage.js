import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Actions
import {renderAddUserPage, renderAddUserForm, renderComponent, unrenderComponent} from './../../actions/componentsActions.js'
import {addUserToDB, updateUserInDB, subscribeToUsers, unsubscribeToUsers, updateUserToConf,getUserToConf} from './../../actions/configureUserActions.js'

import AdminPageButtons from './adminpageComp/AdminPageButtons.js';
import AdminPageButtons2 from './adminpageComp/AdminPageButtons2.js';

import AddUserPage from './AddUserPage.js';


class AdminPage extends React.Component {


    handleRendering(whatToRender){
        if(whatToRender === 'RENDER_USERLIST') {
            this.props.renderComponent('RENDER_USERLIST')
            this.props.unrenderComponent('UNRENDER_INDIVIDUALUSER')
        } else {
            this.props.renderComponent('RENDER_ADDUSERFORM')
            this.props.unrenderComponent('UNRENDER_INDIVIDUALUSER')
            this.props.unrenderComponent('UNRENDER_USERLIST')

        }
    }

    render(){
        var childrenWithProps = React.cloneElement(this.props.children, {...this.props});

        return (
            <div>
                <h1>AdminPage!</h1>
                <AdminPageButtons2 />
                {childrenWithProps}
                {/*<AdminPageButtons*/}
                    {/*renderAddUserPagePropp={this.props.renderAddUserPage}*/}
                    {/*renderAddUserFormPropp={this.props.renderAddUserForm}*/}
                    {/*renderComponentPropp={this.props.renderComponent}*/}
                    {/*unrenderComponentPropp={this.props.unrenderComponent}*/}
                    {/*renderPropp={this.handleRendering.bind(this)}*/}
                {/*/>*/}




            </div>
        )
    }
}




function mapStateToProps(state){
    return{
        adduserpage: state.components.adduserpage,
        users: state.conf.users,
        user: state.conf.user,
        oldusername: state.conf.oldusername,
        adduserformC: state.components.adduserformC,
        userlistC: state.components.userlistC,
        edituserC: state.components.edituserC,
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
        getUserToConf: getUserToConf,           //configureUserActions
        updateUserToConf: updateUserToConf,     //configureUserActions
        subscribeToUsers: subscribeToUsers,     //configureUserActions
        unsubscribeToUsers: unsubscribeToUsers, //configureUserActions
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);