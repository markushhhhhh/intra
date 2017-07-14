import React from 'react';
import PropTypes from 'prop-types';
import AddNewsForm from './addnewspageComp/AddNewsForm.js';


class AddNewsPage extends React.Component {


componentDidMount(){
    console.log(this.props.activeuser, ' ACTIVEUSER');
}

    handleTextInput = (event) => {
        let obj = {};
        let field = event.target.name;
        let val = event.target.value;
        obj[field] = val;
        this.props.updateNotPostedArticle(obj);
    };

    processForm = (event) => {
        // prevent default action. in this case, action is the form submission event
        event.preventDefault();
        //this.props.firebasePromise();
        console.log(event.target.name);
        const article = {...this.props.notpostedarticle,
        author: this.props.activeuser.firstname + ' ' + this.props.activeuser.lastname,
        department: this.props.activeuser.department,
        title: this.props.activeuser.title
        };
        console.log(article);
        this.props.addArticleToDB(article)
    };

   onSubmitTest = (event) => {
       console.log('ON SUBMIT TEST !!');
   }

    render() {
        return (<div>
                <AddNewsForm
                    onSubmitPropp={this.processForm}
                    activeuserPropp={this.props.activeuser}
                    handleTextInputPropp={this.handleTextInput}
                    notpostedarticlePropp={this.props.notpostedarticle}
                    onSubmitTestPropp={this.onSubmitTest}
                />
            </div>
        );

    }

}

export default AddNewsPage;