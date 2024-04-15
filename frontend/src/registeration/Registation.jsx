import React, { useState } from 'react'
import './register.css';
import { userRegister } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Registation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [answer, setAnswer] = useState('');
    const handleRegister = async (e) => {
        //  console.log('hello')
        e.preventDefault();
        // dispatch(userRegister({ name, email, password, phone, address, answer }))
        const { data } = await axios.post('http://localhost:5000/api/v1/register', { name, email, password, phone, address, answer })

        navigate('/login');

    }
    return (
        <div className='register'>
            <h1>SignUp</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='enter name' name="" id="" />
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='enter email' name="" id="" />
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='enter password' name="" id="" />
            <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder='enter phone number' name="" id="" />
            <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder='enter address' name="" id="" />
            <input type="text" onChange={(e) => setAnswer(e.target.value)} placeholder='enter favraite sport' name="" id="" />
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => navigate('/login')}>login</button>
        </div>
    )
}

export default Registation;