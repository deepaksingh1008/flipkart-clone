import React from 'react'
import ImageCardSmall from './ImageCardSmall'
import { GrFormPrevious } from "react-icons/gr";
const Suggest = () => {
    return (
        <div className='top-deals'>
            <div className="top-deal-head">
                <h2>Suggest for You</h2>
                <GrFormPrevious />
            </div>
            <div className="top-deal-items">
                <ImageCardSmall image={{
                    url: 'https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/w0ACRcy407Pb14QWUoSQ/product-images/BHTS22043-BLACK-1.jpg',
                    title: 'Being Human & More',
                    discount: '60-80% Off'

                }} />
                <ImageCardSmall image={{
                    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/c/g/x/8-atg-657-8-action-black-original-imagn4eywz5nrsy5.jpeg?q=70',
                    title: 'action Action Athleo ATG-657 Light',
                    discount: '20-70% Off'

                }} />
                <ImageCardSmall image={{
                    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/h/m/o/15-16-years-girls-oversize-512-515-nick-and-jones-original-imagsvfyabpjhpuh.jpeg?q=70',
                    title: 'NICK AND JONES Girls Printed Pure Cotton T Shirt ',
                    discount: '20-70% Off'

                }} />
                <ImageCardSmall image={{
                    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/short/k/y/u/-original-imags9v8gfyzgypc.jpeg?q=70',
                    title: 'ADIDAS ORIGINALS Printed Men Orange Regular ',
                    discount: '20-70% Off'

                }} />
                <ImageCardSmall image={{
                    url: 'https://rukminim2.flixcart.com/image/612/612/l2m78280/watch/u/0/u/1-digital-kids-boys-g-sport-look-band-shock-chronograph-original-imagdx3feej5jtfg.jpeg?q=70',
                    title: 'DANIEL WELLINGTON Classic ST Mawes Black color Round',
                    discount: '20-70% Off'

                }} />
                <ImageCardSmall image={{
                    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/q/o/-original-imagya7hqwhf2gnv.jpeg?q=70',
                    title: 'REEBOK Stride Runner M Running Shoes',
                    discount: '20-70% Off'

                }} />
                <ImageCardSmall image={{
                    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/z/b/-original-imagugya7ab48yrb.jpeg?q=70',
                    title: 'Men Solid Polo Neck Cotton Blend Orange T-Shirt',
                    discount: '20-70% Off'

                }} />

            </div>
        </div>
    )
}

export default Suggest