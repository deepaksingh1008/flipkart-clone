import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';
import moment from 'moment';
const AllOrder = () => {
    let user = localStorage.getItem('user');
    const auth = JSON.parse(user);
    const [order, setOrder] = useState([]);
    const [status, setStatus] = useState(["Not Process", "Processing", "Shipped", "delivered", "cancel"]);
    const [changeStatus, setChangeStatus] = useState("")
    const getOrder = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/v1/all-order', {
                headers: {
                    Authorization: auth?.token
                }
            })
            // console.log(data.orders);
            setOrder(data.orders);
            // console.log('order->', order);
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleStatus = async (value, orderId) => {
        console.log('status->', value)
        try {
            const { data } = await axios.put(`http://localhost:5000/api/v1/update-order/${orderId}`, { status: value }, {
                headers: {
                    Authorization: auth?.token
                }
            })
            getOrder();
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (auth?.token) {
            getOrder();
        }
    }, [auth?.token])
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="a-section tab">
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
                                <td>
                                    <select value={item?.status} onChange={(e) => handleStatus(e.target.value, item._id)}>
                                        {status.map((val, i) => (
                                            <option key={i} value={val}>{val}</option>
                                        ))}
                                    </select>
                                </td>
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
        </div>
    )
}

export default AllOrder