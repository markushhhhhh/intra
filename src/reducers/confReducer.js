import initState from './../store/initialState.js';

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
                    newsadmin: false
                },
                oldusername: ''
            };
            break;
    }
    return state;
}

