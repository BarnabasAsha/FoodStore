import { combineReducers } from 'redux'
import cart from './cart'
import admin from './admin'
import product from './product'
import user from './user'
import modal from './modal'

export const rootReducer = combineReducers({
    cart,
    admin,
    product,
    user,
    modal
})