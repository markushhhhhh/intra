import React from 'react';
import ArticleList from './myarticlespageComp/ArticleList.js'

class MyArticlesPage extends React.Component {

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