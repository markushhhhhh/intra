import firebase from 'firebase';

//This file specifies the firebase database and is always called when a database call is made.

var config = {
    apiKey: "AIzaSyB0R0LWf-t2EopgWgMaJ9GbYcAPJ3YrnUo",
    authDomain: "mando-intra.firebaseapp.com",
    databaseURL: "https://mando-intra.firebaseio.com",
    storageBucket: "mando-intra.appspot.com",
    messagingSenderId: "819266336533"
};
firebase.initializeApp(config);

const database = firebase;

export default database;