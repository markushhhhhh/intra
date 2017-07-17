import initState from './../store/initialState.js';

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