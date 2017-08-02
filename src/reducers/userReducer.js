'use strict';

import initState from './initialState.js';

//If a function in an actionfile returns an object the reducers are called, and if the type matches with a case in this file/reducer,
// it updates the specific part of the initialState and returns the new initialState.
export default function userReducer(state = initState.activeuser, action) {
    switch (action.type){
        case 'UPDATE_ACTIVEUSER':
            return{...state,
                ...action.payload
            };
            break;
        case 'USER_LOGIN_SUCCESS':
            return{...state,
                ...action.payload,
                activesession: true
            };
            break;
        case 'USER_LOGOUT':
            return{...state,
                username: '',
                firstname: '',
                lastname: '',
                title: '',
                department: '',
                email: '',
                admin: false,
                newsadmin: false,
                activesession: false
            };
            break;
    }
    return state;
}