'use strict';

import React, {Component} from 'react';

import ArticleList from './myarticlespageComp/ArticleList.js'; //Imports its child ArticleList

//This component has the same properties("props") as ProfilePage.js
//Creates the MyArticlesPageComponent
class MyArticlesPage extends Component {

    //Handles a click on delete in ArticleList, it deletes the article
    handleClickOnDeleteArticle = (aid) => {
        this.props.deleteArticle(aid);
    };

    render() {
        return (
            <div>
                Mina Artiklar
                <ArticleList
                    usernamePropp={this.props.activeuser.username}
                    newsarticlesPropp={this.props.newsarticles}
                    handleClickOnDeleteArticlePropp={this.handleClickOnDeleteArticle}
                />
            </div>
        );
    }
}

export default MyArticlesPage;