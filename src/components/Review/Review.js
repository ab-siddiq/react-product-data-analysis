import React from 'react';

const Review = (props) => {
    const { name, rating, comment, image } = props.review;
    console.log(image)
    return (
        <div className='bg-green-600 text-green-200 p-5 rounded grid grid-cols-1 hover:scale-110 duration-200 text-center'>
            <img className='h-20 w-20 bg-red-500 rounded-full ' src={image} alt="" />
            <p>{name}</p>
            <p>-"{comment}"</p>
            <p>Rating: {rating} (5)</p>
        </div>
    );
};

export default Review;