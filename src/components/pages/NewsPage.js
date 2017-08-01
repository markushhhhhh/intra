'use strict';
import React from 'react';

import {connect} from 'react-redux'; //Imported to connect the initialstate to the component
import {bindActionCreators} from 'redux'; //Imported to connect the actions to the component

import {subscribeToNews, unsubscribeToNews} from './../../actions/newsActions.js' //Actions imported to add listeners to the specific path in the database

//Imported Component used in the  NewsPageComponent
import NewsList from './newspageComp/NewsList.js'

//Imported Bootstrap components
import {Grid} from 'react-bootstrap';


//Creates the NewsPageComponent
//Its children are NewsList.js located in newsPageComp
class NewsPage extends React.Component{

    //Function that executes everytime this component have been rendered
    componentDidMount(){
        //Adds listeners to the database and updates the initialState
        this.props.subscribeToNews();
    }

    //Function that executes everytime this component is unrendered
    componentWillUnmount(){
        //Turns off the listener in the database
        this.props.unsubscribeToNews();
    }

    //Makes the window scroll to the top whenever an article is clicked
    handleClickOnArticle = () => {
        window.scrollTo(0, 0);
    };


    render(){
        return(
            <div>
                <h1>Nyheter</h1>
                <Grid>
                <NewsList
                newsarticlesPropp={this.props.newsarticles}
                visiblePropp={true}
                handleClickOnArticlePropp={this.handleClickOnArticle}
                />
                </Grid>
            </div>
        )
    }
}

//Data fetched from the initialState and connected to the component. Can for example be reached from this.props.newsarticles
function mapStateToProps(state){
    return{
newsarticles: state.news.newsarticles
    }
}

//Actions fetched from the action files and connected to the component. Can for example be reached from this.props.subscribeToNews
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        subscribeToNews: subscribeToNews,
        unsubscribeToNews: unsubscribeToNews
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);