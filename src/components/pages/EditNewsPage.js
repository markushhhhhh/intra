'use strict';

import React, {Component} from 'react';

//Imported components, also its children
import AdminNewsList from './editNewsPageComp/AdminNewsList.js'

//Creates the Component EditNewsPageComponent, its children are AdminNewsListComponent
//EditNewsPageComponent has the same properties(props) as AdminPageComponent
class EditNewsPage extends Component {


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

    //Handles the delete-click on an article and deletes it from the database
    handleClickOnDeleteArticle = (aid) => {
        this.props.deleteArticle(aid);
    };


    render() {
        return (<div>
                <AdminNewsList
                    newsPropp={this.props.newsarticles}
                    handleClickOnDeleteArticlePropp={this.handleClickOnDeleteArticle}
                />
            </div>
        );

    }

}

export default EditNewsPage;