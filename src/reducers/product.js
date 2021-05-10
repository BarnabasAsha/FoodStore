const initialState = {
    loading: false,
    groceries: [],
    farm: [],
    market: [],
    singleProduct: [],
    groceriesSnapshot: [],
    farmSnapshot: []
}

export default function product (state = initialState, action) {
    switch(action.type) {
        case 'FETCH_GROCERIES' :
          return {
              ...state,
              groceries: action.payload
          }
        case 'FETCH_GROCERIES_SNAPSHOT' :
            return {
                ...state,
                groceriesSnapshot: action.payload
            }
        case 'FETCH_FARM' :
          return {
              ...state,
              farm: action.payload
          }
          case 'FETCH_FARM_SNAPSHOT' :
            return {
                ...state,
                farmSnapshot: action.payload
            }
        case 'FETCH_MARKET' :
            return {
                ...state,
                market: action.payload
            }
        case 'FETCHING' :
                return {
                    ...state,
                    loading: action.status
                }
        case 'FETCH_SINGLE_PRODUCT':
            return {
                ...state,
                singleProduct: action.payload
            }
          default :
            return state
    } 
} 