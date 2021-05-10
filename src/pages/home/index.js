import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productAction } from '../../actions/product'
import Product from '../../components/product'
import './home.css'

const Home = () => {
    const { groceriesSnapshot, farmSnapshot } = useSelector( state => state.product )
    const dispatch = useDispatch()

    const fetchProducts = useCallback( async () => {
        await dispatch(productAction.fetchGroceriesSnapshot())
        await dispatch(productAction.fetchFarmSnapshot())
    }, [dispatch])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    
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
                    {
                        farmSnapshot ? (
                            farmSnapshot.map( snapshot => 
                                <Product key={snapshot.id} name={snapshot.prdName} img={snapshot.prdImg} price={snapshot.prdPrice} unit={snapshot.prdUnit} id={snapshot.id} />
                            )
                        ) : null
                    }
                </div>
                <a href="/farm" className="btn btn_large btn_light">View more</a>
            </section>

            <section className="home_section">
                <h2 className="second-level-heading">GROCERIES YOU LOVE</h2>
                <div className="section_grid">
                {
                       groceriesSnapshot ? (
                        groceriesSnapshot.map( snapshot => 
                            <Product key={snapshot.id} name={snapshot.prdName} img={snapshot.prdImg} price={snapshot.prdPrice} unit={snapshot.prdUnit} id={snapshot.id} />
                        )
                       ) : null
                    }
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