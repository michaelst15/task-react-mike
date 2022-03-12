import { createStore, combineReducers, compose } from "redux";
import counterReducer from './Counter/reducer';

let rootReducer = combineReducers({
    counter: counterReducer
});

const composeEnhancer = window.__REDUX_DEVTOOL_EXTENION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancer());

export default store;