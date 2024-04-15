import React from 'react'
import Sidebar from './Sidebar'
import './admin.css'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className="a-section">
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}

export default Dashboard