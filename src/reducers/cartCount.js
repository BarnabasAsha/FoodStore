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
                cartQuantity + cartItem.cartQuantity
            , 0)
)