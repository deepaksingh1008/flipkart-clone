import React, { useEffect, useState } from 'react'
import './Header.css';
import logo from '../../assets/Flipkart-logo.png';
import { BsCart3 } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import RecomdationCard from '../card/RecomdationCard';
import { RiCoinsFill } from "react-icons/ri";
import { CiCirclePlus, CiLogout } from "react-icons/ci";
import { FaHeart, FaGift } from "react-icons/fa";
import { RiCoupon3Line, RiCustomerServiceLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { FcAdvertising } from "react-icons/fc";
import { MdOutlineFileDownload } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { checkLogin, logout } from '../../features/auth/authSlice';
// const Header = () => {
//     const [profile, setProfile] = useState({});
//     const { items } = useSelector(state => state.user);
//     console.log('item=>', items?.user);
//     const [pro, setPro] = useState(false);
//     const [service, setService] = useState(false);
//     const [profileContent, setProfileContent] = useState([
//         {
//             name: "My Profile",
//             icons: <CgProfile />
//         },
//         {
//             name: "SuperCoin Zone",
//             icons: <RiCoinsFill />
//         },
//         {
//             name: "Flipkart Plus Zone",
//             icons: <CiCirclePlus />
//         },
//         {
//             name: "Wishlsit (1)",
//             icons: <FaHeart />
//         },
//         {
//             name: "Coupons",
//             icons: <RiCoupon3Line />
//         },
//         {
//             name: "Gift Cards",
//             icons: <FaGift />
//         },
//         {
//             name: "Notification",
//             icons: <IoIosNotifications />
//         },
//         {
//             name: "logout",
//             icons: <CiLogout />
//         },
//     ]);
//     const [servicesContent, setServicesContent] = useState([
//         {
//             name: "Notification Preferences",
//             icons: <IoIosNotifications />
//         },
//         {
//             name: "24x7 Customer Care",
//             icons: <RiCustomerServiceLine />
//         },
//         {
//             name: "Advertise",
//             icons: <FcAdvertising />
//         },
//         {
//             name: "Download App",
//             icons: <MdOutlineFileDownload />
//         },
//     ]);
//     useEffect(() => {
//         const handleMouseMove = () => {
//             setPro(true);
//             setProfile({ top: '70px', left: '65%' });
//         }
//         const handleSer = () => {
//             setService(true);
//             setProfile({ top: '70px', left: '75%' })
//         }
//     }, [])
//     return (
//         <div className='header'>
//             <div className='logo'>
//                 <img src={logo} alt="" />
//             </div>
//             <div className='search'>
//                 <input type="text" placeholder='Search for Products,Brands...' />
//             </div>
//             <div className='profile' onMouseMove={() => handleMouseMove()} onMouseOut={() => setPro(false)}>
//                 <CgProfile />
//                 <span>{items?.user?.name ? items.user.name : <Link to='/login'>Login</Link>}</span>
//                 <span id='arrow'>^</span>
//                 {

//                     pro ? <RecomdationCard position={profile} data={profileContent} /> : null
//                 }

//             </div>
//             <div className='cart'>
//                 <BsCart3 /><span id='Cart-value'>0</span>
//             </div>
//             <div className='seller'>
//                 <GoGift />
//             </div>
//             <div className='service' onMouseMove={() => handleSer()} onMouseOut={() => setService(false)}>
//                 <span></span><span></span><span></span>
//                 {

//                     service ? <RecomdationCard position={profile} data={servicesContent} /> : null
//                 }
//             </div>
//         </div>
//     )
// }

// export default Header



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let data = localStorage.getItem('user');
    data = JSON.parse(data);
    console.log("Data=>", data);
    // const { items } = useSelector(state => state.user);
    // const { data } = useSelector(state => state.user);
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/login')
    }
    const handleAdmin = (value) => {
        if (value === 'Dashboard') {
            navigate('/dashboard');
        }
    }

    return (
        <>
            <div className="header">
                <div className='logo'>
                    <img src={logo} alt="logo-image" onClick={() => navigate('/')} />
                </div>
                {data ? <><div className='search'>
                    <input type="text" placeholder='Search for Products,Brands...' />
                </div>
                    <div className='profile'  >
                        <CgProfile />
                        <span>{data?.user?.name ? data.user.name : null}</span>
                        <span id='arrow'>^</span>
                    </div>
                    <div className='cart'>
                        <BsCart3 /><span id='Cart-value'>0</span>
                    </div>
                    <div className='seller'>
                        <GoGift />
                    </div>
                    <div className="logout">
                        <li onClick={handleLogout}>Logout</li>
                    </div>
                    {data?.user?.role === 'admin' ? <div className="admin">
                        <select onChange={(e) => handleAdmin(e.target.value)}>
                            <option value="Admin">Admin</option>
                            <option value="Dashboard">Dashboard</option>
                        </select>
                    </div> : null}
                    <div className='service'>
                        <span></span><span></span><span></span>
                    </div></> : <><div className="signup">
                        <Link to={'/register'}>Register</Link>
                    </div>
                    <div className="login">
                        <Link to={'/login'}>Login</Link>
                    </div></>}


            </div>
        </>
    )
}

export default Header