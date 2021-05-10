const initialState = {
    status: false,
    cartItems: []
}

const handleAddToCart = (prevCartItems, newCartItem) => {
    if(prevCartItems.some( item => item.id === newCartItem.id )) {
       return prevCartItems.map( item => item.id === newCartItem.id 
            ? {
                ...item,
                cartQuantity: parseInt(item.cartQuantity) + parseInt(newCartItem.cartQuantity)
            } : item )
    } else {
        return [
            ...prevCartItems,
            newCartItem
        ]
    }
}

export default function cart(state = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
            ...state,
            cartItems: [...handleAddToCart(state.cartItems, action.payload)]
        };
      case "REMOVE_FROM_CART":
        const filtered =  state.cartItems.filter((item) => item.id !== action.payload)
        return {
            ...state,
            cartItems : [
                ...filtered
            ]
        }
    case "TOGGLE_CART": 
      return {
          ...state,
          status: !state.status
      }
    case "CLEAR_CART": 
      return {
          ...initialState
      }
      default:
        return state;
    }
}