import { combineReducers } from 'redux';


import user from './userReducer.js';
import components from './componentsReducer.js';
import conf from './confReducer.js';

//Combines all the diffrent reducers to a big reducer
export default combineReducers({
    user: user,
    components: components,
    conf: conf,
})