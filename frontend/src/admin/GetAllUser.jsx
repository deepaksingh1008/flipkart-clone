import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';
import { MdEdit, MdDelete } from "react-icons/md";
const GetAllUser = () => {

    const [user, setUser] = useState([]);
    const auth = localStorage.getItem('user');
    const token = JSON.parse(auth).token;
    //console.log(token)

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/v1/getAllUser', {
                headers: {
                    Authorization: token,
                }
            });
            console.log("user data ->", data)
            setUser(data.user);
        }
        catch (error) {
            return error
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="a-section tab">

                <section>
                    <h1>All Product</h1>
                    <div className="tbl-header">
                        <table style={{ cellpadding: "0", cellspacing: "0", border: "0" }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table style={{ cellpadding: "0", cellspacing: "0", border: "0" }}>
                            <tbody>
                                {
                                    user?.map((item, idx) => (
                                        <tr key={idx}>
                                            <td style={{ fontWeight: '200', fontSize: '1rem' }}>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.address}</td>
                                            <td><MdEdit /> &nbsp; &nbsp; <MdDelete /></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default GetAllUser