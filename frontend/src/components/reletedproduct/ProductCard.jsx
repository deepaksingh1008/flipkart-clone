import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
const ProductCard = () => {
    return (
        <div className='p-card'>
            <div className='p-fav'>
                <FaRegHeart />
            </div>
            <div className='p-img'>
                <img src="https://rukminim2.flixcart.com/image/612/612/kzsqykw0/snack-savourie/u/p/4/400-roasted-and-salted-cashew-nuts-400g-2-200g-box-2-boyo-original-imagbqc4ywhubsva.jpeg?q=70" alt="" />
            </div>

            <div className='p-title'>
                <p className='p-t'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debiti</p>
                <p className='p-size'>2 X 200g</p>
                <p className='p-rating'><span>4.2</span> (1,264)</p>
                <p className='p-price'><span className='p-price-1'>Rs 385</span ><span className='p-dis'>900</span><span className='p-off'>57% off</span></p>
            </div>
        </div >
    )
}

export default ProductCard