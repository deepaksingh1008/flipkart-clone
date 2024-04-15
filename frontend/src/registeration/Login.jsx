import React, { useState } from 'react'
import './register.css';
import { userLogin } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('http://localhost:5000/api/v1/login', { email, password });
        // dispatch(userLogin({ email, password }));
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/');
    }
    return (
        <div className='register'>
            <h1>SignUp</h1>

            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='enter email' name="" id="" />
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='enter password' name="" id="" />
            <button onClick={handleRegister}>Login</button>
            <button>ForgotPassword</button>
        </div>
    )
}

export default Login;