import { combineReducers } from 'redux'
import cart from './cart'
import admin from './admin'
import product from './product'

export default combineReducers({
    cart,
    admin,
    product
})