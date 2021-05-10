import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

const Product = (props) => {
    
    const { img, name, price, unit, id } = props

    return (
        <Link to={`?product=${id}`} className="product-card">
            <div className="product-card_img">
                <img src={img} alt={name} />
            </div>
            <h4>{name}</h4>
            <p>NGN {price}/{unit}</p>
        </Link>
    )
}

export default Product