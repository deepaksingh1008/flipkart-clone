import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment';
const Order = () => {
    let user = localStorage.getItem('user');
    const auth = JSON.parse(user);
    const [order, setOrder] = useState([]);


    const getOrder = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/v1/order', {
                headers: {
                    Authorization: auth?.token
                }
            })
            setOrder(data.orders);
            console.log('order->', order);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (auth?.token) {
            getOrder();
        }
    }, [auth?.token])
    return (
        <div className='u-order' style={{ background: '#4287f5', color: 'white', width: '100%', height: '100%' }}>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Buyer</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {order && order.length > 0 ? order?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.status}</td>
                            <td>{item?.buyer?.name}</td>
                            <td>{moment(item?.createAt).fromNow()}</td>
                            <td>{item?.payment?.success ? 'Success' : 'Failed'}</td>
                            <td>
                                {item?.products?.length}
                            </td>
                        </tr>
                    )) : <><h1>Loading....</h1></>}
                </tbody>
            </table>

        </div>
    )
}

export default Order;