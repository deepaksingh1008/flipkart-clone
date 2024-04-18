import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <>
            <div className="a-sidebar">
                <Link to={"/create-product"}>Create Product</Link>
                <Link to={'/create-category'}>Create Category</Link>
                <Link to={'/all-user'}>All User</Link>
                <Link to={'/all-product'}>All Product</Link>
                <Link to={'/all-category'}>All Category</Link>
                <Link to={'/update-product'}>Update Product</Link>
                <Link to={'/update-category'}>Update Category</Link>
                <Link to={'/get-all-order'}>All Order</Link>
            </div>

        </>
    )
}

export default Sidebar