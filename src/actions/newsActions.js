import database from './../database.js'

export function addArticleToDB(article) {
    return function (dispatch) {

        const date = () => {
            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth()+1; //January is 0!
            let yyyy = today.getFullYear();

            if(dd<10) {
                dd = '0'+dd
            }

            if(mm<10) {
                mm = '0'+mm
            }
            let hh = today.getHours();
            if(hh<10){
                hh = '0'+hh
            }
            let min = today.getMinutes();
            return(yyyy + '-' + mm + '-' + dd + ' @ ' + hh + ':' + min)
        };

        const newsRef = database.database().ref('newsDB/articles/');
        newsRef.push().then((snapshot) => {
            const uniqueArticleKey = snapshot.key;
            const reffi = database.database().ref('newsDB/articles/' + uniqueArticleKey);
            reffi.set({...article,
                aid: uniqueArticleKey,
                date: date()});
        })
        dispatch(resetArticle())
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
            allArticles.reverse();
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

export function resetArticle() {
    return {
        type: 'RESET_ARTICLE'
    }
}

export function imgUpload(filename) {
    return function (dispatch) {
        const databaseImagesRef = database.storage().ref('images');
        console.log('hej');
        databaseImagesRef.child(filename).getDownloadURL().then(url =>
            dispatch(updateNotPostedArticle({imgURL: url}))
        )
    }
}