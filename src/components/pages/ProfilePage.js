import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProfilePageButtons from './ProfilePageComp/ProfilePageButtons.js'


class ProfilePage extends Component {

    render(){
        var childrenWithProps = React.cloneElement(this.props.children, {...this.props});
        return(
            <div>
                <ProfilePageButtons />
                {childrenWithProps}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        activeuser: state.activeuser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);