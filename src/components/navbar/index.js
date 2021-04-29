import React from 'react'
import logo from '../../assets/images/foodstore_logo.png'
import wishlist from '../../assets/images/wishlist_icon.svg'
import cart from '../../assets/images/cart_icon.svg'

import './navbar.css'

const Navbar = () => {
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
                <li>
                    <a className="btn btn_dark btn_large" href="/cart">
                    <img className="navbar_icon adjust" src={cart} alt="" />
                       <span className="navbar_ctas_text">CART</span> </a>
                </li>
                <li>
                    <a href="/login">LOGIN</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;