import React from 'react';

const Review = (props) => {
    const { name, rating, comment, image } = props.review;
    console.log(image)
    return (
        <div className='bg-green-600 p-5 rounded'>
            <img src={image} alt="" />
            <p>{name}</p>
            <p>"{comment}"</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Review;