'use strict';

//This stores the initialState on the specific users browser. So now the user can refresh the browser without losing the updated initialState and its information such as login and loaded articles etc.

//Loads the users initialstate from the user browser, if it exists
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err){
        return undefined;
    }
};

//saves the users initialState on the users browser
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err){
        //ignore
    }
};

