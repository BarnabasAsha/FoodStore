const initialState = {
    loading: false,
    groceries: [],
    farm: [],
    market: [],
    singleProduct: []
}

export default function product (state = initialState, action) {
    switch(action.type) {
        case 'FETCH_GROCERIES' :
          return {
              ...initialState,
              groceries: action.payload
          }
        case 'FETCH_FARM' :
          return {
              ...initialState,
              farm: action.payload
          }
        case 'FETCH_MARKET' :
            return {
                ...initialState,
                market: action.payload
            }
        case 'FETCHING' :
                return {
                    ...initialState,
                    loading: action.status
                }
        case 'FETCH_SINGLE_PRODUCT':
            return {
                ...initialState,
                singleProduct: action.payload
            }
          default :
            return state
    } 
} 