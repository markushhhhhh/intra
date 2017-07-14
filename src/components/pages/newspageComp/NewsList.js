import React from 'react';
import PropTypes from 'prop-types';

import {ListGroup, ListGroupItem} from 'react-bootstrap';


const NewsList = ({
                      articlesPropp,
                      visiblePropp
                  }) => (visiblePropp === true) ? (
    <ListGroup>
        {articlesPropp.map((article, i) => <ListGroupItem
                key={i}
                header={article.author}
            >
                {article.headline}
                <br/>
            <br/>
            {article.text}
            </ListGroupItem>
        )}
    </ListGroup>
) : null;

NewsList.propTypes = {
    articlePropp: PropTypes.array.isRequired,
    visiblePropp: PropTypes.bool.isRequired
};


export default NewsList;

