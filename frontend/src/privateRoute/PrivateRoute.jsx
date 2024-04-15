import { checkLogin } from '../features/auth/authSlice';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
const PrivateRoute = () => {
    // const dispatch = useDispatch();
    // const user = useSelector(state => state.user);

    // useEffect(() => {
    //     dispatch(checkLogin());
    // }, [dispatch])
    // const isAuth = user?.items;
    const auth = localStorage.getItem('user');
    const authentication = JSON.parse(auth);

    return authentication ? <Outlet /> : <Navigate to='/register' />
}

export default PrivateRoute