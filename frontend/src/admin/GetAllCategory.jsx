import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../features/products/CategorySlice';
import { MdEdit, MdDelete } from "react-icons/md";
import { deleteCategory } from '../features/products/CategorySlice';
const GetAllCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { items, loading, error } = useSelector(state => state.category);
    const handleDelete = (id) => {
        const item = {
            id: id
        }
        dispatch(deleteCategory(item)).then(() => {
            dispatch(getAllCategory());
        })
            .catch((error) => {
                console.error('Error deleting category:', error);
            });


    }
    useEffect(() => {
        dispatch(getAllCategory());
    }, [])
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="a-section tab">
                {
                    loading ? <h1>Loading....</h1> : error ? <>{error}</> :
                        <>
                            <section>
                                <h1>All Product</h1>
                                <div className="tbl-header">
                                    <table style={{ cellpadding: "0", cellspacing: "0", border: "0" }}>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Category</th>
                                                <th>Edit</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="tbl-content">
                                    <table style={{ cellpadding: "0", cellspacing: "0", border: "0" }}>
                                        <tbody>
                                            {
                                                items?.data?.map((item, idx) => (
                                                    <tr key={idx}>
                                                        <td style={{ fontWeight: '200', fontSize: '1rem' }}>{item._id}</td>
                                                        <td>{item.name}</td>
                                                        <td><MdEdit onClick={() => navigate(`/update-category/${item.slug}/${item._id}`)} /> &nbsp; &nbsp; <MdDelete onClick={() => handleDelete(item._id)} /></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </>


                }

            </div>
        </div>
    )
}

export default GetAllCategory