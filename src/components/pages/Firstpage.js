'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class FirstPageComponent extends React.Component{

    render(){

        return(
            <div>
                <h1>First Component</h1>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPageComponent);