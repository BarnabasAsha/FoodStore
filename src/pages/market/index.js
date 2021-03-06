import React, { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' 
import { productAction } from '../../actions/product'
import Product from '../../components/product'
import './market.css'

const Market = () => {
    const dispatch = useDispatch()
    const marketList = useSelector( state => state.product.market )

    const fetchMarket = useCallback(() => {
        dispatch(productAction.fetchMarket())
    }, [dispatch])

    useEffect(() => {
        fetchMarket()
    }, [fetchMarket])

    return (
        <section>
            <nav className="navigation">
                <Link to="/">Home</Link> &gt; <Link className="navigation_active" to="/market">Market</Link>
            </nav>
            <header className="section_heading">
                <h1 className="first-level-heading">Our Market</h1>
                <p>All the goods you love in one place</p>
            </header>
            <section>
            <h2 className="second-level-heading">PRODUCTS YOU LOVE</h2>
                <div className="section_grid_wrapper">
                <div className="section_grid">
                    {
                        marketList.length ? (
                            marketList.map( product => {
                                return (
                                    <Product id={product.id} name={product.prdName} img={product.prdImg} price={product.prdPrice} unit={product.prdUnit} />
                                )
                            })
                        ) : (
                            <div>Loading...</div>
                        )
                    }
                
                </div>
                </div>
            </section>
        </section>
    )
}

export default Market