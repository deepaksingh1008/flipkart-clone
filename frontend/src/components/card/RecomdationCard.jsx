import React from 'react'
import './card.css'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';

const RecomdationCard = ({ position, data }) => {
    const { top, left } = position;
    const ite = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/login');

    }

    return (
        <div className='recomodation' style={{ top: top, left: left }}>
            {
                data?.map((item, idx) => (
                    <li key={idx}>
                        <span>{item.icons}</span>
                        <span>{item.name === 'logout' && ite.data ? <li onClick={handleLogout}>Logout</li> : item.name !== 'logout' ? item.name : <Link to='/login'>Login</Link>} </span>
                    </li>

                ))
            }
        </div>
    )
}

export default RecomdationCard