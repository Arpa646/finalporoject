import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Item = ({ review }) => {
    console.log(review)
    return (
        <div className='hhh'>
            <p>{review.details}</p>
            <h3>{review.name}</h3>

            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
            />
        </div>
    );
};

export default Item;