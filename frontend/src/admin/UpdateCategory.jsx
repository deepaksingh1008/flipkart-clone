import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory } from '../features/products/CategorySlice';
import toast, { Toaster } from 'react-hot-toast';
import { getSingleCategory } from '../features/products/CategorySlice';
const UpdateCategory = () => {
    const { id, slug } = useParams();
    const navigate = useNavigate();
    console.log("id and slug", id, slug);
    const dispatch = useDispatch();
    const [CategoryName, setName] = useState();
    const category = useSelector(state => state.category);
    const handleUpdateCategory = (e) => {
        e.preventDefault();
        const obj = {
            id,
            updateData: {
                name: CategoryName
            }
        }
        dispatch(updateCategory(obj)).then(() => {
            toast.success('Category Update Successfully');
            setName("");
        })
            .catch((error) => {
                console.error('Error deleting category:', error);
            });
        navigate('/all-category');

    }



    const getCategoryBySlug = () => {
        const obj = {
            slug
        }
        dispatch(getSingleCategory(obj))
    }
    useEffect(() => {
        getCategoryBySlug();
    }, [slug])
    useEffect(() => {
        if (category) {
            setName(category.name)
        }
    }, [category])
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="a-section">
                <input type="text" placeholder='Crete Category' value={CategoryName} onChange={(e) => setName(e.target.value)} className='create-p' />
                <button className='a-btn' onClick={handleUpdateCategory}>Update Category</button>
                <Toaster />
            </div>
        </div>
    )
}

export default UpdateCategory