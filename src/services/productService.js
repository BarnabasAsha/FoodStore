import { firestore } from '../firebase/utils'

export const fetchGroceries = async () => {
    return await firestore.collection('products').where('prdType', '==', 'Grocery').get()
}

export const fetchGroceriesSnapshot = async () => {
    return await firestore.collection('products').where('prdType', '==', 'Grocery').limit(4).get()
}

export const fetchFarm = async () => {
    return await firestore.collection('products').where('prdType', '==', 'Farm').get()
}

export const fetchFarmSnapshot = async () => {
    return await firestore.collection('products').where('prdType', '==', 'Farm').limit(4).get()
}

export const fetchMarket = async () => {
    return await firestore.collection('products').get()
}

export const fetchSingleProduct = async (id) => {
    return await firestore.collection('products').where('id', '==', id).get()
}