import React from 'react'
import './product.css'

const Product = (props) => {
    const { img, name, price, unit } = props
    return (
        <div className="product-card">
            <div className="product-card_img">
                <img src={img} alt={name} />
            </div>
            <h4>{name}</h4>
            <p>{price}/{unit}</p>
        </div>
    )
}

export default Product