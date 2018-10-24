// import debug from 'debug';
import { applyMiddleware, compose, createStore } from 'redux';

import initialState from './initial-state';
import reducers from './app/reducers';

// const log = debug('W2:plugin:user-settings:client/store');

const middlewares = [];

let composeEnhanders = compose;

if (process.env.NODE_ENV === 'development') {
    // log("In development");
    const { createLogger } = require('redux-logger');
    middlewares.push(createLogger());

    if (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        // log("redefining composeEnhanders...");
        composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
}

export default createStore(
    reducers,
    initialState,
    composeEnhanders(applyMiddleware(...middlewares))
);
