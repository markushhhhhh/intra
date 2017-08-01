'use strict';

import database from './../database.js' //imports the connection to the firebase database.

// In the actions is where an update of the initialState is made or a database call is made.
//For all functions in the actionsfiles - depending on if the functions returns an object {...} or a function different measures are taken.
// If the function returns an object, the data and info will be redirected to the reducer through the store where the initialState file is updated.
// If the function returns a function it will just run as a usual function and not get connected with the store and reducer. In this app, if a function is returned that means that a
// databse call si being made instead of updating the initialState. The individual components imports the necessary actions needed


//Adds the new user data to the database. and then uses dispatch to call an action in the same file(this is to seperate database calls and calls to make an update of the initial state).
export function addUserToDB(user) {
    return function (dispatch) {
        const userRef = database.database().ref('usersDB/users/' + user.username);
        userRef.set(user);
        dispatch(resetUser()); //calls the function resetUser() that is located in the same file.
    }
}

//Deletes the user data from the database. and then uses dispatch to call an action in the same file(this is to seperate database calls and calls to make an update of the initial state).
export function deleteUserFromDB(oldUsername) {
    return function (dispatch) {
        const oldUsernameRef = database.database().ref('usersDB/users');
        oldUsernameRef.child(oldUsername).remove();
        dispatch(resetUser());
    }
}

//Updates the user data in the database. and then uses dispatch to call an action in the same file(this is to seperate database calls and calls to make an update of the initial state).
export function updateUserInDB(newUser, oldUsername) {
    return function (dispatch) {
        const oldUsernameRef = database.database().ref('usersDB/users');
        oldUsernameRef.child(oldUsername).remove();
        const newUsernameRef = database.database().ref('usersDB/users/' + newUser.username);
        newUsernameRef.set(newUser);
        dispatch(resetUser());
    }
}


//Fetches the userdata in the database and adds a listener to it that listens to changes in that specific location. If another user adds a new user this function will
// automatically run and the app will update dynamically. Also uses dispatch to call a function in the same file to update the initialState
export function subscribeToUsers() {
    return function (dispatch) {
        const allUsersRef = database.database().ref('usersDB/users');
        allUsersRef.on('value', (snapshot) => {
            console.log(snapshot.val(), 'In subscribetousers');
            const allUsers = [];
            snapshot.forEach((childVariable) => {
                allUsers.push(childVariable.val())
            });
            console.log(allUsers, ' all Users');
            dispatch(receiveAllUsers(allUsers))
        })
    }
}

//Switches off the listener
export function unsubscribeToUsers() {
    return function () {
        const allUsersRef = database.database().ref('usersDB/users');
        allUsersRef.off('value');
    }
}

//Calls the database and stores the profileimg in the database and the uses dispatch to update the initialState with the url to the specific image
export function profileImgUpload(filename) {
    return function (dispatch) {
        const databaseImagesRef = database.storage().ref('images');
        console.log('hej');
        databaseImagesRef.child(filename).getDownloadURL().then(url =>
            dispatch(updateUserToConf({profileimgURL: url}))
        )
    }
}

//Updates the initialstate with the fetched users
function receiveAllUsers(allUsers) {
    return{
        type: 'RECEIVE_ALL_USERS',
        payload: allUsers
    };
}

//Updates the initialState with the specific user we want to configure, the specific user was collected from the database.
export function getUserToConf(user) {
    return{
        type: 'GET_USER_TO_CONF',
        payload: user
    }
}

//Updates the userdata in the initialState that we are currently configuring
export function updateUserToConf(user) {
    return{
        type: 'UPDATE_USER_TO_CONF',
        payload: user
    }
}

//resets the data that we stored in initialState because we now have it stored in the database instead.
export function resetUser() {
    return{
        type: 'RESET_USER'
    }
}