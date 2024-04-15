import React from 'react'

const ImageCard = ({ image }) => {
    return (
        <div className='image-card'>
            <img src={image} alt="" />
        </div>
    )
}

export default ImageCard