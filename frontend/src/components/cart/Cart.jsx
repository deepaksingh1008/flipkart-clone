import CartProduct from './CartProduct';
import './cart.css';
import React from 'react'

const Cart = () => {
    return (
        <div className='pd-cart'>
            <div className="cart-col-1">
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                {/* <div className="cart-product">
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
                </div> */}
            </div>
            <div className="cart-col-2">
                <div className="price-details" style={{ padding: '10px', fontSize: '1.3rem', fontWeight: '600', }}>
                    PRICE DETAILS
                </div>
                <hr style={{ opacity: '0.1' }} />
                <div><span>Price (1 item)</span><span>₹64,995</span></div>
                <div><span>Discount</span><span>− ₹17,005</span></div>
                <div><span>Delivery Charges
                </span><span style={{ color: 'green', textDecoration: 'line-through' }}>₹40</span></div>

                <div>
                    <span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Total Amount
                    </span><span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>₹47,990</span>
                </div>
                <hr style={{ opacity: '0.1' }} />
                <div style={{ fontSize: '1.4rem', fontWeight: '600', color: 'green', padding: '5px' }}>You will save ₹17,005 on this order</div>
            </div>
        </div>
    )
}

export default Cart