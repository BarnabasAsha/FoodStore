import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2em' }}>
                {
                    props.children
                }
            </main>
            <Footer />
        </div>
    )
}

export default Layout