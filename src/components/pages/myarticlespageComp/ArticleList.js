import React from 'react';
import PropTypes from 'prop-types';

import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';


const ArticleList = ({
                         usernamePropp,
                         newsarticlesPropp,
                         handleClickOnDeleteArticlePropp
                     }) => (
    <ListGroup>
        {newsarticlesPropp.map((article, i) => (article.username === usernamePropp)?(
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

ArticleList.propTypes = {
    usernamePropp: PropTypes.string,
    newsarticlesPropp: PropTypes.array,
    handleClickOnDeleteArticlePropp: PropTypes.func
};

export default ArticleList;
