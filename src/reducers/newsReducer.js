'use strict';

import initState from './initialState.js';

//If a function in an actionfile returns an object the reducers are called, and if the type matches with a case in this file/reducer,
// it updates the specific part of the initialState and returns the new initialState.
export default function newsReducer(state = initState.news, action) {
    switch (action.type){
        case 'UPDATE_NOTPOSTEDARTICLE':
            return{...state,
                notpostedarticle: {...state.notpostedarticle, ...action.payload}
            };
            break;
        case 'RECEIVE_ALL_ARTICLES':
            return{...state,
                newsarticles: action.payload
            };
            break;
        case 'RESET_ARTICLE':
            return{...state,
            notpostedarticle: {
                headline: '',
                text: {
                    selection: null,
                    text: ''
                },
                imgURL: '',
                imgheadline: ''
            }
            };
            break;
        case 'GET_ARTICLE_TO_CONF':
            return{...state,
                article: {...state.article, ...action.payload}
            };
            break;
    }
    return state;
}