import React, { useEffect, useState } from 'react'
import './carousel.css'
import { GrPrevious } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { carsoleImage } from './data'
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevious = () => {

        setCurrentIndex(currentIndex === 0 ? carsoleImage.length - 1 : currentIndex - 1);
    }
    const handleForward = () => {

        setCurrentIndex(currentIndex === carsoleImage.length - 1 ? 0 : currentIndex + 1);
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleForward();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex])
    return (
        <div className='carousel'>
            <div className="image">
                <img src={carsoleImage[currentIndex].url} alt="" />
                <div className="next" onClick={handleForward}><IoIosArrowForward /></div>
                <div className="prev" onClick={handlePrevious}><GrPrevious /></div>
                <div className="dot">
                    <span className={currentIndex === 0 ? 'active' : ''}></span>
                    <span className={currentIndex === 1 ? 'active' : ''}></span>
                    <span className={currentIndex === 2 ? 'active' : ''}></span>
                    <span className={currentIndex === 3 ? 'active' : ''}></span>
                    <span className={currentIndex === 4 ? 'active' : ''}></span>
                </div>
            </div>

        </div>
    )
}

export default Carousel