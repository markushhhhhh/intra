'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux'; //Imported to connect the initialstate to the component

import showdown from 'showdown' //Converts the string to HTML code

//Imports Bootstrap components
import { Image, Col, Row, Jumbotron } from 'react-bootstrap';

//Creates the ArticlePageComponent, its parent is Main. it has no children
class ArticlePage extends Component {
    render() {
        //traverses trough the array(newsArticle) and returns the specific article with the specific articledata in its element, the articleNode
        const articleNode = this.props.newsarticles.map((article, i) =>{
            const converter = new showdown.Converter();
            if(article.aid === this.props.params.aid)
                return (
                    <div key={i} className="row theArticle">
                        <Jumbotron className="Jumbo2">
                            <h1>{article.headline}</h1><br/>
                            <div className="articleText" dangerouslySetInnerHTML={{ __html: converter.makeHtml(article.text.text) }}/>

                            <br/>

                            <Row>
                                <Col xs={8} md={8}>
                                    <Image className="articleImg" src={article.imgURL} responsive={true} rounded/>
                                </Col>
                            </Row>
                            {article.imgheadline}<br/>
                            {article.author + ' ' + article.date}
                        </Jumbotron>
                    </div>
                )
        });

        return (<div>
                {articleNode}
            </div>
        );

    }

}

ArticlePage.propTypes = {
    params: PropTypes.object,
};

//Data fetched from the initialState and connected to the component. Can for example be reached from this.props.newsarticles
function mapStateToProps(state){
    return{
        newsarticles: state.news.newsarticles
    }
}

export default connect(mapStateToProps)(ArticlePage);