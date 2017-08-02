'use strict';

import initState from './initialState.js';

//If a function in an actionfile returns an object the reducers are called, and if the type matches with a case in this file/reducer,
// it updates the specific part of the initialState and returns the new initialState.
export default function confReducer(state = initState.conf, action) {
    switch (action.type){
        case 'RECEIVE_ALL_USERS':
            return{...state,
                users: action.payload
            };
            break;
        case 'GET_USER_TO_CONF':
            return{...state,
                user: {...state.user, ...action.payload},
                oldusername: action.payload.username
            };
            break;
        case 'UPDATE_USER_TO_CONF':
            return{...state,
                user: {...state.user, ...action.payload}
            };
            break;
        case  'RESET_USER':
            return{...state,
                user: {
                    username: '',
                    firstname: '',
                    lastname: '',
                    title: '',
                    department: '',
                    email: '',
                    password: '',
                    admin: false,
                    newsadmin: false,
                    profileimgURL: ''
                },
                oldusername: ''
            };
            break;
    }
    return state;
}

