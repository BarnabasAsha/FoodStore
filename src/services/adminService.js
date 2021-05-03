import { firestore } from '../firebase/utils'

export const addProduct = (product) => {
    return new Promise((resolve, reject) => {
        firestore
          .collection('products')
          .doc()
          .set(product)
          .then(() => resolve())
          .catch( err => reject())
    })
}