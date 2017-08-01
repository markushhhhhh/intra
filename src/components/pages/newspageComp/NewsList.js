import React from 'react';
import PropTypes from 'prop-types';

//Imported Bootstrap components
import {Media, Col, Thumbnail, Button, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//The NewsListComponent
const NewsList = ({
                      //Properties that is attached to the component from its parent
                      newsarticlesPropp,
                      visiblePropp,
                      handleClickOnArticlePropp
                  }) => {
    //traverses trough the array(newsArticlePropp) and returns multiple elements with specific articledata in each element
    const articles = newsarticlesPropp.map((article, i) =>{
        return (
            <Col xs={6} md={4}  className="thumbCol" key={i} onClick={handleClickOnArticlePropp}>
                <LinkContainer to={'/news/' + article.aid} >

                    <Thumbnail  src={(article.imgURL === '')?('img/Mandometer_logo2 kopia.png'):(article.imgURL)} alt="300x300">
                        <h3>{article.headline}</h3>
                        <Row>
                            <Col xs={4} md={4}><p>
                                <Button bsStyle="primary">Läs</Button>&nbsp;
                            </p>
                            </Col>
                            <Col xs={8} md={8} className="thumbnailAuthorText">
                                {article.author + ' - ' + article.title + ' - ' + article.department}<br/>
                                {article.date}
                            </Col>
                        </Row>
                    </Thumbnail>


                </LinkContainer>
            </Col>

        )
    });
    return(
        //if visiblePropp is true it returns the entire big element, if visiblePropp is false it returns null
        (visiblePropp === true)?(<Row>{articles}</Row>):(null)
    )
};

//Properties that is attached to the component from its parent
NewsList.propTypes = {
    newsarticlesPropp: PropTypes.array,
    visiblePropp: PropTypes.bool,
    handleClickOnArticlePropp: PropTypes.func
};

export default NewsList;