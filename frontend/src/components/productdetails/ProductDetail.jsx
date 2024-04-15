import React from 'react'

const ProductDetail = () => {
    return (
        <>
            <div className="pd-title">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </div>
            <div className="pd-rating">
                <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'white', background: 'green', padding: '4px 20px', borderRadius: '5px' }}>4.7</span>
                <span style={{ fontWeight: '600', fontSize: '1.3rem', color: 'brown' }}>202 Ratings & Reviews</span>
            </div>
            <p style={{ fontWeight: '600', fontSize: '1.3rem', color: 'green' }}>Special price</p>
            <div className="pd-price">
                <span style={{ fontWeight: '700', fontSize: '2.2rem' }}>₹47,990</span>
                <span style={{ fontWeight: '400', fontSize: '1.4rem', textDecoration: 'line-through', color: 'brown' }}>₹47,990</span>
                <span style={{ fontWeight: '400', fontSize: '1.4rem', color: 'green' }}>26% off</span>
            </div>
            <div className="discription"></div>
        </>
    )
}

export default ProductDetail