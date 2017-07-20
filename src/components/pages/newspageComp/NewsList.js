import React from 'react';
import PropTypes from 'prop-types';

import {Link, IndexLink} from 'react-router';
import {Media, Image, Col, Thumbnail, Button, Row} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const NewsList = ({
                      newsarticlesPropp,
                      visiblePropp
                  }) => {
    return(
    (visiblePropp === true)?(<div>{newsarticlesPropp.map((article, i) =>
        <LinkContainer to={'/news/' + article.aid} key={i}>
        <Col xs={6} md={4}  className="thumbCol">

            <Thumbnail src={(article.imgURL === '')?('img/Mandometer_logo2.png'):(article.imgURL)} alt="242x200">
                <h3>{article.headline}</h3>
                <p></p>
                <Row>
                <Col xs={4} md={4}><p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                </p>
                </Col>
                <Col xs={8} md={8}>
                    {article.author + '-' + article.title + '-' + article.department}<br/>
                    {article.date}
                </Col>
                </Row>
            </Thumbnail>
        </Col>
        </LinkContainer>
            )}</div>):(null)
)
};





    /*(visiblePropp === true) ? (

    <div>

        {newsarticlesPropp.map((article, i) =>
        <Col xs={6} md={4} key={i}>

            <Thumbnail src={(article.imgURL === '')?('img/Mandometer_logo2.png'):(article.imgURL)} alt="242x200">
                <h3>{article.headline}</h3>
                <p>{article.text.substring(0,100) + '...'}</p>
                <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                </p>
            </Thumbnail>
        </Col>
        )}

    </div>
) : null;*/

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