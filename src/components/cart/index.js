import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsCount, selectCartTotal } from '../../reducers/cartCount'
import { PaystackConsumer } from 'react-paystack';
import { useHistory } from 'react-router-dom'
import { cartAction } from '../../actions/cart'
import './cart.css'
import CartItem from '../cartItem'


const Cart = () => {
    const history = useHistory()
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const getState = useSelector(state => state)
    const mycartCount = selectCartItemsCount(getState)
    const myCartTotal = selectCartTotal(getState)

    const cartItems = useSelector(state => state.cart.cartItems)
    const toggleCart = () => {
        dispatch(cartAction.toggleCart())
    }

    const config = {
        reference: (new Date()).getTime(),
        email: currentUser ? currentUser.email : '',
        amount: Number(myCartTotal) * 100,
        publicKey: 'pk_test_679ff1fb37b6755e1c557bb93a9c3905336b3117',
    };

    // you can call this function anything
    const handleSuccess = async (reference) => {
        await dispatch(cartAction.clearCart())
        alert(`Payment with reference ${reference} was sucessful`)
        console.log(reference);
    };

    // you can call this function anything
    const handleClose = () => {
        alert('Payment failed')
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose
    };

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
                                <PaystackConsumer {...componentProps} >
                                    {({ initializePayment }) => <button  className="btn btn_large btn_dark" onClick={() => {
                                        if (currentUser !== null) {
                                            initializePayment(handleSuccess, handleClose)
                                        } else history.push('/login');
                                    }
                                    }>Checkout</button>}
                                </PaystackConsumer>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart