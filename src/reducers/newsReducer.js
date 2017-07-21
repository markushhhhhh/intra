import initState from './../store/initialState.js';

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