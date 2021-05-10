import { createSelector } from 'reselect'

export const selectCartData = state => state.cart

export const selectCartItems = createSelector(
    [selectCartData],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (cartQuantity, cartItem) =>
                parseInt(cartQuantity) + parseInt(cartItem.cartQuantity)
            , 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (cartQuantity, cartItem) =>
                parseInt(cartQuantity) + parseInt(cartItem.cartQuantity) * parseInt(cartItem.prdPrice)
            , 0)
)