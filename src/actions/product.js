import { fetchGroceries, fetchMarket, fetchFarm, fetchSingleProduct, fetchFarmSnapshot, fetchGroceriesSnapshot } from '../services/productService' 

export const productAction = {
    fetchGroceries: () => {
        const success = (data) => {
            return { type: 'FETCH_GROCERIES', payload: data }
        }
        const failure = (err) => {
            return { type: 'FETCH_GROCERIES', error: err }
        }
        const request = () => {
            return { type: 'FETCHING', status: true }
        }

        return dispatch => {
            request()
            fetchGroceries()
            .then( snapshot => {
                const prdArray = snapshot.docs.map( doc => {
                    return doc.data()
                })
                console.log(prdArray)
                dispatch(success(prdArray))
            }, 
            error => dispatch(failure(error)))
        }
    },
    fetchGroceriesSnapshot: () => {
        const success = (data) => {
            return { type: 'FETCH_GROCERIES_SNAPSHOT', payload: data }
        }
        const failure = (err) => {
            return { type: 'FETCH_GROCERIES_SNAPSHOT', error: err }
        }
        const request = () => {
            return { type: 'FETCHING', status: true }
        }

        return dispatch => {
            request()
            fetchGroceriesSnapshot()
            .then( snapshot => {
                const prdArray = snapshot.docs.map( doc => {
                    return doc.data()
                })
                console.log(prdArray, 'ddkfdjkddd')
                dispatch(success(prdArray))
            }, 
            error => dispatch(failure(error)))
        }
    },
    fetchMarket: () => {
        const success = (data) => {
            return { type: 'FETCH_MARKET', payload: data }
        }
        const failure = (err) => {
            return { type: 'FETCH_MARKET', error: err }
        }
        const request = () => {
            return { type: 'FETCHING', status: true }
        }

        return dispatch => {
            request()
            fetchMarket()
            .then( snapshot => {
                const prdArray = snapshot.docs.map( doc => {
                    return doc.data()
                })
                console.log(prdArray)
                dispatch(success(prdArray))
            }, 
            error => dispatch(failure(error)))
        }
    },
    fetchFarm: () => {
        const success = (data) => {
            return { type: 'FETCH_FARM', payload: data }
        }
        const failure = (err) => {
            return { type: 'FETCH_FARM', error: err }
        }
        const request = () => {
            return { type: 'FETCHING', status: true }
        }

        return dispatch => {
            request()
            fetchFarm()
            .then( snapshot => {
                const prdArray = snapshot.docs.map( doc => {
                    return doc.data()
                })
                console.log(prdArray)
                dispatch(success(prdArray))
            }, 
            error => dispatch(failure(error)))
        }
    },
    fetchFarmSnapshot: () => {
        const success = (data) => {
            return { type: 'FETCH_FARM_SNAPSHOT', payload: data }
        }
        const failure = (err) => {
            return { type: 'FETCH_FARM_SNAPSHOT', error: err }
        }
        const request = () => {
            return { type: 'FETCHING', status: true }
        }

        return dispatch => {
            request()
            fetchFarmSnapshot()
            .then( snapshot => {
                const prdArray = snapshot.docs.map( doc => {
                    return doc.data()
                })
                console.log(prdArray)
                dispatch(success(prdArray))
            }, 
            error => dispatch(failure(error)))
        }
    },
    fetchSingle: (id) => {
        const success = (data) => {
            return { type: 'FETCH_SINGLE_PRODUCT', payload: data }
        }
        const failure = (err) => {
            return { type: 'FETCH_SINGLE_PRODUCT', error: err }
        }
        const request = () => {
            return { type: 'FETCHING', status: true }
        }

        return dispatch => {
            request()
            fetchSingleProduct(id)
            .then( snapshot => {
                const prdArray = snapshot.docs.map( doc => {
                    return doc.data()
                })
                console.log(prdArray)
                dispatch(success(prdArray))
            }, 
            error => dispatch(failure(error)))
        }
    }
}