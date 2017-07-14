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

export function subscribeToNews() {
    return function (dispatch) {
        const allArticlesRef = database.database().ref('newsDB/articles');
        allArticlesRef.on('value', (snapshot) => {
            const allArticles = [];
            snapshot.forEach((childVariable) => {
                allArticles.push(childVariable.val())
            });
            dispatch(receiveAllNews(allArticles))
        })
    }
}

function receiveAllNews(allArticles) {
    return{
        type: 'RECEIVE_ALL_ARTICLES',
        payload: allArticles
    };
}

export function unsubscribeToNews() {
    return function () {
        const allNewsRef = database.database().ref('newsDB/articles');
        allNewsRef.off('value');
    }
}


export function updateNotPostedArticle(article) {
    return{
        type: 'UPDATE_NOTPOSTEDARTICLE',
        payload: article
    }
}