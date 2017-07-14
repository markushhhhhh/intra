import initState from './../store/initialState.js';

export default function newsReducer(state = initState.news, action) {
    switch (action.type){
        case 'UPDATE_NOTPOSTEDARTICLE':
            return{...state,
                notpostedarticle: {...state.notpostedarticle, ...action.payload}
            };
            break;
    }
    return state;
}