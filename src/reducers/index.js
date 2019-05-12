import hobbyReducer from './hobbyReducer';
import {combineReducers} from 'redux';

// combineReducers: pass a json object
const reducer = combineReducers({
    hobbies: hobbyReducer
});

export default reducer; 