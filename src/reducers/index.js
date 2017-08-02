'use strict';

import { combineReducers } from 'redux';

//Imports the different reducers that handles different parts of the initialState, to combine them into a big reducer.
import activeuser from './userReducer.js';
import components from './componentsReducer.js';
import conf from './confReducer.js';
import news from './newsReducer.js'

//Combines all the diffrent reducers to a big reducer and exports the big reducer
export default combineReducers({
    activeuser: activeuser,
    components: components,
    conf: conf,
    news: news
})