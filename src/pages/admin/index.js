import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { adminAction } from '../../actions/admin'
import { productAction } from '../../actions/product'
import './admin.css'

const initialValues = {
    id: '',
    prdName: '',
    prdQuan: 1,
    prdUnit: '',
    prdPrice: 1,
    prdImg: '',
    prdDesc: '',
    prdType: ''
}

const Admin = () => {
    const dispatch = useDispatch()
    const [prdData, updateData] = useState(initialValues)

    const productsInStock = useSelector(state => state.admin.inStock)
    const products = useSelector(state => state.product.market)

    const handleChange = (e) => {
        const { name, value } = e.target
        updateData({
            ...prdData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateData({
            ...prdData,
            id: 'prd' + Math.floor(Math.random() * Date.now())
        })
        dispatch(adminAction.addNewPrd({...prdData, id: 'prd' + Math.floor(Math.random() * Date.now())}))
        updateData(initialValues)
    }

    const fetchProducts = useCallback((e) => {
        dispatch(productAction.fetchMarket())
    }, [dispatch])

    useEffect(() => {
        fetchProducts()
    }, [productsInStock, fetchProducts])

    return (
        <section>
            <div className="admin_wrapper">
                <div className="admin_add">
                    <form onSubmit={handleSubmit} className="admin_add_form">
                        <div className="form_group">
                            <label htmlFor="prdName">Product Name</label>
                            <input type="text" id="prdName" value={prdData.prdName} onChange={handleChange} name="prdName" placeholder="Enter product name" required />
                        </div>
                        <div>
                            <div className="form_group">
                                <label htmlFor="prdQuan">Product Quantity</label>
                                <input type="number" id="prdQuan" value={prdData.prdQuan} onChange={handleChange} name="prdQuan" placeholder="Quantity" required />
                            </div>
                            <div className="form_group">
                                <label htmlFor="prdUnit">Product Unit</label>
                                <select id="prdUnit" name="prdUnit" value={prdData.prdUnit} onChange={handleChange} required>
                                    <option>Select Unit</option>
                                    <option>Kg</option>
                                    <option>Pcs</option>
                                    <option>Kongo</option>
                                </select>
                            </div>
                            <div className="form_group">
                                <label htmlFor="prdType">Product Type</label>
                                <select id="prdType" name="prdType" value={prdData.prdType} onChange={handleChange} required>
                                    <option>Select Type</option>
                                    <option>Grocery</option>
                                    <option>Farm</option>
                                </select>
                            </div>
                            <div className="form_group">
                                <label htmlFor="prdPrice">Product Price</label>
                                <input type="number" id="prdPrice" name="prdPrice" value={prdData.prdPrice} onChange={handleChange} placeholder="Price" required />
                            </div>
                        </div>
                        <div className="form_group">
                            <label htmlFor="prdImg">Product Image</label>
                            <input type="text" id="prdImg" name="prdImg" placeholder="Img link" value={prdData.prdImg} onChange={handleChange} required />
                        </div>
                        <div className="form_group">
                            <label htmlFor="prdDesc">Product Description</label>
                            <textarea type="text" id="prdDesc" name="prdDesc" value={prdData.prdDesc} onChange={handleChange} placeholder="Enter product description" required />
                        </div>
                        <button className="btn btn_xl btn_dark">Add Product</button>
                    </form>
                </div>
                <div className="admin_store">
                    <h2 className="second-level-heading">Products in Stock</h2>
                    {
                        products.length ? (
                            products.map(product => {
                                return (
                                    <div key={product.id} className="stock_prd">
                                        <div className="stock_prd_img">
                                            <img src={product.prdImg} alt="" />
                                        </div>
                                        <div>{product.prdName}</div>
                                        <div>{product.prdQuan} in stock</div>
                                        <div>NGN{product.prdPrice}/{product.prdUnit}</div>
                                    </div>
                                )
                            })
                        ) : (
                            <div>No products in stock please add products</div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Admin