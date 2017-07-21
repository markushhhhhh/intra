import React from 'react';
import PropTypes from 'prop-types';

import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';


const AdminNewsList = ({
                           newsPropp,
                           handleClickOnDeleteArticlePropp
                  }) => (
    <ListGroup>
        {newsPropp.map((article, i) => <ListGroupItem
                key={i}
                header={article.headline}
            >
            {article.author}<br/>
            {article.date}
            <Button
                className="btn btn-danger btn-large centerButton newsListBtn"
                onClick={() => handleClickOnDeleteArticlePropp(article.aid)}
            >Radera</Button>
            </ListGroupItem>
        )}
    </ListGroup>
);

AdminNewsList.propTypes = {
    newsPropp: PropTypes.array,
    handleClickOnDeleteArticlePropp: PropTypes.func,
};



export default AdminNewsList;
