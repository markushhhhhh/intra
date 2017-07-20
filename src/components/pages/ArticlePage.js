import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import showdown from 'showdown'

class ArticlePage extends React.Component {




    render() {

        const articleNode = this.props.newsarticles.map((article, i) =>{
            const converter = new showdown.Converter();
            //console.log(converter.(article.text.text))
            if(article.aid === this.props.params.aid)
                return (
                <div key={i} className="row">
                    <h1>{article.headline}</h1><br/>
                    <div className="articleText" dangerouslySetInnerHTML={{ __html: converter.makeHtml(article.text.text) }}/>

                    <br/>
                    <img src={article.imgURL}/><br/>
                    {article.imgheadline}<br/>
                    {article.author + ' ' + article.date}
                </div>

            )
        });

        return (<div>
                {articleNode}
            </div>
        );

    }

}

/*import React from 'react';
import PropTypes from 'prop-types';

const ArticlePage = ({
    params,
}) => {
    console.log(params);


    return (
        <div>
            {params.aid}
        </div>
    )};*/

ArticlePage.propTypes = {
    params: PropTypes.object,
};

function mapStateToProps(state){
    return{
        newsarticles: state.news.newsarticles
    }
}

export default connect(mapStateToProps)(ArticlePage);