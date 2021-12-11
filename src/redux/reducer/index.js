import { combineReducers } from 'redux'
import {crudReducer} from './crudReducer'

export const combReducer =  combineReducers({
    products: crudReducer,
})