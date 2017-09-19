import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import nav from '../reducers/nav';
import LoginSignUp from '../reducers/LoginSignUp';

const appReducer = combineReducers({
    LoginSignUp,
    nav,
});

// if (process.env.NODE_ENV === 'development') {
//     middleware.push(logger);
// }

const store = createStore(appReducer, applyMiddleware(thunk, logger));


export default store;
