import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import useQuery from '../../customHooks/useQuery'
import { productAction } from '../../actions/product'
import { cartAction } from '../../actions/cart'
import './productDetails.css'
import Modal from '../../components/modal'

const ProductDetails = () => {
    const query = useQuery()
    const location = useLocation()
    const history = useHistory()
    const [quantity, setQuantity] = useState(1)
    const id = query.get('product')

    const dispatch = useDispatch()
    const product = useSelector(state => state.product.singleProduct)

    const getProduct = useCallback(() => {
        dispatch(productAction.fetchSingle(id))
    }, [dispatch, id])

    useEffect(() => {
        getProduct()
    }, [getProduct])

    const addToCart = async () => {
        await dispatch(cartAction.addToCart({...product[0], cartQuantity: quantity}))
        dispatch(cartAction.toggleCart())
        history.push(location.pathname)
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

    const toogleModal = () => {
        history.push(location.pathname)
    }

    return (
        <Modal>
        <div onClick={toogleModal}  className="details_overlay">
           
        </div>
        {
                product.length ? (
                    product.map(item => {
                        return (
                            <div key={item.id} className="product_details">
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
                                    <h3>Price</h3>
                                    <div className="product_details_price">NGN {item.prdPrice}</div>

                                    <div className="product_details_cta">
                                        <button onClick={addToCart} className="btn btn_large btn_light">Add to cart</button>
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
        </Modal>
    )
}

export default ProductDetails;

