export const cartAction = {
    addToCart : (item) => {
        return { type: 'ADD_TO_CART', payload: item}
    },
    removeFromCart : (item) => {
        return { type: 'REMOVE_FROM_CART', payload: item}
    },
    toggleCart : () => {
        return { type: 'TOGGLE_CART' }
    }
}