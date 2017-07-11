import database from './../database.js'

export function userLoginAction() {
    console.log('In userLoginAction');
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
