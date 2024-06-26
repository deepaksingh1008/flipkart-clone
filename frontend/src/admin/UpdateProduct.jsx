import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../features/products/ProductSlice';
import { updateProduct } from '../features/products/ProductSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';
const UpdateProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [offer, setOffer] = useState('');
    const [discount, setDiscount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [stock, setStock] = useState(true);
    const [trending, setTrending] = useState(true);
    const [color, setColor] = useState('');
    const [category, setCategory] = useState();
    const { item, loading, error } = useSelector(state => state.products);
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("offer", offer);
        formData.append("discount", discount)
        formData.append("quantity", quantity);
        formData.append("stock", stock);
        formData.append("trending", trending);
        formData.append("color", color);
        formData.append("category", category);
        console.log(formData)
        const obj = {
            id,
            formData
        }
        dispatch(updateProduct(obj)).then(() => {
            toast.success('Product Update Successfully');

        })
            .catch((error) => {
                console.error('Error deleting category:', error);
            });
        navigate('/all-product');


    }


    useEffect(() => {
        const data = {
            id
        }
        dispatch(getSingleProduct(data));

    }, [])
    useEffect(() => {
        if (item) {
            // console.log("Item->", item);
            setTitle(item?.title);
            setDescription(item?.description);
            setColor(item?.color);
            setCategory(item?.category?.name);
            setDiscount(item?.disconnect);
            setOffer(item?.offer);
            setPrice(item?.price);
            setQuantity(item?.quantity);
            setStock(item?.stock);
            setTrending(item?.trending);
        }
    }, [item])
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="a-section add-product">
                <input type="text" placeholder='category' value={category || ''} onChange={(e) => setCategory(e.target.value)} disabled={true} />
                <input type="text" name="" id="" placeholder='write title' value={title || ''} onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" placeholder='write description' value={description || ''} onChange={(e) => setDescription(e.target.value)}></textarea>

                <input type="number" placeholder='price' value={price || ''} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='offer' value={offer || ''} onChange={(e) => setOffer(e.target.value)} />
                <input type="text" placeholder='discount' value={discount || ''} onChange={(e) => setDiscount(e.target.value)} />
                <input type="text" placeholder='quantity' value={quantity || ''} onChange={(e) => setQuantity(e.target.value)} />
                <input type="text" placeholder='stock' value={stock || ''} onChange={(e) => setStock(e.target.value)} />
                <input type="text" placeholder='Trending' value={trending || ''} onChange={(e) => setTrending(e.target.value)} />
                <input type="text" placeholder='Color' value={color || ''} onChange={(e) => setColor(e.target.value)} />
                <button onClick={handleUpdateProduct}>Update Product</button>
                <Toaster />
            </div>

        </div>
    )
}
export default UpdateProduct;
