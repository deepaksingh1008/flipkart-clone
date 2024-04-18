import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


import { addItemToCart, decreaseQuantity, removeItemFromCart } from '../../features/cart/cartSlice'
const CartProduct = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="cart-product">
                <img src={`http://localhost:5000/api/v1/get-photo/${item?._id}`} alt="product image" style={{ height: '300px', width: '300px' }} />

                <div>
                    <h3>{item.title}</h3>
                    <p style={{ fontSize: '1.3rem', fontWeight: '500', color: 'brown' }}>{item?.color}</p>
                    <p style={{ fontSize: '1.4rem', fontWeight: '500', color: 'brown', margin: '5px 0px' }}>Seller:SPLIPRLItech</p>
                    <div className='pd-price'>
                        <span style={{ fontWeight: '700', fontSize: '2.2rem' }}>{item?.price}</span>
                        <span style={{ fontWeight: '400', fontSize: '1.4rem', textDecoration: 'line-through', color: 'brown' }}>{item?.price}</span>
                        <span style={{ fontWeight: '400', fontSize: '1.4rem', color: 'green' }}>{item?.discount}% off</span>
                    </div>
                </div>
                <p>Delivery by Thu Mar 28 | <span style={{ fontSize: '1.2rem', fontWeight: '500', textDecoration: 'line-through' }}>₹40 Free</span></p>
            </div>
            <div className="quantity">
                <div className='operation' onClick={() => dispatch(decreaseQuantity(item))}>-</div>
                <div className='num'>{item?.quanti}</div>
                <div className='operation' onClick={() => dispatch(addItemToCart(item))}>+</div>
                <button className="save">SAVE FOR LATER</button>
                <button className="save" onClick={() => dispatch(removeItemFromCart(item))}>REMOVE</button>
            </div>
            <div className="cart-button">
                <button className='buy-now-btn' style={{ float: 'right' }}>PLACE ORDER</button>
            </div>
        </>
    )
}

export default CartProduct