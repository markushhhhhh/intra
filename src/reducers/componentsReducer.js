'use strict';

import initState from './initialState.js';

//If a function in an actionfile returns an object the reducers are called, and if the type matches with a case in this file/reducer,
// it updates the specific part of the initialState and returns the new initialState.
export default function componentsReducer(state = initState.components, action) {
    switch (action.type){
        case 'RENDER_ADDUSERFORM':
            return{...state,
                admincomponents: {...state.admincomponents,
                    adduserformC: action.payload
                }
            };
            break;
        case 'UNRENDER_ADDUSERFORM':
            return{...state,
                admincomponents: {...state.admincomponents,
                    adduserformC: action.payload
                }
            };
            break;
        case 'RENDER_USERLIST':
            return{...state,
                admincomponents: {...state.admincomponents,
                    userlistC: action.payload
                }
            };
            break;
        case 'UNRENDER_USERLIST':
            return{...state,
                admincomponents: {...state.admincomponents,
                    userlistC: action.payload
                }
            };
            break;
        case 'RENDER_INDIVIDUALUSER':
            return{...state,
                admincomponents: {...state.admincomponents,
                    editindividualuserC: action.payload
                }
            };
            break;
        case 'UNRENDER_INDIVIDUALUSER':
            return{...state,
                admincomponents: {...state.admincomponents,
                    editindividualuserC: action.payload
                }
            };
            break;

    }
    return state;
}