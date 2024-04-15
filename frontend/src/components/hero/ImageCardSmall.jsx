import React from 'react'

const ImageCardSmall = ({ image }) => {
    return (
        <div className='image-card-sm'>
            <img src={image.url} alt="" />
            <span className='tit'>{image.title}</span>
            <span className='di'>{image.discount}</span>
        </div>
    )
}

export default ImageCardSmall