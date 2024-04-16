import React, { useEffect, useState } from 'react'
import './productDetails.css'
import ProductDetail from './ProductDetail'
import Image from './Image'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../features/products/ProductSlice'
const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { loading, error, message, items, item } = useSelector(state => state.products);
    useEffect(() => {
        const data = {
            id,
        }
        dispatch(getSingleProduct(data))

    }, [])
    useEffect(() => {
        if (item) {
            setProduct(item);
            console.log('items->>>', item);
        }
    }, [item])
    return (
        <div className='product-details'>
            <div className="pd-col-1">
                <Image product={product} />
            </div>
            <div className="pd-col-2">
                <ProductDetail product={product} />

            </div>
        </div>
    )
}

export default ProductDetails