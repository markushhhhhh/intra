import database from './../database.js'

export function addArticleToDB(article) {
    return function () {
        const newsRef = database.database().ref('newsDB/articles/');
        newsRef.push().then((snapshot) => {
            const uniqueArticleKey = snapshot.key;
            const reffi = database.database().ref('newsDB/articles/' + uniqueArticleKey);
            reffi.set({...article, aid: uniqueArticleKey});
        })
    }
}


export function updateNotPostedArticle(article) {
    return{
        type: 'UPDATE_NOTPOSTEDARTICLE',
        payload: article
    }
}