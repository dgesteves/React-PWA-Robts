import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import {setSearchReducer} from './reducers';
import {onFetchRobotsStart} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') middleware.push(logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(setSearchReducer, composeEnhancers(
    applyMiddleware(...middleware),
));

sagaMiddleware.run(onFetchRobotsStart);

export default store;