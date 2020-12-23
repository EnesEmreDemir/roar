import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    {}, //Initial State.
    applyMiddleware(thunk, loggerMiddleware)
);
