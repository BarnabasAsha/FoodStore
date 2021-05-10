import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsCount, selectCartTotal } from '../../reducers/cartCount'
import { useHistory } from 'react-router-dom'
import { cartAction } from '../../actions/cart'
import './cart.css'
import CartItem from '../cartItem'


const Cart = () => {
    const history = useHistory()
    const currentUser = useSelector( state => state.user.currentUser)
    const dispatch = useDispatch()
    const getState = useSelector(state => state)
    const mycartCount = selectCartItemsCount(getState)
    const myCartTotal = selectCartTotal(getState)
    
    const cartItems = useSelector( state => state.cart.cartItems)
    const toggleCart = () => {
        dispatch(cartAction.toggleCart())
    }

    const handleCheckout = () => {
        if(currentUser) {
            //show checkoutform
        }
        history.push('/login');
    }

    return (
        <div className="cart_overlay">
            <div className="cart">
                <div className="cart_header">
                    <h3>{mycartCount} Items</h3>
                    <span><strong>NGN {myCartTotal}</strong></span>
                </div>
                <div className="cart_items_wrapper">
                    {
                        cartItems.length ? (
                            cartItems.map(item => {
                                return (
                                    <CartItem key={item.id} {...item} />

                                )
                            })
                        ) : (
                            <div>No items in your cart</div>
                        )
                    }
                   <div className="cart_ctas"> <button onClick={toggleCart} className="btn btn_large btn_dark">Keep Shopping</button>
                  {
                      cartItems.length ? (
                        <button onClick={handleCheckout} className="btn btn_large btn_dark">Checkout</button>
                      ) : null
                  }
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Cart