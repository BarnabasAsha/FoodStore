import { addProduct } from '../services/adminService'

export const adminAction = {
    addNewPrd: (product) => {
        const success = (data) => {
            return { type: 'ADD_NEW_PRODUCT', payload: data }
        }
        const failure = (error) => {
            return { type: 'ADD_NEW_PRODUCT', err: error }
        }

        return dispatch => {
            addProduct(product)
            .then( data => {
                return dispatch(success(product))
            }, err => {
                dispatch(failure(err))
            }) 
        }
    }
}