import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsCount } from '../../reducers/cartCount'
import { cartAction } from '../../actions/cart'
import logo from '../../assets/images/foodstore_logo.png'
import wishlist from '../../assets/images/wishlist_icon.svg'
import cart from '../../assets/images/cart_icon.svg'

import './navbar.css'

const Navbar = () => {
    const dispatch = useDispatch()
    const getState = useSelector( state => state )
    const mycartCount = selectCartItemsCount(getState)

    const toggleCart = () => {
        dispatch(cartAction.toggleCart())
    }

    return (
        <nav className="navbar">
            <a href="/" className="navbar_logo">
                <img src={logo} alt="Foodstore" />
            </a>
            <div className="navbar_search">
                <input type="text" name="search" placeholder="Search for your foods and groceries" />
            </div>
            <ul className="navbar_ctas">
                <li>
                    <a className="btn btn_dark btn_large" href="/wishlist">
                        <img className="navbar_icon" src={wishlist} alt="" />
                            <span className="navbar_ctas_text">WISHLIST</span>
                        </a>
                </li>
                <li onClick={toggleCart}>
                    <button className="btn btn_dark btn_large">
                    <img className="navbar_icon adjust" src={cart} alt="" />
                       <span className="navbar_ctas_text">CART ({mycartCount})</span> </button>
                </li>
                <li>
                    <a href="/login">LOGIN</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;