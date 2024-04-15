import React from 'react'
import './related.css';
import Filter from './Filter';
import Products from './Products';
const RelatedProduct = () => {
    return (
        <div className='related-product'>
            <div className="related-col-1">
                <Filter />
            </div>
            <div className="related-col-2">
                <Products />
            </div>
        </div>
    )
}

export default RelatedProduct