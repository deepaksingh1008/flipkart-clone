import React, { useEffect } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import ImageCardSmall from './ImageCardSmall';
import { useNavigate } from 'react-router-dom';
import { getAllCategory } from '../../features/products/CategorySlice';
import { useDispatch, useSelector } from 'react-redux';
const SuperHitDeal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, items } = useSelector(state => state.category);
    useEffect(() => {
        dispatch(getAllCategory());
        console.log('i->', items);
    }, [])

    return (
        <div className='top-deals'>
            <div className="top-deal-head">
                <h2>Super Hot Deal</h2>
                <GrFormPrevious />
            </div>
            <div className="top-deal-items">
                <div className='image-card-sm' onClick={() => navigate(`/related-product/${items && items?.data[4]?.slug}`)}>
                    <ImageCardSmall image={{
                        url: 'https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/w0ACRcy407Pb14QWUoSQ/product-images/BHTS22043-BLACK-1.jpg',
                        title: 'Being Human & More',
                        discount: '60-80% Off'

                    }} />
                </div>
                <div className='image-card-sm' onClick={() => navigate(`/related-product/${items && items?.data[0]?.slug}`)}>
                    <ImageCardSmall image={{
                        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/c/g/x/8-atg-657-8-action-black-original-imagn4eywz5nrsy5.jpeg?q=70',
                        title: 'action Action Athleo ATG-657 Light',
                        discount: '20-70% Off'

                    }} />
                </div>

                <div className='image-card-sm' onClick={() => navigate(`/related-product/${items && items?.data[1]?.slug}`)}>
                    <ImageCardSmall image={{
                        url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/h/m/o/15-16-years-girls-oversize-512-515-nick-and-jones-original-imagsvfyabpjhpuh.jpeg?q=70',
                        title: 'NICK AND JONES Girls Printed Pure Cotton T Shirt ',
                        discount: '20-70% Off'

                    }} />
                </div>
                <div className='image-card-sm' onClick={() => navigate(`/related-product/${items && items?.data[2]?.slug}`)}>
                    <ImageCardSmall image={{
                        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/fan/y/r/e/-original-imagxrhkubnjxzyr.jpeg?q=70',
                        title: 'ADIDAS ORIGINALS Printed Men Orange Regular ',
                        discount: '20-70% Off'

                    }} />
                </div>
                <div className='image-card-sm' onClick={() => navigate(`/related-product/${items && items?.data[3]?.slug}`)}>
                    <ImageCardSmall image={{
                        url: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/d/n/-original-imagzz85mgezrcpe.jpeg?q=70',
                        discount: '20-70% Off'

                    }} />
                </div>

                <div className='image-card-sm' onClick={() => navigate(`/related-product/${items && items?.data[5]?.slug}`)}>
                    <ImageCardSmall image={{
                        url: 'https://rukminim2.flixcart.com/image/612/612/l2m78280/watch/u/0/u/1-digital-kids-boys-g-sport-look-band-shock-chronograph-original-imagdx3feej5jtfg.jpeg?q=70',
                        title: 'REEBOK Stride Runner M Running Shoes',
                        discount: '20-70% Off'

                    }} />
                </div>
                <div className='image-card-sm' onClick={() => navigate(`/related-product/${items && items?.data[6]?.slug}`)}>
                    <ImageCardSmall image={{
                        url: 'https://rukminim2.flixcart.com/image/612/612/kxjav0w0/bedsheet/9/w/6/flowerjaal-flowerjaal-1-flat-vnv-creation-original-imag9yrdyhchcthm.jpeg?q=70',
                        title: 'Men Solid Polo Neck Cotton Blend Orange T-Shirt',
                        discount: '20-70% Off'

                    }} />
                </div>

            </div>
        </div >
    )
}

export default SuperHitDeal