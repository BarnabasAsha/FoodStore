import React from 'react'
import './footer.css'
import logo from '../../assets/images/foodstore_logo_white.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_logo">
                <img src={logo} alt="Foodstore" />
            </div>
            <p className="text-small">Copyright © 2021 Foodstore. All rights reserved</p>
        </footer>
    )
}

export default Footer