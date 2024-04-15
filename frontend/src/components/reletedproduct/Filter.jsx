import React from 'react'

const Filter = () => {
    return (
        <div className='filter'>
            <h2>Filters</h2>
            <hr />
            <h3>Price</h3>
            <div className='price'>
                <div>
                    <input type="checkbox" />
                    <span>100 to 200</span>

                </div>
                <div>
                    <input type="checkbox" />
                    <span>200 to 300</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>200 to 300</span>
                </div>
                <div>
                    <input type="checkbox" />
                    <span>200 to 300</span>
                </div>
            </div>
        </div>
    )
}

export default Filter