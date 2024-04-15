import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
const AdminPrivateRoute = () => {
    const auth = localStorage.getItem('user');
    const authentication = JSON.parse(auth);

    return authentication.user.role === 'admin' ? <Outlet /> : <Navigate to='/' />

}

export default AdminPrivateRoute