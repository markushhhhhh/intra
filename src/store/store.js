import { applyMiddleware, createStore} from 'redux';

//loads and saves the state to localstorage so the state stays the same during refresh
//import { loadState, saveState } from './localStorage.js';

//Logs prevState --> Action --> nextState in the console
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import theCombinedReducer from './../reducers/index.js';

const middleWare = applyMiddleware(thunk, logger);

//const persistedState = loadState();

//The store
const store = createStore(theCombinedReducer, /*persistedState,*/ middleWare);

/*store.subscribe(() => {
    saveState(store.getState());
});*/

export default store;