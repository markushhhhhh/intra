import initState from './../store/initialState.js';

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