import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productAction } from '../../actions/product'
import { cartAction } from '../../actions/cart'
import './productDetails.css'

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()

    const dispatch = useDispatch()
    const product = useSelector(state => state.product.singleProduct)

    const getProduct = () => {
        dispatch(productAction.fetchSingle(id))
    }

    useEffect(() => {
        console.log(id, "Na the id be this 00")
        getProduct()
    }, [])

    const toggleCart = () => {
        dispatch(cartAction.toggleCart())
    }

    const addToCart = async () => {
        console.log(12345)
        await dispatch(cartAction.addToCart({...product, cartQuantity: quantity}))
    }

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
        <div className="details_overlay">
            {
                product.length ? (
                    product.map(item => {
                        return (
                            <div key={product.id} className="product_details">
                                <div className="product_details_img">
                                    <img src={item.prdImg} alt={item.prdName} />
                                </div>
                                <div className="product_details_content">
                                    <h2 className="second--level--heading">{item.prdName}</h2>
                                    <p>{item.prdDesc}</p>
                                    <h3>Quantity</h3>
                                    <div className="product_quantity_wrapper">
                                        <div className="product_details_quantity">
                                            <button onClick={decreaseQuantity} className="quantity_effect" aria-label="Decrease Quantity">-</button>
                                            <input className="quantity_input" value={quantity} onChange={handleChange} type="text" name="quantity" aria-label="Product Quantity" />
                                            <button onClick={increaseQuantity} className="quantity_effect" aria-label="Increase Quantity">+</button>
                                        </div>
                                        <span className="quan">{item.prdUnit}</span>
                                    </div>
                                    <div>NGN {item.prdPrice}</div>

                                    <div className="product_details_cta">
                                        <button onClick={addToCart} className="btn btn_large btn_light">Add to cart</button>
                                        <button onClick={toggleCart} className="btn btn_large btn_light">Add to wishlist</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="product_details">
                        Loading...
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetails;

