import React from 'react'

const ImageCardSmall = ({ image }) => {

    return (
        <>
            <img src={image.url} alt="" />
            <span className='tit'>{image.title}</span>
            <span className='di'>{image.discount}</span>
        </>
    )
}

export default ImageCardSmall