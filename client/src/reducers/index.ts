import { combineReducers } from 'redux';

import { authenticationReducer } from './authenticationReducer';
import { registerReducer } from './registerReducer';
import { alertReducer } from './alertReducer';
//import { users } from './usersReducer';
//import { alert } from './alertReducer';

const rootReducer = combineReducers({
    alertReducer,
    authenticationReducer,
    registerReducer,
});

export default rootReducer;
