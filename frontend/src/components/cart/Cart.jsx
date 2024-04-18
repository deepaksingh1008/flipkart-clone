import CartProduct from './CartProduct';
import './cart.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DropIn from "braintree-web-drop-in-react";
import { useSelector, useDispatch } from 'react-redux'
import { getPrice } from '../../features/cart/cartSlice';
import { clearCart } from '../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const login = localStorage.getItem('user');
    const user = JSON.parse(login);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [clientToken, setClientToken] = useState("");
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false)
    //get payment token


    const { items, price } = useSelector(state => state.cart);
    useEffect(() => {
        dispatch(getPrice());
    }, [price, dispatch])
    const getToken = async () => {
        try {

            const { data } = await axios.get('http://localhost:5000/api/v1//braintree/token');
            setClientToken(data?.clientToken)

            // console.log('token->', data?.clientToken)

        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getToken();
    }, [user.token])

    //handle payment
    const handlePayment = async () => {
        try {
            setLoading(true);
            const { nonce } = await instance.requestPaymentMethod();
            const { data } = await axios.post('http://localhost:5000/api/v1/braintree/payment', {
                nonce,
                cart: items,
            }, {
                headers: {
                    Authorization: user.token,
                }
            });

            dispatch(clearCart());
            setLoading(true);
            navigate('/order')

        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='pd-cart' style={{ height: '100vh' }}>
            <div className="cart-col-1">
                {
                    items && items.length > 0 ? items.map((item, idx) => (
                        <CartProduct key={idx} item={item} />
                    )) : <>No Product Added in cart</>
                }


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
                    </span><span style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>{price}</span>
                </div>
                <hr style={{ opacity: '0.1' }} />
                <div style={{ fontSize: '1.4rem', fontWeight: '600', color: 'green', padding: '5px' }}>You will save ₹17,005 on this order</div>
            </div>
            <div className="payment" style={{ width: '400px', height: '500px' }}>
                {clientToken && (
                    <DropIn
                        options={{ authorization: clientToken }}
                        onInstance={instance => setInstance(instance)}
                    />
                )}
                <button disabled={!user || !instance} onClick={handlePayment}>{loading ? 'Processing' : 'Pay now'}</button>



            </div>
        </div>
    )
}

export default Cart