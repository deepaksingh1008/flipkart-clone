import React from 'react'
import Carousel from '../carousel/Carousel'
import './hero.css'
import TopSection from './TopSection'
import TopSection1 from './TopSection1'
import TopDeals from './TopDeals'
import Image1 from './Image1'
import Fashion from './Fashion'
import Recommended from './Recommended'
import Suggest from './Suggest'
import GoodPrice from './GoodPrice'
import Like from './Like'
import Furniture from './Furniture'
import ElectronicGadgets from './ElectronicGadgets';
import SuperHitDeal from './SuperHitDeal'
const Hero = () => {
    return (
        <>
            <TopSection />
            <Carousel />
            <TopSection1 />
            <TopDeals />
            <Image1 />
            <Fashion />
            <Recommended />
            <Image1 />
            <Suggest />
            <GoodPrice />
            <TopSection1 />
            <Like />
            <TopSection1 />
            <Furniture />
            <TopSection1 />
            <ElectronicGadgets />
            <TopSection1 />
            <SuperHitDeal />

        </>
    )
}

export default Hero