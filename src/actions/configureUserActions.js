import database from './../database.js'

export function addUserToDB(user) {
    return function () {
        const usersRef = database.database().ref('usersDB/users/' + user.username);
        usersRef.set(user);
    }
}

export function updateUserInDB(newUser, oldUsername) {
    return function () {
        const oldUsernameRef = database.database().ref('usersDB/users');
        oldUsernameRef.child(oldUsername).remove();
        const newUsernameRef = database.database().ref('usersDB/users/' + newUser.username);
        newUsernameRef.set(newUser);
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