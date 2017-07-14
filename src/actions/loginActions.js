import database from './../database.js'

export function userLogin(activeUser) {
    console.log('In userLoginAction');
return function (dispatch) {
    const userRef = database.database().ref('usersDB/users');
    userRef.once('value', snapshot => {
        const x = snapshot.forEach((childVariable) => {
            console.log(childVariable.key, ' username');
            console.log(childVariable.val().password, ' password');
            if(activeUser.username === childVariable.key && activeUser.password === childVariable.val().password){
                dispatch(userLoginSuccess({
                    username: childVariable.val().username,
                    firstname: childVariable.val().firstname,
                    lastname: childVariable.val().lastname,
                    title: childVariable.val().title,
                    department: childVariable.val().department,
                    email: childVariable.val().email,
                    admin: childVariable.val().admin,
                    newsadmin: childVariable.val().newsadmin}));
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
export function userLogout() {
    return{
        type: 'USER_LOGOUT'
    }
}

export function updateActiveUser(obj) {
    console.log('In updateActiveUser', obj)
    return {
        type: 'UPDATE_ACTIVEUSER',
        payload: obj
    }
}

function userLoginSuccess(permission){
    return {
        type: 'USER_LOGIN_SUCCESS',
        payload: permission
    }
}

/*
export function testActionData(data) {
    console.log('in testActionData');
    return {
        type: 'TEST1',
        payload: data
    };
}

export function testDatabasePush(data) {
    return function () {

        const testDatabasePushRef = database.database().ref('databasetest');
        testDatabasePushRef.push(data);
    }
}

export function subscribeToTestData() {
    return function (dispatch) {
        const dataRef = database.database().ref('databasetest');
        dataRef.on('value', snapshot => {
            const currentData = [];
            snapshot.forEach((childVariable) => {
                currentData.push(childVariable.val())
            });
            dispatch(receiveData(currentData))
        });

    }
}

export function receiveData(data) {
    return{
        type: 'RECEIVE_DATA',
        payload: data
    }
}*/
