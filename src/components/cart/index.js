import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../../actions/cart'
// import { selectCartItems } from '../../reducers/cartCount'
// import { createStructuredSelector } from 'reselect'
import './cart.css'
import CartItem from '../cartItem'


const Cart = () => {

    const dispatch = useDispatch()
    // const mapState = createStructuredSelector({
    //     cartItems: selectCartItems
    // })
    const cartItems = useSelector( state => state.cart.cartItems)
    const toggleCart = () => {
        dispatch(cartAction.toggleCart())
    }

    return (
        <div className="cart_overlay">
            <div className="cart">
                <div className="cart_header">
                    <h3 className="">2 Items</h3>
                    <span><strong>NGN 0</strong></span>
                </div>
                <div className="cart_items_wrapper">
                    {
                        cartItems.length ? (
                            cartItems.map(item => {
                                return (
                                    <CartItem key={item.id} id={item.id} price={item.prdPrice} name={item.prdName} quantity={item.cartQuantity} img={item.prdImg} />

                                )
                            })
                        ) : (
                            <div>No items in your cart</div>
                        )
                    }
                   <div className="cart_ctas"> <button onClick={toggleCart} className="btn btn_large btn_dark">Keep Shopping</button>
                  {
                      cartItems.length ? (
                        <button className="btn btn_large btn_dark">Checkout</button>
                      ) : null
                  }
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Cart