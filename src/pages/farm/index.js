import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { productAction } from '../../actions/product'
import Product from '../../components/product'

const Farm = () => {
    const dispatch = useDispatch()
    const farmList = useSelector( state => state.product.farm )

    const fetchFarm = useCallback(() => {
        dispatch(productAction.fetchFarm())
    }, [dispatch])

    useEffect(() => {
        fetchFarm()
    }, [fetchFarm])
    return (
        <section>
            <nav className="navigation">
                <Link to="/">Home</Link> &gt; <Link className="navigation_active" to="/farm">Farm</Link>
            </nav>
            <header className="section_heading">
                <h1 className="first-level-heading">Farm Fresh</h1>
            </header>
            <section>
            <h2 className="second-level-heading">FRESH FROM FARM</h2>
               <div className="section_grid_wrapper">
               <div className="section_grid">
                {
                        farmList.length ? (
                            farmList.map( item => {
                                return (
                                    <Product id={item.id} name={item.prdName} img={item.prdImg} price={item.prdPrice} unit={item.prdUnit} />
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

export default Farm