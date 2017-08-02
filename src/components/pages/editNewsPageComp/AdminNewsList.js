'use strict';

import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

//Creates the AdminNewsListComponent, its parent is EditNewsPageComponent
const AdminNewsList = ({
                           //Properties(props) that is attached to the component from its parent
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

//Properties(props) that is attached to the component from its parent. This makes sure the properties(props) are the correct format
AdminNewsList.propTypes = {
    newsPropp: PropTypes.array,
    handleClickOnDeleteArticlePropp: PropTypes.func,
};

export default AdminNewsList;
