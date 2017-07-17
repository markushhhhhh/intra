import React from 'react';
import PropTypes from 'prop-types';

import {Media} from 'react-bootstrap';




const NewsList = ({
                      newsarticlesPropp,
                      visiblePropp
                  }) => (visiblePropp === true) ? (

    <div>
        {newsarticlesPropp.reverse().map((article, i) =>
            <Media
            key={i}
            >
            <Media.Body>
                {console.log(article.text)}
                <Media.Heading>{article.headline}</Media.Heading>
                <div className="newstext">{article.text}</div>
            </Media.Body>
        </Media>)}

    </div>
) : null;

NewsList.propTypes = {
    newsarticlesPropp: PropTypes.array.isRequired,
    visiblePropp: PropTypes.bool.isRequired
};


export default NewsList;

{/*<ListGroup>
 {newsarticlesPropp.map((article, i) => <ListGroupItem
 key={i}
 header={article.author}
 >
 {article.headline}
 <br/>
 <br/>
 {article.text}

 </ListGroupItem>
 )}
 </ListGroup>*/}