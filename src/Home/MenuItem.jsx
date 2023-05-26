import React, { memo } from 'react';


const MenuItem = ({menu}) => {
    const {name,image,price,recipe}=menu;
    return (
        <div className='col-lg-6'>
            <img className='size' src={image} alt="" />
            <h3>{name}---------- {price}</h3>
            <p>{recipe}</p>
        </div>
    );
};



export default MenuItem;