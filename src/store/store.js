import { applyMiddleware, createStore} from 'redux';

//Logs prevState --> Action --> nextState in the console
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import theCombinedReducer from './../reducers/index.js';

const middleWare = applyMiddleware(thunk, logger);

//The store
const store = createStore(theCombinedReducer, middleWare);

export default store;