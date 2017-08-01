'use strict';

import database from './../database.js'

// In the actions is where an update of the initialState is made or a database call is made.
//For all functions in the actionsfiles - depending on if the functions returns an object {...} or a function different measures are taken.
// If the function returns an object, the data and info will be redirected to the reducer through the store where the initialState file is updated.
// If the function returns a function it will just run as a usual function and not get connected with the store and reducer. In this app, if a function is returned that means that a
// databse call si being made instead of updating the initialState. The individual components imports the necessary actions needed

//Checks if the username and password exists and matches with a user in the database. If it does it dispatches and updates the initialstate.activeuser with the specific userdata.
export function userLogin(activeUser) {
    return function (dispatch) {
        const userRef = database.database().ref('usersDB/users');
        userRef.once('value', snapshot => {
            const x = snapshot.forEach((childVariable) => {
                if(activeUser.username === childVariable.key && activeUser.password === childVariable.val().password){
                    dispatch(userLoginSuccess({
                        username: childVariable.val().username,
                        firstname: childVariable.val().firstname,
                        lastname: childVariable.val().lastname,
                        title: childVariable.val().title,
                        department: childVariable.val().department,
                        email: childVariable.val().email,
                        admin: childVariable.val().admin,
                        newsadmin: childVariable.val().newsadmin,
                        profileimgURL: childVariable.val().profileimgURL}));
                    console.log('Login Success!');
                    return true;
                }
            });
            if (x !== true){
                alert('Fel användarnamn eller lösenord, försök igen...');
            }
        });
    }
}

//Logout action
export function userLogout() {
    return{
        type: 'USER_LOGOUT'
    }
}

//Updates the active userdata
export function updateActiveUser(obj) {
    console.log('In updateActiveUser', obj)
    return {
        type: 'UPDATE_ACTIVEUSER',
        payload: obj
    }
}

//updates the initialstate with the userdata fetched from the database
function userLoginSuccess(permission){
    return {
        type: 'USER_LOGIN_SUCCESS',
        payload: permission
    }
}