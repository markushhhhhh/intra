'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {subscribeToNews, unsubscribeToNews} from './../../actions/newsActions.js'

import NewsList from './newspageComp/NewsList.js'


class NewsPage extends React.Component{

    componentDidMount(){
        this.props.subscribeToNews();
    }

    componentWillUnmount(){
        this.props.unsubscribeToNews();
    }

    render(){

        return(
            <div>
                <h1>NewsPage!!</h1>
                <NewsList
                newsarticlesPropp={this.props.newsarticles}
                visiblePropp={true}
                />
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
newsarticles: state.news.newsarticles
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        subscribeToNews: subscribeToNews,
        unsubscribeToNews: unsubscribeToNews
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);