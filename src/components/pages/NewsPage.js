'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import NewsList from './newspageComp/NewsList.js'


class NewsPage extends React.Component{

    render(){

        return(
            <div>
                <h1>NewsPage!!</h1>
                <NewsList />
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
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);