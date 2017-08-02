'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Imports Bootstrap components
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

//Creates the ArticleListComponent, its parent is the component MyArticlePage.js
const ArticleList = ({
                         //Properties(props) that is attached to the component from its parent
                         usernamePropp,
                         newsarticlesPropp,
                         handleClickOnDeleteArticlePropp
                     }) => (
    <ListGroup>
        {    //traverses trough the array(newsArticlePropp) and returns multiple elements with the specific articledata that has been written by the current user.
            newsarticlesPropp.map((article, i) => (article.username === usernamePropp)?(
            <ListGroupItem className="articleItem"
                           key={i}
            >
                {article.headline}
                <Button
                    className="btn btn-danger btn-large centerButton newsListBtn"
                    onClick={() => handleClickOnDeleteArticlePropp(article.aid)}
                >Radera</Button>
            </ListGroupItem>):(null)
        )}
    </ListGroup>
);

//Checks if its properties("props") is the correct format
ArticleList.propTypes = {
    usernamePropp: PropTypes.string,
    newsarticlesPropp: PropTypes.array,
    handleClickOnDeleteArticlePropp: PropTypes.func
};

export default ArticleList;
