'use strict';

import React, {Component} from 'react';

import {connect} from 'react-redux'; //Imported to connect the initialstate to the component
import {bindActionCreators} from 'redux'; //Imported to connect the actions to the component

//Imported actions
import {updateUserToConf, getUserToConf, updateUserInDB, profileImgUpload} from './../../actions/configureUserActions.js'
import {updateActiveUser} from './../../actions/loginActions.js'
import {subscribeToNews, unsubscribeToNews, deleteArticle} from './../../actions/newsActions.js'

//The diffrent buttons on the profilepage
import ProfilePageButtons from './ProfilePageComp/ProfilePageButtons.js'

//Creates the ProfilePageComponent
//Its children are ProfilePageButtons, MyProfilePageComponent, EditMyProfilePageComponent, MyArticlesPageComponent
class ProfilePage extends Component {

    //Function that executes everytime this component have been rendered
    componentDidMount(){
        //Adds listeners to the database and updates the initialState
        this.props.subscribeToNews();
    }

    //Function that executes everytime this component is unrendered
    componentWillUnmount(){
        //Turns off the listener in the database
        this.props.unsubscribeToNews();
    }

    render(){

        var childrenWithProps = React.cloneElement(this.props.children, {...this.props}); //Connects all children to this component with the same properties as this component has.
        // for example can the children to this component also use this.props.activeuser to access the data in activeuser that resides in the initialState
        return(
            <div>
                <ProfilePageButtons />
                {childrenWithProps}
            </div>
        )
    }
}

//Data fetched from the initialState and connected to the component. Can for example be reached from this.props.activeuser
function mapStateToProps(state){
    return{
        activeuser: state.activeuser,
        user: state.conf.user,
        newsarticles: state.news.newsarticles
    }
}

//Actions fetched from the action files and connected to the component. Can for example be reached from this.props.deleteArticle
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUserToConf: getUserToConf,
        updateUserToConf: updateUserToConf,
        updateUserInDB: updateUserInDB,
        updateActiveUser: updateActiveUser,
        profileImgUpload: profileImgUpload,
        subscribeToNews: subscribeToNews,
        unsubscribeToNews: unsubscribeToNews,
        deleteArticle: deleteArticle
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);