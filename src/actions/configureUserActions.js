import database from './../database.js'

export function firebasePromise() {
    return function () {
        return console.log('DETFUNKAR')
    }
}

export function addUserToDB(user) {
    return function (dispatch) {
        const usersRef = database.database().ref('usersDB/users/' + user.username);
        usersRef.set(user);
        dispatch(resetUser());
    }
}

export function updateUserInDB(newUser, oldUsername) {
    return function (dispatch) {
        const oldUsernameRef = database.database().ref('usersDB/users');
        oldUsernameRef.child(oldUsername).remove();
        const newUsernameRef = database.database().ref('usersDB/users/' + newUser.username);
        newUsernameRef.set(newUser);
        dispatch(resetUser());
    }
}



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

export function unsubscribeToUsers() {
    return function () {
        const allUsersRef = database.database().ref('usersDB/users');
        allUsersRef.off('value');
    }
}

function receiveAllUsers(allUsers) {
    return{
        type: 'RECEIVE_ALL_USERS',
        payload: allUsers
    };
}

export function getUserToConf(user) {
    return{
        type: 'GET_USER_TO_CONF',
        payload: user
    }
}

export function updateUserToConf(user) {
    return{
        type: 'UPDATE_USER_TO_CONF',
        payload: user
    }
}
export function resetUser() {
    return{
        type: 'RESET_USER'
    }
}