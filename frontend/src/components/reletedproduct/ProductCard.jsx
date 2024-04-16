import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ item }) => {
    // const { _id, title, description, offer, price, title } = item
    // console.log(item);
    const navigate = useNavigate();
    return (
        <div className='p-card' onClick={() => navigate(`/product-details/${item._id}`)}>
            <div className='p-fav'>
                <FaRegHeart />
            </div>
            <div className='p-img'>
                <img src={`http://localhost:5000/api/v1/get-photo/${item._id}`} alt="product image" />
            </div>

            <div className='p-title'>
                <p className='p-t'>{item.title}</p>
                <p className='p-size'>2 X 200g</p>
                <p className='p-rating'><span>4.2</span> (1,264)</p>
                <p className='p-price'><span className='p-price-1'>Rs {item.price}</span ><span className='p-dis'>900</span><span className='p-off'>{item.offer}% off</span></p>
            </div>
        </div >
    )
}

export default ProductCard