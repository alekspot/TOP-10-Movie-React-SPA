import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import defaultReducer from "./default-reducers";

import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    app: defaultReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;