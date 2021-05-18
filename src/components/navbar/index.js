import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsCount } from '../../reducers/cartCount'
import { auth } from '../../firebase/utils'
import { cartAction } from '../../actions/cart'
import logo from '../../assets/images/foodstore_logo.png'
import cart from '../../assets/images/cart_icon.svg'

import './navbar.css'
import Search from '../search'

const Navbar = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const getState = useSelector(state => state)
    const mycartCount = selectCartItemsCount(getState)

    const toggleCart = () => {
        dispatch(cartAction.toggleCart())
    }

    return (
        <nav className="navbar">
            <a href="/" className="navbar_logo">
                <img src={logo} alt="Foodstore" />
            </a>
            <Search />
            <ul className="navbar_ctas">
                <li onClick={toggleCart}>
                    <button className="btn btn_dark btn_large">
                        <img className="navbar_icon adjust" src={cart} alt="" />
                        <span className="navbar_ctas_text"> <span className="txt">CART</span> ({mycartCount})</span> </button>
                </li>
                <li>
                    {
                        !currentUser ? (
                            <a href="/login">LOGIN</a>
                        ) : (
                            <button className="logout_cta" onClick={() => auth.signOut()}>LOGOUT</button>
                        )
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;