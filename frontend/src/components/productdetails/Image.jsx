import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
const Image = ({ product }) => {
    return (
        <>
            <div className="pd-image">
                <img src={`http://localhost:5000/api/v1/get-photo/${product._id}`} alt="product-image" />
            </div>
            <div className="pd-button">
                <button className='add-cart-btn'><IoCartOutline />ADD TO CARD</button>
                <button className='buy-now-btn'><SlEnergy />BUY NOW</button>
            </div>
        </>
    )
}

export default Image