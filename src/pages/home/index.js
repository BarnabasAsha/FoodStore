import React from 'react'
import Product from '../../components/product'
import tomatoes from '../../assets/images/tomatoes.jpg'
import pepper from '../../assets/images/ballpepper.jpg'
import onions from '../../assets/images/onions.jpg'
import garlic from '../../assets/images/garlic.jpg'

import './home.css'

const Home = () => {
    return (
        <section className="home">
            <section className="home_hero">
                <h1>Quit the hassle and struggle</h1>
                <p>Why stress yourself with market hitchups?
            From fresh farm products to your regular groceries we have the right solution for you</p>
                <a className="btn btn_light btn_large" href="/market">Shop Now</a>
            </section>

            <section className="home_section">
                <h2 className="second-level-heading">FRESH FROM THE FARM</h2>
                <div className="section_grid">
                    <Product name="Red Tomatoes" img={tomatoes} price="1000" unit="kg" />
                    <Product name="Onions" img={onions} price="1000" unit="kg" />
                    <Product name="Garlic" img={garlic} price="1000" unit="kg" />
                    <Product name="Ball Pepper" img={pepper} price="1000" unit="kg" />
                </div>
                <a href="/farm" className="btn btn_large btn_light">View more</a>
            </section>

            <section className="home_section">
                <h2 className="second-level-heading">GROCERIES YOU LOVE</h2>
                <div className="section_grid">
                    <Product name="Red Tomatoes" img={tomatoes} price="1000" unit="kg" />
                    <Product name="Onions" img={onions} price="1000" unit="kg" />
                    <Product name="Garlic" img={garlic} price="1000" unit="kg" />
                    <Product name="Ball Pepper" img={pepper} price="1000" unit="kg" />
                </div>
                <a href="/groceries" className="btn btn_large btn_light">View more</a>
            </section>

            <section className="home_cta">
                <p>We are called foodstore just because we have a lot of what you love and need in store for you</p>
                <a href="/market" className="btn btn_large btn_light">Go to market</a>
            </section>
        </section>
    )
}

export default Home