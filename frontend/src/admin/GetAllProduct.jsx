import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../features/products/ProductSlice';
import { MdEdit, MdDelete } from "react-icons/md";
const GetAllProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, loading, error } = useSelector(state => state.products);
    const handleDelete = () => {

    }
    useEffect(() => {
        dispatch(getAllProduct());
        console.log("items=>", items?.items);

    }, [])
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="a-section tab">
                {loading ? <h1>Loading.....</h1> : <>
                    <section>
                        <h1>All Product</h1>
                        <div className="tbl-header">
                            <table style={{ cellpadding: "0", cellspacing: "0", border: "0" }}>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="tbl-content">
                            <table style={{ cellpadding: "0", cellspacing: "0", border: "0" }}>
                                <tbody>
                                    {
                                        items && items?.items?.map((item, idx) => (
                                            <tr key={idx}>
                                                <td style={{ fontWeight: '200', fontSize: '1rem' }}>{item._id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td><MdEdit onClick={() => navigate(`/update-product/${item._id}`)} /> &nbsp; &nbsp; <MdDelete onClick={handleDelete} /></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section>
                </>}




            </div>
        </div>
    )
}

export default GetAllProduct