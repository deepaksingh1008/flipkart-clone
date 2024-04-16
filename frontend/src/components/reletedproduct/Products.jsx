import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductRelated } from '../../features/products/ProductSlice'
const Products = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.products)
    console.log(slug);
    useEffect(() => {
        const data = {
            slug: slug
        }
        dispatch(getProductRelated(data))
        // console.log('items->>', items);
    }, [dispatch, slug])

    return (
        <div className='product'>
            {
                loading ? <h1>Loading.....</h1> : items && items.length > 0 ? items?.map((item, idx) => (
                    <ProductCard item={item} key={idx} />
                )) : <h1>Item Not Found</h1>



            }

        </div>
    )
}

export default Products