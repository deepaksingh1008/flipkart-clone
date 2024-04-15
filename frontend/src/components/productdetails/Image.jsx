import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
const Image = () => {
    return (
        <>
            <div className="pd-image">
                <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70" alt="" />
            </div>
            <div className="pd-button">
                <button className='add-cart-btn'><IoCartOutline />ADD TO CARD</button>
                <button className='buy-now-btn'><SlEnergy />BUY NOW</button>
            </div>
        </>
    )
}

export default Image