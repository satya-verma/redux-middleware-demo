const redux = require('redux');
const createStore = redux.createStore;
const { cakeReducer, iceCreamReducer, usersReducer } = require('./reducers/reducer');
const { buyCake, buyIceCream, fetchUserSuccess, fetchUserRequest, fetchUserFailure, fetchUsers } = require('./actions/action');
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const thunkMiddleware = require("redux-thunk").default;
// const axios = require('axios');
const logger = reduxLogger.createLogger();

const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer, users: usersReducer });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
// console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => { });
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIceCream());
// store.dispatch(fetchUserRequest());
// store.dispatch(fetchUserSuccess());
// store.dispatch(fetchUserFailure());
store.dispatch(fetchUsers());
unsubscribe();
