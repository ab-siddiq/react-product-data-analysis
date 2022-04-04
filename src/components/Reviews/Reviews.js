import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 m-10 rounded">
            {reviews.map(review=> <Review key={review.id} review={review}></Review>)}
        </div>
    );
};

export default Reviews;