import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../../actions/product'
import Product from '../../components/product'

const Groceries = () => {
    const dispatch = useDispatch()
    const groceriesList = useSelector( state => state.product.groceries)

    const getGroceries = () => {
        dispatch(productAction.fetchGroceries())
    }

    useEffect(() => {
        getGroceries()
    }, [])

    return (
        <section>
            <header className="section_heading">
                <h1 className="first-level-heading">Groceries</h1>
            </header>
            <section>
            <h2 className="second-level-heading">GROCERIES YOU LOVE</h2>
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
            </section>
        </section>
    )
}

export default Groceries