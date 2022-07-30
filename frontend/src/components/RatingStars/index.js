import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../store/review';
import './RatingStars.css';

function RatingStars({ id }) {
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.review));
    const spotReviews = reviews.filter(review => review.spotId === Number(id));
    
    let ratingSum = 0;
    for (let review of spotReviews) {
        ratingSum += review.rating;
    }
    const avgStarRating = (ratingSum / spotReviews.length).toFixed(1);
    useEffect(() => {
        dispatch(getReviews(id))
    }, [dispatch, id]);

    return (
        <>
            {
                reviews && (
                    <>
                        <i className="fa fa-star"></i>
                        <span className='avg-rating'>{avgStarRating === 'NaN' ? 'New' : avgStarRating}</span>
                    </>
                )
            }
        </>
    );
}

export default RatingStars;