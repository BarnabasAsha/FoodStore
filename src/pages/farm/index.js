import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productAction } from '../../actions/product'
import Product from '../../components/product'

const Farm = () => {
    const dispatch = useDispatch()
    const farmList = useSelector( state => state.product.farm )

    const fetchFarm = () => {
        dispatch(productAction.fetchFarm())
    }

    useEffect(() => {
        fetchFarm()
    }, [])
    return (
        <section>
            <header className="section_heading">
                <h1 className="first-level-heading">Farm Fresh</h1>
            </header>
            <section>
            <h2 className="second-level-heading">FRESH FROM FARM</h2>
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
            </section>
        </section>
    )
}

export default Farm