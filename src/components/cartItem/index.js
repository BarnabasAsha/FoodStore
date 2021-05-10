import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { cartAction } from '../../actions/cart'
import delIcon from '../../assets/images/delete.svg'

const CartItem = (props) => {
    const dispatch = useDispatch()

    const quan = parseInt(props.cartQuantity)

    const [quantity, setQuantity] = useState(quan)

    const handleChange = e => {
        setQuantity(e.target.value)
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
        dispatch(cartAction.addToCart({...props, cartQuantity: 1}))
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            dispatch(cartAction.addToCart({...props, cartQuantity: -1}))
        }
    }

    const removeItem = (item) => {
        dispatch(cartAction.removeFromCart(item))
    }

    return (
        <div className="cart_item">
                        <div className="flex">
                        <div className="cart_item_img">
                            <img src={props.prdImg} alt="" />
                        </div>
                        <div>
                        <p>{props.prdName}</p>
                        <div className="price">
                            NGN
                            <span> {props.prdPrice}</span>
                        </div>
                        </div>
                        </div>
                        
                       <div className="flex">
                       <div className="product_details_quantity">
                            <button onClick={decreaseQuantity} className="quantity_effect" aria-label="Decrease Quantity">-</button>
                            <input className="quantity_input" value={quantity} onChange={handleChange} type="text" name="quantity" aria-label="Product Quantity" disabled/>
                            <button onClick={increaseQuantity} className="quantity_effect" aria-label="Increase Quantity">+</button>
                        </div>
                        <button onClick={() => removeItem(props.id)}  className="cart_del">
                            <img src={delIcon} alt="Delete Item from cart" />
                        </button>
                       </div>
                    </div>
    )
}

export default CartItem