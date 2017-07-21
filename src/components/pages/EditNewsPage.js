import React from 'react';
import PropTypes from 'prop-types';
import AdminNewsList from './editNewsPageComp/AdminNewsList.js'

class EditNewsPage extends React.Component {

    componentDidMount(){
        this.props.subscribeToNews();
    }

    componentWillUnmount(){
        this.props.unsubscribeToNews();
    }

    handleClickOnDeleteArticle = (aid) => {
        this.props.deleteArticle(aid);
    };


    render() {
        return (<div>
                <AdminNewsList
                    newsPropp={this.props.newsarticles}
                    handleClickOnDeleteArticlePropp={this.handleClickOnDeleteArticle}
                    //visiblePropp={this.props.userlistC}
                />
                {/*<IndividualArticle
                    articlePropp={this.props.article}
                    />*/}
            </div>
        );

    }

}

export default EditNewsPage;