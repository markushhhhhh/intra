'use strict';

import database from './../database.js'

// In the actions is where an update of the initialState is made or a database call is made.
//For all functions in the actionsfiles - depending on if the functions returns an object {...} or a function different measures are taken.
// If the function returns an object, the data and info will be redirected to the reducer through the store where the initialState file is updated.
// If the function returns a function it will just run as a usual function and not get connected with the store and reducer. In this app, if a function is returned that means that a
// databse call si being made instead of updating the initialState. The individual components imports the necessary actions needed


//Adds the written atricle to the database.
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
        });
        dispatch(resetArticle())
    }
}

//adds a listener to the specific location where all the article data is stored in the database. In that case if a user adds an article, my newsfeed is gonna automatically update.
//Then it dispatches and updates the initialState with the articledata
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

//updates the initialstate with the fetched articledata
function receiveAllNews(allArticles) {
    return{
        type: 'RECEIVE_ALL_ARTICLES',
        payload: allArticles
    };
}

//switches off the listener to all the articles
export function unsubscribeToNews() {
    return function () {
        const allNewsRef = database.database().ref('newsDB/articles');
        allNewsRef.off('value');
    }
}

//Updates the initialState with the data that is related to the article being written but not yet posted to the database
export function updateNotPostedArticle(article) {
    return{
        type: 'UPDATE_NOTPOSTEDARTICLE',
        payload: article
    }
}

//resets the notPostedArticle data in initialstate
export function resetArticle() {
    return {
        type: 'RESET_ARTICLE'
    }
}

//Uploads the article image to the database
export function imgUpload(filename) {
    return function (dispatch) {
        const databaseImagesRef = database.storage().ref('images');
        console.log('hej');
        databaseImagesRef.child(filename).getDownloadURL().then(url =>
            dispatch(updateNotPostedArticle({imgURL: url}))
        )
    }
}

//Deletes the specific article from the database
export function deleteArticle(aid) {
    return function () {
        const articlesRef = database.database().ref('newsDB/articles');
        articlesRef.child(aid).remove();
    }
}