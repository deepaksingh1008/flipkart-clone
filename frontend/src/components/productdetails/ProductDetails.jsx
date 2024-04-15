import React from 'react'
import './productDetails.css'
import ProductDetail from './ProductDetail'
import Image from './Image'
const ProductDetails = () => {
    return (
        <div className='product-details'>
            <div className="pd-col-1">
                <Image />
            </div>
            <div className="pd-col-2">
                <ProductDetail />
            </div>
        </div>
    )
}

export default ProductDetails