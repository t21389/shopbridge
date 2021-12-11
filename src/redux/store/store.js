import { createStore, applyMiddleware } from 'redux'
import {combReducer} from '../reducer/index';
import thunk from "redux-thunk";

const middlewares = [thunk];
const store = createStore(combReducer, applyMiddleware(...middlewares));

export default store;