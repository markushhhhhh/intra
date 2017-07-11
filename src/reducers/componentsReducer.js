import initState from './../store/initialState.js';

export default function componentsReducer(state = initState.components, action) {
    switch (action.type){
        case 'RENDER_ADDUSERPAGE':
            return{...state,
            adduserpage: action.payload
            };
            break;
        case 'RENDER_ADDUSERFORM':
            return{...state,
            adduserformC: action.payload
            };
        case 'UNRENDER_ADDUSERFORM':
            return{...state,
                adduserformC: action.payload
            };
            break;
        case 'UNRENDER_USERLIST':
            return{...state,
                userlistC: action.payload
            };
            break;
        case 'RENDER_USERLIST':
            return{...state,
            userlistC:action.payload
            };
            break;
        case 'UNRENDER_INDIVIDUALUSER':
            return{...state,
                edituserC: action.payload
            };
            break;
        case 'RENDER_INDIVIDUALUSER':
            return{...state,
                edituserC:action.payload
            };
            break;

    }
    return state;
}