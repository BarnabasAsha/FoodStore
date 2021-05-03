import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Cart from '../components/cart'

const Layout = (props) => {
    const status = useSelector( state => state.cart.status)
    return (
        <div>
            <Navbar />
            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1em' }}>
                {
                    props.children
                }
            </main>
            {
                status ? <Cart /> : null
            }
            <Footer />
        </div>
    )
}

export default Layout