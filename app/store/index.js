import { combineReducers, createStore, applyMiddleware } from "redux";
import todos from "../reducers/todos";
import keyword from "../reducers/keyword";
import visibilityFilter from "../reducers/visibilityFilter";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger();

const middleware = [thunk, logger];

const store = createStore(combineReducers({
    todos,
    keyword,
    visibilityFilter
}), applyMiddleware(...middleware));

export default store;