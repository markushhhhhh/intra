import { combineReducers } from 'redux';


import activeuser from './userReducer.js';
import components from './componentsReducer.js';
import conf from './confReducer.js';

//Combines all the diffrent reducers to a big reducer
export default combineReducers({
    activeuser: activeuser,
    components: components,
    conf: conf,
})