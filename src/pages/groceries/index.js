import React, { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../../actions/product'
import Product from '../../components/product'

const Groceries = () => {
    const dispatch = useDispatch()
    const groceriesList = useSelector( state => state.product.groceries)

    const getGroceries = useCallback(() => {
        dispatch(productAction.fetchGroceries())
    }, [dispatch])

    useEffect(() => {
        getGroceries()
    }, [getGroceries])

    return (
        <section>
            <nav className="navigation">
                <Link to="/">Home</Link> &gt; <Link className="navigation_active" to="/groceries">Groceries</Link>
            </nav>
            <header className="section_heading">
                <h1 className="first-level-heading">Groceries</h1>
            </header>
            <section>
            <h2 className="second-level-heading">GROCERIES YOU LOVE</h2>
                <div className="section_grid_wrapper">
                <div className="section_grid">
                    {
                        groceriesList.length ? (
                            groceriesList.map( grocery => {
                                return (
                                    <Product id={grocery.id} name={grocery.prdName} img={grocery.prdImg} price={grocery.prdPrice} unit={grocery.prdUnit} />
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

export default Groceries