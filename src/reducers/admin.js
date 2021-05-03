const initialState = {
    inStock: []
}

export default function cart(state = initialState, action) {
    switch (action.type) {
      case "ADD_NEW_PRODUCT":
        return {
            ...state,
            inStock: [
                ...state.inStock,
                action.payload
            ]
        };
      default:
        return state;
    }
}