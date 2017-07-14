import React, { PropTypes } from 'react';
import AddNewsForm from './addnewspageComp/AddNewsForm.js';


class AddNewsPage extends React.Component {


componentDidMount(){
    console.log(this.props.activeuser, ' ACTIVEUSER');
}


    render() {
        return (<div>
                <AddNewsForm
                    activeuserPropp={this.props.activeuser}
                />
            </div>
        );

    }

}

export default AddNewsPage;