import React, { useState } from "react"
import delIcon from '../../assets/images/delete.svg'

const CartItem = (props) => {

    const quan = parseInt(props.quantity)

    const [quantity, setQuantity] = useState(quan)

    const handleChange = e => {
        setQuantity(e.target.value)
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="cart_item">
                        <div className="cart_item_img">
                            <img src={props.img} alt="" />
                        </div>
                        <div>{props.name}</div>
                        <div className="product_details_quantity">
                            <button onClick={decreaseQuantity} className="quantity_effect" aria-label="Decrease Quantity">-</button>
                            <input className="quantity_input" value={quantity} onChange={handleChange} type="text" name="quantity" aria-label="Product Quantity" />
                            <button onClick={increaseQuantity} className="quantity_effect" aria-label="Increase Quantity">+</button>
                        </div>
                        <div className="price">
                            NGN
                            <span>{props.price}</span>
                        </div>
                        <button  className="cart_del">
                            <img src={delIcon} alt="Delete Item from cart" />
                        </button>
                    </div>
    )
}

export default CartItem