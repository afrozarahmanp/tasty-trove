import React from 'react';

const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item
    return (
        <div className='flex space-x-3'>
            <img className='w-[120px] mask mask-hexagon-2' src={image} alt="" />
            <div>
                <h3 className='uppercase font-bold'>{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;