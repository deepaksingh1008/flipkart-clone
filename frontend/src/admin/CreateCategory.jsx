import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch } from 'react-redux';
import { createCategory } from '../features/products/CategorySlice';
import toast, { Toaster } from 'react-hot-toast';
const CreateCategory = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const handleCreateCategory = (e) => {
        e.preventDefault();
        dispatch(createCategory({ name }))
        toast.success('Category Created Successfully');
        setName("");

    }
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="a-section">
                <input type="text" placeholder='Crete Category' value={name} onChange={(e) => setName(e.target.value)} className='create-p' />
                <button className='a-btn' onClick={handleCreateCategory}>Create Category</button>
                <Toaster />
            </div>
        </div>
    )
}

export default CreateCategory