import React from 'react'

const CartProduct = () => {
    return (
        <>
            <div className="cart-product">
                <img src="https://rukminim2.flixcart.com/image/224/224/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=90" alt="" />

                <div>
                    <h3>Canon R100 Mirrorless Camera RF-S 18-45</h3>
                    <p style={{ fontSize: '1.3rem', fontWeight: '500', color: 'brown' }}>Black</p>
                    <p style={{ fontSize: '1.4rem', fontWeight: '500', color: 'brown', margin: '5px 0px' }}>Seller:SPLIPRLItech</p>
                    <div className='pd-price'>
                        <span style={{ fontWeight: '700', fontSize: '2.2rem' }}>₹47,990</span>
                        <span style={{ fontWeight: '400', fontSize: '1.4rem', textDecoration: 'line-through', color: 'brown' }}>₹47,990</span>
                        <span style={{ fontWeight: '400', fontSize: '1.4rem', color: 'green' }}>26% off</span>
                    </div>
                </div>
                <p>Delivery by Thu Mar 28 | <span style={{ fontSize: '1.2rem', fontWeight: '500', textDecoration: 'line-through' }}>₹40 Free</span></p>
            </div>
            <div className="quantity">
                <div className='operation'>-</div>
                <div className='num'>1</div>
                <div className='operation'>+</div>
                <button className="save">SAVE FOR LATER</button>
                <button className="save">REMOVE</button>
            </div>
            <div className="cart-button">
                <button className='buy-now-btn' style={{ float: 'right' }}>PLACE ORDER</button>
            </div>
        </>
    )
}

export default CartProduct